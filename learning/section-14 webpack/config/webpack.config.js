const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HTMLWebpackPlugin } = require("html-webpack-plugin");
const path = require('path')

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[hash:4]_[name].js",
    path: __dirname + "/dist",
  },
  devServer: {
    open: true,
    static: path.resolve(__dirname, "../", "public"),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "new aplication",
      template: "src/template.html",
    }),
  ],
};
