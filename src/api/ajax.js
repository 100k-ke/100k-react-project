import axios from 'axios'
import qs from 'querystring'
import {message} from 'antd'

const instance = axios.create()

instance.interceptors.request.use(
  (config)=>{
    const {method,data} = config
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
    if (error.response.status === 401) {
      message.error('用户数据校验失败，请重新登录！')
    }else{ 
      message.error(error.message,1)
    }
    return new Promise(()=>{});
  }
)

export default instance