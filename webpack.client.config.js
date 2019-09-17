var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    'client.marko': './assets/src/client.marko.js',
    'client.react': './assets/src/client.react.js',
    'client.rax': './assets/src/client.rax.js',
    'client.preact': './assets/src/client.preact.js',
    'client.vue': './assets/src/client.vue.js',
    'client.inferno': './assets/src/client.inferno.js'
  },
  output: {
    path: path.join(process.cwd(), 'assets/build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules:[
      // react & rax
      {
        test: /(rax|react|.)\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), {
              targets: {
                browsers: ['last 2 versions', 'IE >= 9']
              },
              modules: false,
              loose: true
            }],
            [require.resolve('@babel/preset-react')],
          ],
          plugins: [
            [require.resolve('@babel/plugin-transform-runtime')],
            [require.resolve('@babel/plugin-transform-react-jsx')],
            [require.resolve('@babel/plugin-proposal-decorators'), {legacy: true}],
            [require.resolve('@babel/plugin-proposal-class-properties'), {loose: true}]
          ]
        }
      },
      {
        test: /\.preact\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), {
              targets: {
                browsers: ['last 2 versions', 'IE >= 9']
              },
              modules: false,
              loose: true
            }],
            [require.resolve('@babel/preset-react')],
          ],
          plugins: [
            [require.resolve('@babel/plugin-transform-runtime')],
            [require.resolve('@babel/plugin-transform-react-jsx'), {pragma: 'h'}],
            [require.resolve('@babel/plugin-proposal-decorators'), {legacy: true}],
            [require.resolve('@babel/plugin-proposal-class-properties'), {loose: true}],
          ]
        }
      },
      {
        test: /\.inferno\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), {
              modules: false,
              loose: true
            }],
          ],
          plugins: [
            [require.resolve("babel-plugin-inferno"), {imports: true}],
            [require.resolve('@babel/plugin-transform-runtime')],
            [require.resolve('@babel/plugin-proposal-decorators'), {legacy: true}],
            [require.resolve('@babel/plugin-proposal-class-properties'), {loose: true}],
          ]
        }
      },
      {
        test: /\.vue\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), {
              modules: false,
              loose: true
            }],
          ],
          plugins: [
            require.resolve('babel-plugin-transform-vue-jsx')
          ]
        }
      },
      {
        test: /\.marko$/,
        exclude: /node_modules/,
        loader: 'marko-loader'
      }
    ]
  },
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'rax': 'window.Rax',
    'vue': 'window.Vue',
    'preact': 'window.preact',
    'inferno': 'window.Inferno'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]
};