import path from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { resume } from "./src/data/resume.js";
import { personalCode } from "./src/data/personalCode.js";
import { workCode } from "./src/data/workCode.js";
import { articles } from "./src/data/articles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageData = {};
pageData.resume = resume;
pageData.personalCode = personalCode();
pageData.workCode = workCode();
pageData.articles = articles();

export default {
  entry: { index: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "assets"),
        },
        {
          from: path.resolve(__dirname, "src", "robots.txt"),
          to: path.resolve(__dirname, "dist", "robots.txt"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      page: JSON.parse(JSON.stringify(pageData)),
      filename: `index.html`,
      chunks: [`index`],
      chunksSortMode: "auto",
      template: "src/index.hbs",
      minify: true,
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
