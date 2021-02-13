const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
      })
  ],
  devServer: {
    historyApiFallback: true
  }
};
