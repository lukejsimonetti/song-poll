// require plugins
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path')

const buildPath = path.resolve(__dirname, '../', 'docs/')
const bundlePath = path.resolve(__dirname, '../', 'docs/')

module.exports = {
    devtool: 'eval',
    optimization: {
        usedExports: true,
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                styles: {
                    name: 'styles',
                    test: /\.(sa|sc|c)ss$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, '../src'),
            components: path.resolve(__dirname, '../src/components')
        }
    },
    entry: {
        index: './src/index.js',
        styles: './src/index.css'
    },
    plugins: [
        new CleanWebpackPlugin(['song-poll'], { root: bundlePath }),
        new HtmlWebpackPlugin({
            title: 'Song Poll',
            template: 'public/index.html'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    output: {
        path: buildPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    }
}
