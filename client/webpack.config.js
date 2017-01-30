const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  cache: false,
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: APP_DIR,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx']
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};

module.exports = config;
