const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./app/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "app/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      // loads .js/jsx/json files
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "/")],
        loader: "babel-loader",
        resolve: {
          extensions: [".js", ".jsx", ".json"]
        }
      },
      {
        // loads .html files
        test: /\.(html)$/,
        include: [path.resolve(__dirname, "/")],
        use: {
          loader: "html-loader"
        }
      },
      {
        // loads .css files
        test: /\.css$/,
        include: [path.resolve(__dirname, "/")],
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html"
    })
  ]
};