const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../../../sites/config/.env') })

const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.common')

const subdomainPrefix = process.env.URL_CONFIGS_SUBDOMAIN_PREFIX
const topLevelDomain = process.env.URL_CONFIGS_TOP_LEVEL_DOMAIN

const publicPath = `https://www.songpollapp.com/build`

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash].js',
        publicPath
    },
    plugins: [
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }
})
