
var path = require('path');

module.exports = {
  entry: './exa.js',
  output: {
    path: path.resolve(__dirname,'../exports'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'autoprefixer-loader' ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'autoprefixer-loader',
          'less-loader'
        ]
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" ,
        query: {
          presets: ['env']
        }
      }
    ]
  },
}