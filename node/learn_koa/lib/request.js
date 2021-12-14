/*
 * @Author: June
 * @Date: 2021-12-14 09:33:57
 * @LastEditTime: 2021-12-14 09:55:10
 * @LastEditors: June
 * @Description: 
 */
module.exports = {
    
    get heade(){
        return this.request.heade;
    },
    get ulr(){
        return this.request.url;
    }
}