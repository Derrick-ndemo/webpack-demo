const { type } = require('os');
const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/printed.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: { // this is needed due to multiple entry points
        runtimeChunk: 'single',
    },
    
};