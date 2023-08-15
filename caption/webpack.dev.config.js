// webpack.config.js

const path = require("path"); // require because config file cant use ESmodules
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].bundle.js", // name of the generated file
    path: path.resolve(__dirname, "dist"), //⚠️ path for absolute path
    clean: true,
    publicPath: "http://localhost:9003/",
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
    port: 9003,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      index: "caption.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "caption.html",
      title: "Caption",
    }),
    new ModuleFederationPlugin({
      name: "CaptionApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Caption": "./src/components/caption.js",
      },
    }),
  ],
};
