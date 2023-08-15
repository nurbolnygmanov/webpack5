// webpack.config.js

const path = require("path"); // require because config file cant use ESmodules
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/about.js",
  output: {
    filename: "[name].[contenthash].js", // name of the generated file
    path: path.resolve(__dirname, "dist"), //⚠️ path for absolute path
    clean: true,
    publicPath: "http://localhost:9002/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset", //⚠️copy file in output dir
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      title: "About",
    }),
    new ModuleFederationPlugin({
      name: "AboutPageApp",
      filename: "remoteEntry.js",
      exposes: {
        "./AboutPage": "./src/components/about-page/about-page.js",
      },
      remotes: {
        CaptionApp: "CaptionApp@http://localhost:9003/remoteEntry.js",
      },
    }),
  ],
};
