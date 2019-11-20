const path = require("path");

module.exports = {
     root: path.resolve(__dirname, './src/components'),
     modules: true,
     plugins: [require('reshadow/postcss')]
}
