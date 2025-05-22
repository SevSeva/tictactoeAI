const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of the application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
    publicPath: '/', // Ensures correct paths for assets
  },
  mode: 'development', // Can be 'production' for minified builds
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use public/index.html as a template
      filename: 'index.html', // Output filename
    }),
  ],
  devServer: { // Optional: configuration for webpack-dev-server
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // Important for single-page applications
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing .js and .jsx files without specifying the extension
  },
};
