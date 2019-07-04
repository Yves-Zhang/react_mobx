import axios from 'axios'

const HTTP = axios.create({
    // baseURL: "",
    headers: {},
    // timeout: 5000  
})


// 设置拦截器 request
HTTP.interceptors.request.use(
    config => {
        if (config.method === 'post') {}
        return config
    },
    error => {
        throw new Error(error)
    }
)


// 设置拦截器  response
HTTP.interceptors.response.use(
    response => {
        return response
    },
    error => {
        throw new Error(error)
    }
)

export default HTTP