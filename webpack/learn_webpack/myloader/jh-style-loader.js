/*
 * @Author: June
 * @Date: 2021-12-21 14:53:37
 * @LastEditTime: 2021-12-21 14:54:52
 * @LastEditors: June
 * @Description: 
 */
module.exports = function (source) {

    return `
        const style = document.createElement("style");
        style.innerHTML = "${source}";
    `
}