const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.tsx",
  mode: isProd ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
};
