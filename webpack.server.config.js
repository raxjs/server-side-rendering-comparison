var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: {
    'server.marko': './assets/src/app/index.marko',
    'server.react': './assets/src/server.react.js',
    'server.fast_react': './assets/src/server.fast_react.js',
    'server.rax': './assets/src/server.rax.js',
    'server.preact': './assets/src/server.preact.js',
    'server.vue': './assets/src/server.vue.js',
    'server.inferno': './assets/src/server.inferno.js'
  },
  output: {
    filename: './assets/build/[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders:[
      {
        test: /(preact|rax|react|fast_react|.)\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'react', 'stage-0']
        }
      },
      {
          test: /\.inferno\.js?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              'presets': ['es2015', 'stage-0'],
              'plugins': [
                  'inferno'
              ]
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
      },
      {
        test: /\.marko$/,
        exclude: /node_modules/,
        loader: 'marko-loader',
        query: {
          'target': 'server'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"',
        'BUNDLE': 'true'
      }
    }),
  ]
};
