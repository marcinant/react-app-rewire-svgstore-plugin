# react-app-rewire-svgstore-plugin

Adds [`webpack-svgstore-plugin`](https://github.com/mrsum/webpack-svgstore-plugin) to your [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

[![npm](https://img.shields.io/npm/v/react-app-rewire-svgstore-plugin.svg?style=flat-square)](http://npm.im/react-app-rewire-svgstore-plugin)
[![MIT License](https://img.shields.io/npm/l/react-app-rewire-svgstore-plugin.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Travis](https://img.shields.io/travis/ctrlplusb/react-app-rewire-svgstore-plugin.svg?style=flat-square)](https://travis-ci.org/ctrlplusb/react-app-rewire-svgstore-plugin)

## TOCs

  - [Installation](#installation)
  - [Usage](#usage)

## Installation

```
yarn add react-app-rewire-svgstore-plugin -D
```

## Usage

Within your `react-app-rewire` config:

```javascript
const svgstorePlugin = require('react-app-rewire-svgstore-plugin')

config = svgstorePlugin(config, env, {
  
})

```

See the [`webpack-svgstore-plugin`](https://github.com/mrsum/webpack-svgstore-plugin) docs for more information.