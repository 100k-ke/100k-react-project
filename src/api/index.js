import axios from './ajax'

export const reqDetailRecommend = () => axios.get('/detail/nhRecommend')

//新房+租房
export const reqnewHouse = ()=>axios.get(`/home/newHouse`)

// 海外
export const reqoverSeas = ()=>axios.get(`/home/overseas`)

// 二手房
export const reqsecondHand = ()=>axios.get(`/home/secondHand`)

// 小区
export const reqxiaoQu = ()=>axios.get(`/home/vallige`)

// 发送用户名登录请求
export const reqUsernameLogin = (username,pwd) => axios.post('/loginText',{username,pwd})

// 发送短信验证码请求
export const reqCodeLogin = (phone) => axios.get('/reqCode',{params:{phone}})

// 发送短信登录请求
export const reqPhoneLogin = ({phone,code}) => axios.post('/loginSms',{phone,code})

// 自动登录
export const reqAutoLogin = (username) => axios.post('/auto_login',{username})

// 注册
export const reqUsernameRegister = (username, password) => axios.post('/register',{username, password})

// 二手房数据
export const reqResold = () => axios.get('/resold')

//发送房源信息的请求
export const reqNewHouse = () => axios.get('/newHouse/newHouseRec')
