var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: './css/stylesheet.css',
});

module.exports = {

    entry: {
        app_js: './src/js/app.js',
        //  app_css:'./src/css/stylesheet.scss'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js",
        // publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: [{loader: "babel-loader", options: {presets: ['es2015']}}]
            },
            {
                test: /\.s[ac]ss$/, loader: ExtractTextPlugin.extract({
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.sass$/, loader: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        publicPath: '../'       // override the default path
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }],

            }, {
                test: /\.(jpg|png)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',

                    }
                }]
            },
            // {
            //     test: /\.html$/,
            //     use: [{
            //         loader: "file-loader",
            //         options: {
            //             name: '[name].[ext]',
            //         }
            //     }],
            //     exclude: path.resolve(__dirname, 'src/index.html'),
            //
            // }
        ]
    },
    plugins: [
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: 'pooper.js',
            chartjs: 'chart.js'
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'dashboard.html',
            template: 'src/dashboard.html',
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};