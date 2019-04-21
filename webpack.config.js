//@ts-ignore
const path = require('path');
//@ts-ignore
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src',
    output: {
        filename: "[name].bundle.js",
        //@ts-ignore
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts','.js', '.json']
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
