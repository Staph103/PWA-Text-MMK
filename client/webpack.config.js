const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    // TODO: Add and configure workbox plugins for a service worker and manifest file.
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html",
        
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,

        name: "PWA-TEXT_MMK",
        short_name: "JATE",
        description: "",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        start_url: "./",
        publicPath: "./",

        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
      new InjectManifest({
        swSrc: "./src-sw.js",
      }),
    ],

    // TODO: Add CSS loaders and babel to webpack.
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
