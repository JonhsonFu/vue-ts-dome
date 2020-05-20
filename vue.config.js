/*
 * @Author:fushaoshuai
 * @Date: 2020-05-20 16:30:10
 * @LastEditTime: 2020 - 05 - 20 16: 30: 10
 * @LastEditors: Please set LastEditors
 * @Description: 代理转发配置
 * @FilePath: \vuedemo\babel.config.js
 */
module.exports = {
    devServer: {
        //   disableHostCheck: true,
        port: 8080,
        open: true, //配置自动启动浏览器
        proxy: {
            '/fss': {
                target: 'http://127.0.0.1:9527', //对应自己的接口
                changeOrigin: true,
                ws: true,
                //   pathRewrite: { //是否移除api三个字段
                //     '^/api': ''
                //   }
            }
        }
    },
}