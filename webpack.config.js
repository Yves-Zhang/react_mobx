const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            url: false
                        }
                    }
                ],
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024, //表示图片最大为1024KB 
                        name: 'assets/images/[name].[ext]' // 生成的文件名
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'index.html',
            filename: 'index.html'
        })
    ],
    resolve: {
        //配置别名，在项目中可缩减引用路径
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@http': path.resolve(__dirname, 'src/http'),
            '@mobx': path.resolve(__dirname, 'src/mobx'),
            '@views': path.resolve(__dirname, 'src/views'),
        },
        extensions: ['.jsx', '.js', '.json', '.scss', '.css', '.less']
    }
};