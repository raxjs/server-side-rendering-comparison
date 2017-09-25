var path = require("path");
var fs = require("fs");
var webpack = require("webpack");

module.exports = {
	entry: {
		"client.marko": "./assets/src/app/index.marko",
		"client.react": "./assets/src/client.react.js",
		"client.rax": "./assets/src/client.rax.js",
		"client.preact": "./assets/src/client.preact.js",
		"client.vue": "./assets/src/client.vue.js",
		"client.inferno": "./assets/src/client.inferno.js"
	},
	output: {
		filename: "./assets/build/[name].bundle.js"
	},
	module: {
		strictExportPresence: true,
		rules: [
			// react & rax & styles.js
			{
				test: /(rax|p?react|.)\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["es2015", "react", "stage-0"]
				}
			},
			{
				test: /\.inferno\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["es2015", "stage-0"],
					plugins: ["inferno"]
				}
			},
			{
				test: /\.vue\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["es2015", "stage-0"],
					plugins: ["transform-vue-jsx"]
				}
			},
			{
				test: /\.marko$/,
				exclude: /node_modules/,
				loader: "marko-loader"
			}
		]
	},
	externals: {
		react: "window.React",
		"react-dom": "window.ReactDOM",
		rax: "window.Rax",
		vue: "window.Vue",
		preact: "window.preact",
		inferno: "window.Inferno"
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: '"production"'
			}
		})
	],
	// Some libraries import Node modules but don't use them in the browser.
	// Tell Webpack to provide empty mocks for them so importing them works.
	node: {
		fs: "empty",
		net: "empty",
		tls: "empty",
		__dirname: true
	},
	// Turn off performance hints during development because we don't do any
	// splitting or minification in interest of speed. These warnings become
	// cumbersome.
	performance: {
		hints: false
	}
};
