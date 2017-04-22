
var path = require('path');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    // loaders: [
    //   {
    //     test: /\.css$/, 
    //     loader: 'style-loader!css-loader!autoprefixer-loader'
    //   },
    //   {
    //     test: /\.less/,
    // 	  loaders: 'style-loader!css-loader!autoprefixer-loader!less-loader'
    //   },
    //   {
    //     test: /\.js$/,
    //     exclude: /(node_modules|bower_components)/,
    //     loader: 'babel-loader',
    //     query: {
    //       presets: ['env']
    //     }
    //   }
    // ]
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
        exclude: path.resolve(__dirname,'node_modules'), 
        include: path.resolve(__dirname,'modules'),
        loader: "babel-loader" ,
        query: {
          presets: ['env']
        }
      }
    ]
  },
}