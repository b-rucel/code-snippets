'use strict';

// Importing Webpack and html-webpack-plugin. 
// It also stores the absolute path to our src folder for reuse.
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');


module.exports = {
    // Build target is for the web and that we want to leverage the cache.
    cache: true,
    target: 'web',

    // 
    entry: {
        module: path.join(srcPath, 'app.js'),
        common: ['react']
    },

    // Configuring where the src build files are located
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    
    // Configure destination paths
    output: {
        path: path.join(__dirname, 'tmp'),
        publicPath: '',
        filename: '[name].js',
        library: ['Guide', '[name]'],
        pathInfo: true
    },

    // babel transpiler loaded
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel?cacheDirectory'
        }]
    },
    
    // 
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],

    debug: true,

    // will use the best (and super fast) Webpack sourcemap generator.
    devtool: 'eval-cheap-module-source-map',

    
    devServer: {
        contentBase: './tmp',
        historyApiFallback: true
    }
};