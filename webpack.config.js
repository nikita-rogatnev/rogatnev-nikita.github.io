const path = require(`path`);

module.exports = {
    mode: 'development',
    entry: `./src/index.jsx`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `./public`),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, `./public`),
        },
        port: 8080,
        compress: true,
        hot: true,
        historyApiFallback: true,
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
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: "sass-loader",
                        options: {
                            api: "modern",
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [`.js`, `.jsx`],
    },
    devtool: `source-map`,
};
