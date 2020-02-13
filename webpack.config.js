const path = require('path');

module.exports = {
    entry:"./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "public/bundle/js"),
        filename: "bundled-file.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    devtool: 'source-map',
    //watch: true
  };