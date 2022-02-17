const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const devMode = process.env.NODE_ENV === 'development'

const filename = (ext) => {
  return devMode ? `[name].${ext}` : `[name].[hash].${ext}`
}

const optimization = () => {
  const config = {}

  if (!devMode) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }

  return config
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['./index.js']
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  // handle extensions
  resolve: {
    // import (ex. import './styles/styles.css' instead './styles/styles')
    extensions: ['.js', '.jsx', '.png', '.css'],
    // import (ex. import '../../../styles.css' instead '@models/styles.css')
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: optimization(),
  devServer: {
    client: {
      logging: 'info',
      reconnect: false,
      // compilation error and warns
      overlay: true
    },
    hot: devMode,
    port: 3000
  },
  devtool: devMode ? 'source-map' : false,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Delivery',
      template: path.resolve(__dirname, '/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: !devMode
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules',
      emitWarning: true,
      emitError: true
    })
  ],
  // loaders (for file types)
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
