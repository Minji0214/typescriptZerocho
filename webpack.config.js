const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production
  devtool: "eval", // hidden-source-map --> 그냥 소스맵을 사용시 노출됨.
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./client",
  },
  // module: {
  //   rules: [
  //     // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
  //     { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
  //   ],
  // },
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: { plugins: ["react-refresh/babel"] },
      },
      {
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader",
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [new ReactRefreshPlugin(), new ForkTsCheckerWebpackPlugin()],
  output: {
    // filename: "app.js",
    // path: path.join(__dirname, "dist"),
    // publicPath: "/dist",
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
  devServer: {
    static: __dirname,
  },
};
