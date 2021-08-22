const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.jsx",
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"],
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
    compress: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React from Scratch',
      template: './public/index.html',
      filename: './index.html'
    }),
  ],
};