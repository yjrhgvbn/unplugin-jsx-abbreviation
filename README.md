# unplugin-jsx-abbreviation

## Install

```bash
npm i unplugin-jsx-abbreviation
```

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
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      "unplugin-jsx-abbreviation/nuxt",
      {
        /* options */
      },
    ],
  ],
});
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require("unplugin-jsx-abbreviation/webpack")({
        /* options */
      }),
    ],
  },
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
