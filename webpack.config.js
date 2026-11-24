const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const CssMinimizerPlugin = require(`css-minimizer-webpack-plugin`);

const PUBLIC_DIR = path.join(__dirname, `./public`);

// Renders <App/> to static HTML at build time, so the production page
// ships its content in index.html and needs no React on the client.
const prerender = () => {
    require(`@babel/register`)({
        extensions: [`.js`, `.jsx`],
        only: [path.join(__dirname, `src`)],
        cache: false,
    });

    const React = require(`react`);
    const {renderToStaticMarkup} = require(`react-dom/server`);
    const App = require(`./src/components/app/app`).default;

    return renderToStaticMarkup(React.createElement(App));
};

module.exports = (env, argv = {}) => {
    const isProduction = argv.mode === `production`;

    return {
        mode: isProduction ? `production` : `development`,
        // Production: styles + a tiny scroll-reveal script on top of prerendered HTML.
        // Development: the React app rendered in the browser with hot reload.
        entry: isProduction ? `./src/static.js` : `./src/index.jsx`,
        output: {
            filename: `bundle.js`,
            path: PUBLIC_DIR,
            assetModuleFilename: `fonts/[name][ext]`,
        },
        devServer: {
            static: {
                directory: PUBLIC_DIR,
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
                    test: /\.s?css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : `style-loader`,
                        `css-loader`,
                        {
                            loader: `sass-loader`,
                            options: {
                                api: `modern`,
                            },
                        },
                    ],
                },
                {
                    test: /\.woff2$/,
                    type: `asset/resource`,
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `./src/index.html`,
                filename: `index.html`,
                inject: `head`,
                scriptLoading: `defer`,
                hash: true,
                content: isProduction ? prerender() : ``,
            }),
            ...(isProduction ? [new MiniCssExtractPlugin({filename: `bundle.css`})] : []),
        ],
        optimization: {
            minimizer: [`...`, new CssMinimizerPlugin()],
        },
        performance: {
            hints: isProduction ? `warning` : false,
        },
        resolve: {
            extensions: [`.js`, `.jsx`],
        },
        devtool: isProduction ? false : `eval-source-map`,
    };
};
