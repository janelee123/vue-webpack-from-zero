var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: ['babel-polyfill', './src/main.js'],//项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
	output: {
		path: path.resolve(__dirname,'./dist'),//项目的打包文件路径
		publicPath: '/dist',//通过devServer访问路径
		filename: 'build.js'//打包后的文件名
	},
	devServer: {
		historyApiFallback: true,
		overlay: true
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ //忽略node_modules文件夹下的文件，不用转码
            }
        ]
    }
};