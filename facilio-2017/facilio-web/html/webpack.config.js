const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    import: './react/import.js',
    reagieren: './reagieren/index.js'
  },
  output: {
    path: path.resolve(__dirname, "js"),
    filename: 'modules.[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  }
}