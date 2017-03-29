var webpack = require('webpack');
module.exports = {
    entry: ['./main.js'],
    output:{
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['es2015'],
                    plugins: [
                        ["transform-object-rest-spread"],
                        ["transform-runtime"]
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    resolve: {
        //注意一下, extensions webpack2第一个不是空字符串! 对应不需要后缀的情况.
        extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx', '.vue'],
    },

}