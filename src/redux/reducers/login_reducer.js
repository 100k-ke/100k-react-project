import {SAVEUSER} from '../action_types'
let user = localStorage.getItem('username')
let token = localStorage.getItem('token')
let initState = {
  username: user || '',
  token: token || '',
  isLogin:user && token ? true:false
}

export default function operaState(preState = initState,action) {
  const {type,data} = action
  let newState
  switch (type) {
    case SAVEUSER:
      newState = {username:data.username || data.phone,token:data.token,isLogin:true}
      return newState
    default:
      return preState
  }
}