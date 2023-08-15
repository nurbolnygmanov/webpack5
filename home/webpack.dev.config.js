// webpack.config.js

const path = require("path"); // require because config file cant use ESmodules
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/home.js",
  output: {
    filename: "[name].bundle.js", // name of the generated file
    path: path.resolve(__dirname, "dist"), //⚠️ path for absolute path
    clean: true,
    publicPath: "http://localhost:9001/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset", //⚠️copy file in output dir
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  mode: "development",
  devServer: {
    port: 9001,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      index: "home.html",
      // writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "home.html",
      title: "Home",
    }),
    new ModuleFederationPlugin({
      name: "HomePageApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/button.js",
        "./HomePage": "./src/components/home-page/home-page.js",
      },
    }),
  ],
};
