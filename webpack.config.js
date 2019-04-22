/* webpack.config.js */

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require(`copy-webpack-plugin`);

module.exports = {
    devtool: false, //devtool: 'eval', // Enable to debug js code
    entry: {
            app: [
                './src/index.js',
                './src/style/main.scss'
            ]
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: devMode ? '[name].js' : '[name].[chunkhash].js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), // clean folder 'dist'
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyPlugin([
            {
                from: `src/img`,
                to: `img`
            },
            {
                from: `src/4ba82d08754e.html`,
                to: `4ba82d08754e.html`
            },
            {
                from: `src/robots.txt`,
                to: `robots.txt`
            },
            {
                from: `src/sitemap.xml`,
                to: `sitemap.xml`
            },
        ]),

    ],
    module: {
    rules: [
        {
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader", // enable eslint
            options: {
                fix: true
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.s?[ac]ss$/,
            use: [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
  }
};
