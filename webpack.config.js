'use strict';

var webpack = require('webpack');

module.exports = {
  entry: "./js/filesToBuild/page.js",
  output: {
    path: __dirname + "/js",
    filename: "build.js"
  },

  watch: true,
  devtool: 'source-map',

};

