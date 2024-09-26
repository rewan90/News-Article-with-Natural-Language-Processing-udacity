const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/sw.js",

  //  entry: "./src/client/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/sw.js", to: "sw.js" }],
    }),
  ],
  output: {
   // path: path.join(__dirname, "dist"),
    //    filename: "index.js",
    filename: "sw.js",
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',

    publicPath: "/",
  },
};
