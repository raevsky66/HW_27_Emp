const path = require('path')
module.exports ={
    entry: './src/main.js',
    output: {
        filename: "bundler.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development"

}