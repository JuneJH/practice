/*
 * @Author: June
 * @Date: 2021-12-21 09:24:47
 * @LastEditTime: 2021-12-21 09:54:05
 * @LastEditors: June
 * @Description: 
 */
module.exports = {
    plugins: [require('cssnano')({
        preset: 'default',
    }),
    require('autoprefixer')
    ]
}