/*
 * @Author: June
 * @Date: 2021-12-21 09:59:58
 * @LastEditTime: 2021-12-21 14:30:59
 * @LastEditors: June
 * @Description: 
 */


module.exports = function (str){
    const callback = this.async();
    const res =  str.replace("name","junejh");
    setTimeout(()=>{
        callback(null,res);
    },100);
}