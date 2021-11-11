const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
    // new BundleAnalyzerPlugin(), // To Get buldle size details
  ],
}
