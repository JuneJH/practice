/*
 * @Author: June
 * @Date: 2021-12-21 14:33:59
 * @LastEditTime: 2021-12-21 14:52:10
 * @LastEditors: June
 * @Description: 
 */

const less = require("less");
module.exports = function (source){
    console.log("runnn")
    less.render(source,(err,output)=>{
        console.log("==============",output)
        this.callback(err,output.css);
    })

}