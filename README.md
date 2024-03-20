# unplugin-jsx-abbreviation

automatic replacement of jsx attributes

## Install

```bash
npm i unplugin-jsx-abbreviation
```

## Options

```js
{
  replace: {
    // the matching attribute
    c: {
      // the attribute name to replace
      name: "className",
      // the value to replace with
      value: (v) => {
        // v is the value of the attribute, always a string
        // <div c={"s"} /> => v = `"s"`, <div c="s" /> => v = `"s"`, <div c={["s"]} /> => v = `["s"]`
        return `{clsx(${v})}`;
      },
    },

    // multiple attributes
    // <div c={"s"} /> will be replaced with <div className={clsx("s")} style={"s"}/>
    c: [{
      name: (n) => "className",
      value: (v) => {
        return `{clsx(${v})}`;
      },
    },
    {
      transform: (n, v) => {
        return {
          name: "style",
          value: `{${v}}`,
        };
      },
    }],
  },
}
```

you can see the [playground](./playground/vite.config.ts) for more details.

## Auto import

If you want auto import package. you can use [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) to auto import package for you.

you can see the [playground](./playground/vite.config.ts) about how to use it.

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import unpluginJsxAbbreviation from "unplugin-jsx-abbreviation/vite";

export default defineConfig({
  plugins: [
    unpluginJsxAbbreviation({
      /* options */
    }),
  ],
});
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import unpluginJsxAbbreviation from "unplugin-jsx-abbreviation/rollup";

export default {
  plugins: [
    unpluginJsxAbbreviation({
      /* options */
    }),
  ],
};
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require("unplugin-jsx-abbreviation/webpack")({
      /* options */
    }),
  ],
};
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from "esbuild";
import unpluginJsxAbbreviation from "unplugin-jsx-abbreviation/esbuild";

build({
  plugins: [unpluginJsxAbbreviation()],
});
```

<br></details>

## typescript

If you are using TypeScript, you need to add a global type file to your project.

for example, create a `type.d.ts` file in your `src` folder and add the following content to it:

```ts
declare namespace React {
  interface HTMLAttributes {
    c?: string | string[];
  }
}
```

you can see the [playground](./playground/src/type.d.ts) for more details.
