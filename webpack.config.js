var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: [
        './src/js/app.js',
        './node_modules/normalize.css/normalize.css',
        './src/sass/base.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: 'dist/',
        filename: 'app.min.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                }),
            }
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
    plugins: [
        new ExtractTextPlugin({
            filename: 'app.min.css',
            allChunks: true,
        }),
    ],
}
