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
        loader: 'babel',
        exclude: '/node_modules',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
