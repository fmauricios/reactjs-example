module.exports = {
  entry: {
    app: ['./src/index.jsx']
  },
  output: {
    path: './build',
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          compact: false
        }
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url' }
    ]
  }
}
