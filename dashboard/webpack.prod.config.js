// webpack.config.js

const path = require("path"); // require because config file cant use ESmodules
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/dashboard.js",
  output: {
    filename: "[name].[contenthash].js", // name of the generated file
    path: path.resolve(__dirname, "dist"), //⚠️ path for absolute path
    clean: true,
    publicPath: "http://localhost:9000/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset", //⚠️copy file in output dir
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
      filename: "dashboard.html",
      title: "Dashboard",
    }),
    new ModuleFederationPlugin({
      name: "App",
      remotes: {
        HomePageApp: "HomePageApp@http://localhost:9001/remoteEntry.js",
        AboutPageApp: "AboutPageApp@http://localhost:9002/remoteEntry.js",
      },
    }),
  ],
};
