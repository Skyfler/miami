'use strict';

var webpack = require('webpack');

module.exports = {
  entry: "./js/filesToBuild/page.js",
  output: {
    path: __dirname + "/js",
    filename: "build.min.js"
  },

  watch: true,
  devtool: 'source-map',
  
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]

};

