var path = require('path');
var webpack = require('webpack');
var validate = require('webpack-validator');

module.exports = validate({
  entry: [
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [

  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: "style!css",
      include: path.join(__dirname, 'src')
    }]
  }
})
