var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: {
    'server.react': './assets/src/server.react.js',
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
        test: /(preact|rax|react|.)\.js[x]?$/,
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
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]
};
