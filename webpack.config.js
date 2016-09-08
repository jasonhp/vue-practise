var path = require('path');

module.exports = {
    entry: path.join(__dirname,'src','main.js'),
    output: {
        path: './dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.sass$/,
                loader: 'sass-loader'
            }
        ]
    }
};