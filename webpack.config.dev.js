const path = require('path');
const Dotenv = require('dotenv-webpack');
console.log('first')
module.exports = {
  // ... other Webpack configuration options
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env'), // Path to your .env file
    }),
  ],
};
