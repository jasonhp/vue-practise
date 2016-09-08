var path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname,'/src/main.js')
    },
    output: {
        path: __dirname,
        pulicPath: '/dist',
        filename: 'dist/build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: path.posix.join(__dirname, 'public', '[name].[hash:7].[ext]')
                }
            }
        ]
    }
};