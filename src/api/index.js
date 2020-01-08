import ajax from './ajax'

export const reqDetailRecommend = () => ajax.get('/detail/nhRecommend')

//新房
export const reqnewHouse = ()=>ajax.get(`/home/newHouse`)

// 租房
export const reqrentHouse = ()=>ajax.get(`/home/rentHouse`)

// 海外
export const reqoverSeas = ()=>ajax.get(`/home/overseas`)

// 二手房
export const reqsecondHand = ()=>ajax.get(`/home/secondHand`)

// 小区
export const reqxiaoQu = ()=>ajax.get(`/home/vallige`)

// 发送用户名登录请求
export const reqUsernameLogin = (username,pwd) => ajax.post('/loginText',{username,pwd})

// 发送短信验证码请求
export const reqCodeLogin = (phone) => ajax.get('/reqCode',{params:{phone}})

// 发送短信登录请求
export const reqPhoneLogin = ({phone,code}) => ajax.post('/loginSms',{phone,code})

// 自动登录
export const reqAutoLogin = (username) => ajax.post('/auto_login',{username})

// 注册
export const reqUsernameRegister = (username, password) => ajax.post('/register',{username, password})

// 二手房数据
export const reqResold = () => ajax.get('/resold')

//发送房源信息的请求
export const reqNewHouse = () => ajax.get('/newHouse/newHouseRec')
