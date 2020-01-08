import axios from './axios'

export const reqDetailRecommend = () => axios.get('/detail/nhRecommend')


//新房+租房
export const reqnewHouse = ()=>axios.get(`/home/newHouse`)

// 海外
export const reqoverSeas = ()=>axios.get(`/home/overseas`)

// 二手房
export const reqsecondHand = ()=>axios.get(`/home/secondHand`)

// 小区
export const reqxiaoQu = ()=>axios.get(`/home/vallige`)