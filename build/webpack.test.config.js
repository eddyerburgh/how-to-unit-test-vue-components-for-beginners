const path = require('path');

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
  module: {

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        include: [
          projectRoot,
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
};
