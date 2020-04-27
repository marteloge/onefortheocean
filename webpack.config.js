const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProd = !!(env && env.production);

  console.log(env, isProd);

  return {
    entry: './src/index.tsx',
    mode: isProd ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [new HtmlWebpackPlugin()],
  };
};
