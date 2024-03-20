import type { UnpluginFactory } from "unplugin";
import { createUnplugin } from "unplugin";
import * as babel from "@babel/core";
import babelJsxAbbreviation, { PluginOptions } from "babel-jsx-abbreviation";

export const unpluginFactory: UnpluginFactory<PluginOptions | undefined> = (options) => ({
  name: "unplugin-jsx-abbreviation",
  transformInclude(id) {
    return id.endsWith(".tsx") || id.endsWith(".jsx");
  },
  enforce: "pre",
  async transform(code, id) {
    const plugins = [[babelJsxAbbreviation, options]];

    if (id.endsWith(".tsx")) {
      plugins.push([
        // @ts-ignore missing type
        await import("@babel/plugin-transform-typescript").then((r) => r.default),
        // @ts-ignore
        { isTSX: true, allowExtensions: true },
      ]);
    }
    const result = babel.transformSync(code, {
      plugins,
    })!;
    return result.code!;
  },
});

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory);

export default unplugin;
