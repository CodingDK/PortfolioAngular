var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var helpers = require('./webpack.helpers');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

console.log('@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@');

module.exports = {

    entry: {
        'vendor': './ClientApp/vendor.ts',
        'polyfills': './ClientApp/polyfills.ts',
        'app': './ClientApp/main-aot.ts' // AoT compilation
    },

    output: {
        path: './wwwroot/',
        filename: 'dist/[name].[hash].bundle.js',
        chunkFilename: 'dist/[id].[hash].chunk.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        outputPath: path.join(__dirname, 'wwwroot/')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular-router-loader?aot=true&genDir=aot/'
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                loader: 'file-loader?name=assets/[name]-[hash:6].[ext]'
            },
            {
                test: /favicon.ico$/,
                loader: 'file-loader?name=/[name].[ext]'
            },
            /*{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },*/
            { test: /\.css(\?|$)/, loader: ExtractTextPlugin.extract(['css-loader']) },
            { test: /\.scss(\?|$)/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ],
        exprContextCritical: false
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin(
            [
                './wwwroot/dist',
                './wwwroot/assets'
            ]
        ),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new webpack.optimize.CommonsChunkPlugin(
            {
                name: ['vendor', 'polyfills']
            }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'ClientApp/index.html'
        })/*,

        new CopyWebpackPlugin([
            { from: './angularApp/images/*.*', to: 'assets/', flatten: true }
        ])*/,
        new OptimizeCssAssetsPlugin(
            { cssProcessorOptions: { discardComments: { removeAll: true }, zindex: false } }
        )
    ]
};

