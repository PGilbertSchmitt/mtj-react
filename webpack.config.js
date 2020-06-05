const path = require("path");
const tsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

var babelOptions = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/proposal-class-properties"
  ]
};

module.exports = {
  context: __dirname,
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve('dist'),
    filename: "index.js"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    extensions: [".js", ".ts", ".tsx"],
    plugins: [
      new tsConfigPathsPlugin()
    ]
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "source-map-loader"
      }
    ]
  },
  node: {
    fs: "empty"
  }
};