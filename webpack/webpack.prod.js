const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Code-Evolution'),
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
    // new BundleAnalyzerPlugin(), // To Get buldle size details
  ],
}
