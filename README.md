# practice-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Pros & Cons

### Tailwind
#### Pros
- Utility first
- No more confusing semantic class names (`.section-inner-wrapper`, etc.)
- Mobile first
- No more complex media queries
- Tiny - automatically removes unused CSS
- Comprehensive Docs
- Popular (used by **Netflix Top 10**, **OpenAI**, **Shopify**, **Feastables**, etc)
#### Cons
- Slight learning curve
- Verbose HTML (can be solved with `tailwind-fold`)
- Initial setup (can be confusing for first time users)