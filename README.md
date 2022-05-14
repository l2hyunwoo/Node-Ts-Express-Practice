# Node-Typesceipt-Init

## Package Install

```
// init yarn
yarn init

// Install Typescript Module
yarn add @types/node
yarn add typescript
yarn add -D ts-node

// Make tsconfig.json 
yarn tsc --init --rootDir src --outDir ./bin --esModuleInterop --lib ES2015 --module commonjs --noImplicitAny true

// Make rootDir, outDir
md src
md bin

// Add script in package.json
"scripts": { 
  "build": "tsc", 
  "start": "node ./bin/app.js", 
  "dev": "ts-node ./src/app.ts" 
},

// Set yarn berry
yarn set version berry

// Write PnP in yarnrc.yml
nodeLinker: pnp

// Delete node_modules
yarn install

// Set yarn2 dependency in VSCode
yarn dlx @yarnpkg/sdks vscode

// Add express, body-parser
yarn add -D @types/express @types/body-parser


```
