'use strict';

var webpack = require('webpack');

module.exports = {
  entry: "./js/page.js",
  output: {
    path: __dirname,
    filename: "build.js"
  },

  watch: true,
  devtool: 'source-map',

};

