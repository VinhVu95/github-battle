var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
//NODE_ENV to production
//minify

var config ={
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
      		{ test: /\.(js)$/, use: 'babel-loader' },
      		{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    	]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
    	new HtmlWebpackPlugin({
      		template: 'app/index.html'
    	})
  	]
}

if(process.env.NODE_ENV === 'production'){
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env' : {
				//set node environment inside code webpack will compile
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin() //minify our code
	)
}

module.exports = config;