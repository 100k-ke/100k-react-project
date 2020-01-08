import axios from 'axios'
import qs from 'querystring'

// 创建instance，相比axios而言，少了一些方法：create、all...
const instance = axios.create({
  timeout:20000
})

instance.interceptors.request.use(
  (config)=>{
    const {method,data} = config
    if (method.toLowerCase() === 'post') {
      // 当时post请求，且传递的参数data的类型是对象，则转为urlencoded形式的参数
      // 因为axios发送post请求默认是转为json格式发给服务器，
      if (data instanceof Object) {   
        config.data = qs.stringify(data)
      }
    }
    return config
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response =>  {
    
    return response.data
  },  
  error => { // 请求失败 
    return new Promise(()=>{})  
  }
)
export default instance  