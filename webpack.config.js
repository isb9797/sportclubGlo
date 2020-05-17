/* eslint-disable strict */
// eslint-disable-next-line no-undef
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    devServer: {
        overlay: true,
        inline:true,
        host: '192.168.31.70',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
};
