const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPugin = require('copy-webpack-plugin')
const dev_env = process.env.NODE_DEV == 'dev';


module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.(gif|jpg|jpeg|png|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'assets/[name].[hash:5].[ext]'
                    }
                }]
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [dev_env ? "style-loader" : {
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
                use: [dev_env ? "style-loader" : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // url: false 不可以设置为false 否则会导致css里的url不处理
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            // url: false 不可以设置为false 否则会导致css里的url不处理
                        }
                    } //
                ],
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
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPugin([{
            from: path.join(__dirname, 'src/assets'),
            to: path.join(__dirname, 'dist', 'assets')
        }])
    ],
    resolve: {
        //配置别名，在项目中可缩减引用路径
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@http': path.resolve(__dirname, 'src/http'),
            '@mobx': path.resolve(__dirname, 'src/mobx'),
            '@views': path.resolve(__dirname, 'src/views'),
            '@commonComponents': path.resolve(__dirname, 'src/commonComponents'),
        },
        extensions: ['.jsx', '.js', '.json', '.scss', '.css', '.less']
    }
};