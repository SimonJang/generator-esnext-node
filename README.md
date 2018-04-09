# esnext-generator [![Build Status](https://travis-ci.org/SimonJang/generator-esnext-node.svg?branch=master)](https://travis-ci.org/SimonJang/generator-esnext-node)

A `Yeoman` generator to scaffold an esnext node module.

# Setup

```
yo esnext-node
```

# Build

- Transpiles your `index.js` file.
- Moves the transpiled file to `./dist` folder.

```
npm run build
```

# Test

- Executes linting
- Runs the `test.js` file with `ava`

```
npm test
```
