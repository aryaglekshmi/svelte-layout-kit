# @aryagg/svelte-layout-kit

A Svelte 5 layout component library — sidebar, navbar, dashboard, and landing page blocks.

## Install

```sh
npm install @aryagg/svelte-layout-kit
```

## Local Development

```sh
npm install
npm run dev        # start dev server with live preview
```

- Components live in [src/lib/](src/lib/)
- The preview app lives in [src/routes/](src/routes/)

---

## Publishing an Update to npm

> Do this every time you change the library and want to push a new version.

### Step 1 — Bump the version in `package.json`

Open [package.json](package.json) and increase the `"version"` field.

Follow [semver](https://semver.org/) rules:

| Change type | Example | When to use |
|---|---|---|
| Bug fix | `0.0.1` → `0.0.2` | Small fix, nothing breaking |
| New feature | `0.0.2` → `0.1.0` | Added something new |
| Breaking change | `0.1.0` → `1.0.0` | Old code will stop working |

### Step 2 — Build the library

```sh
npm run build
```

This compiles everything in `src/lib/` into the `dist/` folder that npm will publish.

### Step 3 — Login to npm (first time only)

```sh
npm login
```

Use your npm account. If you don't have one, create it at [npmjs.com](https://www.npmjs.com).

### Step 4 — Publish

```sh
npm publish --access public
```

`--access public` is required because the package name starts with `@aryagg/` (a scoped package).

### Done

Your new version is live at:
`https://www.npmjs.com/package/@aryagg/svelte-layout-kit`

---

## Quick Reference

```sh
npm run dev          # local preview
npm run build        # compile lib → dist/
npm publish --access public   # push to npm
```
