const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: [
    path.resolve(__dirname, "app", "client", "index.js"),
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080",
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: [ "node_modules" ],
        include: path.join(__dirname, "app"),
        query: {
          plugins: [ "transform-runtime" ],
          presets: [ "es2015", "stage-0", "react" ],
        },
      },
      { test: /\.css$/, loader: "style!css" },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: [ "", ".js", ".jsx" ],
  },
}
