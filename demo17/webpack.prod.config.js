
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const optimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        app: './src/index.js',
        common: ['jquery','vue']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': require('./config/dev.env')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "common",
                    chunks: "all",
                    minChunks: 2
                }
            }
        },
        runtimeChunk:{
            name: 'runtime'
        },
        minimizer: [
            new optimizeCss({}),
            new UglifyJsPlugin({
                uglifyOptions: {
                    // 删除注释
                    output: {
                        comments: false
                    },
                    warnings: false,
                    // 删除console debugger 删除警告
                    compress: {
                        drop_console: true,//console
                        drop_debugger: false,
                        pure_funcs: ['console.log']//移除console
                    }
                }
            })
        ]
    }
})
