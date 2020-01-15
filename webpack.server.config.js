var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  mode: 'production', // 'development',
  entry: {
    'server.hyperapp': './assets/src/server.hyperapp.js',
    'server.marko': './assets/src/app/index.marko',
    'server.react': './assets/src/server.react.js',
    'server.rax': './assets/src/server.rax.js',
    'server.preact': './assets/src/server.preact.js',
    'server.vue': './assets/src/server.vue.js',
    'server.inferno': './assets/src/server.inferno.js'
  },
  output: {
    path: path.join(process.cwd(), 'assets/build'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules:[
      {
        test: /\.hyperapp\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), {
              modules: false,
              loose: true
            }],
          ],
          plugins: [
            [require.resolve('@babel/plugin-transform-react-jsx'), {pragma: 'h'}],
          ]
        }
      },
      {
        test: /\.react.*\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), {
              modules: false,
              loose: true
            }],
            [require.resolve('@babel/preset-react')],
          ],
          plugins: [
            [require.resolve('@babel/plugin-transform-react-jsx')],
            [require.resolve('@babel/plugin-proposal-class-properties')],
            [require.resolve('@babel/plugin-transform-react-constant-elements')],
          ]
        }
      },
      {
        test: /\.rax.*\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), {
              modules: false,
              loose: true
            }],
            [require.resolve('@babel/preset-react')],
          ],
          plugins: [
            [require.resolve('babel-plugin-transform-jsx-to-html')],
            [require.resolve('@babel/plugin-transform-react-jsx')],
            [require.resolve('@babel/plugin-proposal-class-properties')],
            [require.resolve('@babel/plugin-transform-react-constant-elements')],
          ]
        }
      },
      {
        test: /\.preact\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), {
              modules: false,
              loose: true
            }],
            [require.resolve('@babel/preset-react')],
          ],
          plugins: [
            [require.resolve('@babel/plugin-transform-react-jsx'), {pragma: 'h', pragmaFrag: 'Fragment'}],
            [require.resolve('@babel/plugin-proposal-class-properties')],
            [require.resolve('@babel/plugin-transform-react-constant-elements')],
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
        loader: 'marko-loader',
        options: {
          'target': 'server'
        }
      },
      { 
        test: /\.handlebars$/, 
        exclude: /node_modules/,
        loader: "handlebars-loader" 
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"', // '"development"',
        'BUNDLE': 'true'
      }
    }),
  ]
};