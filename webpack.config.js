const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  watch:true,
  output: {
       path: path.resolve(__dirname, 'styles'),
       filename: 'bundle.js',
  },
    module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};