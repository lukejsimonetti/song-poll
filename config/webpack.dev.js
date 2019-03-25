const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.common')

const devServerPort = 3002
const publicPath = `http://localhost:${devServerPort}/`

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: 'build',
        hot: true,
        port: devServerPort,
        // https: true,
        overlay: {
            warnings: true,
            errors: true
        },
        headers: { "Access-Control-Allow-Origin": "*" },
        port: 3002,
		inline: true, 
		proxy: { "/api/*": { target: 'http://localhost:3001/', secure: false }  },
        publicPath
    },
    output: {
        filename: 'js/[name].js',
        publicPath
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath
        }),
        new WriteFilePlugin({
            test: /asset-manifest\.json$/
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
})
