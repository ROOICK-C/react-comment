const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin= require('html-webpack-plugin')

module.exports = {
    output: {
        filename: 'static/js[name].js', //输出js名称
        path: path.join(__dirname,'../dist'), //打包输出路径
        clean: true,
        publicPath: '/' //打包后文件的公共前缀路径
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.(css| scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions:['.js','.tsx', '.ts','jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html'),
            inject: true,
        }),
        new webpack.DefinePlugin({
            "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV)
        })
    ]
}