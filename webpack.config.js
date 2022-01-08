
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, 'src/index.ts'),
    worker: path.join(__dirname, 'src/worker.ts')
  },
  // watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  // entry: path.join(__dirname, './src/index.ts'),
  // output: {
  //   path: path.resolve(__dirname, 'public'),
  //   filename: '[name].bundle.js',
  // },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    open: true,
    // host:'127.0.0.1',
    port: 8080,
    hot: true,
    // writeToDisk: true,
    // inline: true,
    // contentBase: './dist',
    devMiddleware: {
      writeToDisk: true
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}