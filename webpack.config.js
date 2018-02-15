var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: './css/main.css',
});

module.exports = {
    entry: {
        app_js: './src/js/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js",
        // publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }],

            },
            {
                test: /\.(jpg|png)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',

                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                    }
                }],
                exclude: path.resolve(__dirname, 'src/index.html')
            }
        ]
    },
    plugins: [
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'users.html',
        //     template: 'src/users.html',
        //     chunks: ['app_js']
        // }),
        new CleanWebpackPlugin(['dist'])
    ]
};