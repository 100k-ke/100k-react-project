import axios from 'axios'
import qs from 'querystring'
import {message} from 'antd'
import store from '../redux/store'

// 创建instance，相比axios而言，少了一些方法：create、all...
const instance = axios.create({
  timeout:20000
})

instance.interceptors.request.use(
  (config)=>{
    const {method,data} = config
    const {token} = store.getState().userInfo
    if (token) config.headers.Authorization = token
    if (method.toLowerCase() === 'post') {
      if (data instanceof Object) {
        config.data = qs.stringify(data)
      }
    }
    return config
  }
)

instance.interceptors.response.use(
  (response)=>{
    return response.data
  },
  (error)=>{
    return new Promise(()=>{});
  }
)

export default instance