import {SAVEUSER,DELETEUSER} from '../action_types'
let user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'))
let token = localStorage.getItem('token') || sessionStorage.getItem('token')
let initState = {
  username: user || '',
  token: token || '',
  isLogin:user && token ? true:false
}

export default function operaState(preState = initState,action) {
  const {type,data} = action
  console.log(type,data)
  let newState
  switch (type) {
    case SAVEUSER:
      newState = {username:data.username || data.phone,token:data.token,isLogin:true}
      return newState
    case DELETEUSER:
      newState = {username:'',token:'',isLogin:false}
      return newState
    default:
      return preState
  }
}