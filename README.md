# typescript-playground

A (simple) way to bootstrap a TypeScript playground equipped with ESLint, Jest, Babel &amp; Parcel

## Before playing

Just ensure that Node packages are installed properly by running:

```bash
$ npm install
```

or

```bash
$ yarn install
```

## Testing

The playground is already equipped with [Jest](https://github.com/facebook/jest) and compatible with TypeScript, hence all the tests which are placed under `__tests__` folders with naming convention of `<moduleName>.spec.ts` will be triggered with a single NPM script:

```bash
$ npm run test
```

or

```bash
$ yarn test
```

## Packaging

Like Jest, [Parcel](https://github.com/parcel-bundler/parcel) is already equipped because of its simplicity and ease of use (over [Webpack](https://github.com/webpack/webpack))

There're two steps of packaging:

1. Compile TypeScript into JavaScript using `tsconfig.build.json` configurations
2. Bundle all the output files into a single one (along with mapping file) with Parcel

All should be done using the built-in script:

```bash
$ npm run build
```

or

```bash
$ yarn build
```
