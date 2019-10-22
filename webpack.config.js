/**
 *  Config file for webpack
 */
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader/lib");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const MODE = process.argv[3] || "production"; // current build mode (development or production)

const config = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MODE !== "production"
                        ? "vue-style-loader"
                        : MiniCssExtractPlugin.loader, "css-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ]
    },
    plugins: [
        // Copy index.html file at "dist" folder
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),

        // Required for proper interpritation for single file components and vue
        new VueLoaderPlugin(),

        // Clean up the "dist" folder between builds
        new CleanWebpackPlugin(),

        // Copy image files to bundle. Copy image files to "img" folder of
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, "/assets/**"),
                to: path.join(__dirname, "/dist")
            }
        ]),

        // Bundles all css files at "style.css" at "dist" folder.
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        proxy: {
            "/api/v1": {
                target: "http://localhost:8081",
                secure: false,
                changeOrigin: true
            }
        }
    },
    devtool: MODE === "development" ? "source-map" : false
};

module.exports = config;