const path = require('path')

module.exports = {
  mode: 'production', // 默认production
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
}