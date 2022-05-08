import axios from 'axios'

const instance = axios.create({
    baseURL:"http://45.76.175.103:8000/",
    timeout:4000
})


instance.interceptors.request.use(config=>{
    // const token = window.sessionStorage.getItem('token')
    // if (token){
    //     config.headers = {
    //         Authorization: `Bearer ${token}`
    //     }
    // }
    return config
}, err=>{
    return Promise.reject(err)
})


instance.interceptors.response.use(res=>{
    return res
}, err=>{
    return Promise.reject(err)
})

export default instance;