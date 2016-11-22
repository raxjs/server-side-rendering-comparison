var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {

  entry: {
    'client.react': './assets/src/client.react.js',
    'client.rx': './assets/src/client.rx.js',
    'client.vue': './assets/src/client.vue.js'
  },
  output: {
    filename: './assets/build/[name].bundle.js'
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
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'universal-rx': 'window.Rx',
    'vue': 'window.Vue'
  }
};
