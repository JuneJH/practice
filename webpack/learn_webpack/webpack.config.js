/*
 * @Author: June
 * @Date: 2021-12-20 16:58:27
 * @LastEditTime: 2021-12-21 14:55:14
 * @LastEditors: June
 * @Description: 
 */
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileListWebpackPlugin = require("./myPlugins/filelist-webpack-plugin")

// .npmrc  => 统一npm配置
// postcss => postcss.config.css
// browerlist => 根据can i use 配置需要支持的浏览器
// loader 1.不能为箭头函数 （内部需要使用this）
//        2.获取this
//        3.处理异步
//        4.返回一个字符串或者流
module.exports = {
    // chunk 
    // bundle
    // 对象方式多个入口
    // entry:{
    //     a:"./src/a.js",
    //     index:"./src/index.js"
    // }
    // 数组和字符串模式都是一个输出
    // entry: ["./src/a.js", "./src/index.js"],

    entry: "./src/index.js",
    // 即使可以存在多个入口起点，但只指定一个输出配置。
    output: {
        path: path.resolve(__dirname, "./build")
    },
    module: {
        rules: [{
            test: /\.css$/,
            // 自右向左
            use: ["style-loader", "css-loader", 'postcss-loader']
        }, {
            test: /\.less$/,
            use: [path.resolve(__dirname, "./myloader/jh-style-loader.js"), path.resolve(__dirname, "./myloader/jh-css-loader.js"), path.resolve(__dirname, "./myloader/jh-less-loader.js")]
        }, {
            test: /\.js$/,
            use: [{
                loader: path.resolve(__dirname, "./myloader/replace-loader.js")
            }]
        }]
    },
    plugins: [new HtmlWebpackPlugin(),new FileListWebpackPlugin()],
    mode: "development",

    // 处理图片 file-loader,url-loader,
}
