const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    app: "./js/app.js",
    scratch: "./js/scratch.js",
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