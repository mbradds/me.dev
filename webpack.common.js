import path from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: { index: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/main.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      chunks: [`index`],
      chunksSortMode: "auto",
      template: "src/index.hbs",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: false,
        removeComments: false,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: false,
      },
    }),
  ],

  resolve: {
    extensions: ["*", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        sideEffects: true,
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          precompileOptions: { noEscape: true, strict: true },
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    usedExports: true,
  },
};
