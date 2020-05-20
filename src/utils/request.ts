import axios from 'axios';
import { Message, MessageBox } from 'element-ui'
const service = axios.create({
    baseURL: 'http://127.0.0.1:9527', // url = base url + request url
    timeout: 10000
    // withCredentials: true // send cookies when cross-domain requests
})
service.interceptors.request.use(
    (config: any) => {
        // Add X-Access-Token header to every request, you can add other custom headers here
        if (config.url && config.baseURL) {
            let path = config.url
        }
        console.log(config,'config')
        return config
    },
    (error: Error) => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        // Some example codes here:
        // code == 20000: success
        // code == 50001: invalid access token
        // code == 50002: already login in other place
        // code == 50003: access token expired
        // code == 50004: invalid user (user not exist)
        // code == 50005: username or password is incorrect
        // You can change this part for your own usage.

        const res = response.data
        if (res.Code !== 1000) {
            Message({
                message: res.Msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            if (res.Code === 50008 || res.Code === 50012 || res.Code === 50014 || res.Code === 20202) {
                MessageBox.confirm(
                    '你已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() => {
                    location.reload() // To prevent bugs from vue-router
                })
            }
            return Promise.reject(new Error(res.Msg || 'Error'))
        } else {
            return response.data
        }
    },
    (error) => {
        console.log('get response error ', error.message)
        if (axios.isCancel(error)) {
            Message({
                message: error.message,
                type: 'error',
                duration: 5 * 1000
            })
            return new Promise(() => { });
        }
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service