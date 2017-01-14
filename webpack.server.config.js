var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: {
    'app.react': './assets/src/server.react.js',
    'app.rax': './assets/src/server.rax.js',
    'app.vue': './assets/src/server.vue.js',
    'renderToString.react': './benchmarks/reactRenderToString.js',
    'renderToString.rax': './benchmarks/raxRenderToString.js',
    'route.react': './routes/route.react.js',
    'route.rax': './routes/route.rax.js',
    // we can't webpack vue because the renderer code for vue uses require in
    // an unusual way.
    // 'vueToString.react': './benchmarks/vueRenderToString.js',
    // 'route.vue': './routes/vueRoute.js',
  },
  output: {
    filename: './assets/build/[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders:[
      {
        test: /(rax|react)\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          'plugins': ['transform-runtime'],
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ],
};
