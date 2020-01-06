import {SAVEUSER} from '../action_types'
let initState = {
  user:'',
  token:'',
  isLogin:user && token ? true : false
}

export default function operaState(preState = initState,action) {
  const {type,data} = action
  let newState
  switch (type) {
    case SAVEUSER:
      newState = {user:data.user,token:data.token,isLogin:true}
      return newState
    default:
      return preState
  }
}