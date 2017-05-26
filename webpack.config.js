var path = require('path')

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: 'dist/',
        filename: 'app.min.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        contentBase: './public'
    },
}
