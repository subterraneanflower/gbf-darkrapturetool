const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: `${__dirname}/public`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/index.html', to: 'index.html' },
      { from: 'src/style.css', to: 'style.css' },
      { from: 'src/favicon.png', to: 'favicon.png' },
      { from: 'src/img', to: 'img' }
    ])
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  performance: { hints: false }
};
