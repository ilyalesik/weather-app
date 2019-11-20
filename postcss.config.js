const path = require("path");

module.exports = {
    modules: true,
    plugins: [
        require('reshadow/postcss')({
            root: path.resolve(__dirname, './src/components')
        }),
    ]
};
