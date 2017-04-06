module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.less/,
    	  loaders: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      }
    ]
  },
}