const webpack = require("webpack");
const path = require("path");
const glob = require("glob");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcDir = "./src";
const jsEntries = glob
  .sync("**/*.js", {
    ignore: "**/_*.js",
    cwd: srcDir,
  })
  .map(function (key) {
    // [ '**/*.js' , './src/**/*.js' ]
    return [key, path.resolve(srcDir, key)];
  });

const jsEntryObj = Object.fromEntries(jsEntries);

const htmlEntries = glob.sync("**/*.html", {
  ignore: "**/_*.html",
  cwd: srcDir,
});

const htmlMapCopyPattern = htmlEntries.map(key => {
  // [ '**/*.js' , './src/**/*.js' ]
  return { from: path.resolve(srcDir, key) };
});

const htmlEntriesObject = htmlEntries.map(key => {
  return new HtmlWebpackPlugin({
    template: `src/${key}`,
    filename: key,
    inject: false,
  })
});

const config = {
  entry: jsEntryObj,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]",
  },
  devtool: "source-map",
  target: "web",
  devServer: {
    proxy: {
      // proxy URLs to backend development server
      // '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, "dist"), // boolean | string | array, static file location
    compress: false, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: false, // only errors & warns on hot reload
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: htmlMapCopyPattern,
    }),
    ...htmlEntriesObject,
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
