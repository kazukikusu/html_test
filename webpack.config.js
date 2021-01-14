const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    app: "./js/app.js",
    scratch: "./js/scratch.js",
    countdown: "./js/countdown.js",
    select: "./js/select.js",
    peelback: "./js/peelback.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}