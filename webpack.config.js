const path = require(`path`);
module.exports = {
    mode: 'development',
    entry: `./src/index.jsx`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `./public`), // eslint-disable-line
    },
    devServer: {
        contentBase: path.join(__dirname, `./public`), // eslint-disable-line
        port: 8080,
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: [`.js`, `.jsx`],
    },
    devtool: `source-map`,
};
