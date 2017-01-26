# Workshop client

This is designed to be independant from the server.

The client calls server REST apis.

Design React views, nevermind about Redux state management.

## How to use

Develop : `npm watch-client`

## Build system

1. Gulp runs tasks
  * Runs Webpack
  * Runs Karma tests
  * Watches files
  
2. Webpack
  * Bundles js and jsx sources
 
3. Karma
  * Runs mocha tests
  * Uses Phantom for react
  
## Precisions

Gulp and Babel do not use imports.

This is because they are not under babel transpilation.
