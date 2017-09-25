var path = require("path");
var fs = require("fs");
var webpack = require("webpack");

module.exports = {
	target: "node",
	entry: {
		"server.marko": "./assets/src/app/index.marko",
		"server.react": "./assets/src/server.react.js",
		"server.rax": "./assets/src/server.rax.js",
		"server.preact": "./assets/src/server.preact.js",
		"server.vue": "./assets/src/server.vue.js",
		"server.inferno": "./assets/src/server.inferno.js"
	},
	output: {
		filename: "./assets/build/[name].bundle.js",
		libraryTarget: "commonjs2"
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /(preact|rax|react|.)\.js[x]?$/,
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
				loader: "marko-loader",
				options: {
					target: "server"
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: '"production"',
				BUNDLE: "true"
			}
		})
	],
	// Turn off performance hints during development because we don't do any
	// splitting or minification in interest of speed. These warnings become
	// cumbersome.
	performance: {
		hints: false
	}
};
