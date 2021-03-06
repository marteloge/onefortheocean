const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
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
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new CopyPlugin([{ from: 'assets', to: 'assets' }]),
    ],
  };
};
