var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: {
    'server.react': './assets/src/server.react.js',
    'server.rx': './assets/src/server.rx.js',
    'server.vue': './assets/src/server.vue.js'
  },
  output: {
    filename: './assets/build/[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders:[
      {
        test: /(rx|react)\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.vue\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'stage-0'],
          'plugins': [
            'transform-vue-jsx'
          ]
        }
      }
    ]
  },
  // externals: {
  //   'react': 'window.React',
  //   'react-dom': 'window.ReactDOM',
  //   'universal-rx': 'window.Rx',
  //   'vue': 'window.Vue'
  // },
  // target: 'node',
  // node: {
  //   fs: 'empty',
  //   __dirname: true,
  //   __filename: true
  // }
};
