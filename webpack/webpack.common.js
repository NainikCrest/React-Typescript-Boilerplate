const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      favicon: path.resolve(__dirname, '..', './public/favicon.ico'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', './public/manifest.json'),
          to: path.resolve(__dirname, '..', './build/manifest.json'),
        },
        {
          from: path.resolve(__dirname, '..', './public/logo192.png'),
          to: path.resolve(__dirname, '..', './build/logo192.png'),
        },
      ],
    }),
    // new CopyPlugin({
    //   patterns: [{ from: 'source', to: 'dest' }],
    // }),
  ],
  stats: 'errors-only',
}
