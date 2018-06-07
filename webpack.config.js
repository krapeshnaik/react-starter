const path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        main: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
        // filename: 'main.[chunkhash].js'
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [{
                            'loader': 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: "[name]_[local]_[hash:base64:4]",
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                })
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('dist', {}),

        new ExtractTextPlugin({
            filename: 'styles.[chunkhash].css',
            disable: false,
            allChunks: true
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}