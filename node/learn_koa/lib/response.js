/*
 * @Author: June
 * @Date: 2021-12-14 09:34:09
 * @LastEditTime: 2021-12-14 09:36:36
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