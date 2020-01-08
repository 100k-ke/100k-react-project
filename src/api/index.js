import ajax from './ajax'

// 发送用户名登录请求
export const reqUsernameLogin = (username,pwd) => ajax.post('/loginText',{username,pwd})

// 发送短信验证码请求
export const reqCodeLogin = (phone) => ajax.get('/reqCode',{params:{phone}})

// 发送短信登录请求
export const reqPhoneLogin = ({phone,code}) => ajax.post('/loginSms',{phone,code})

// 自动登录
export const reqAutoLogin = (token) => ajax.get('/auto_login',{params:{token}})

//发送房源信息的请求
export const reqNewHouse = () => ajax.get('/home/newHouse')