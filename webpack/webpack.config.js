
var webpack = require('webpack');

module.exports = {
    entry: ['./entry.js'],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                   'style-loader','css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    'url-loader?limit=8192'
                ]
            }
            // {
            //     test: /\.css$/,loader: 'style!css'
            // }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("this is xiang！")//注意这是一个数组..
    ]
}