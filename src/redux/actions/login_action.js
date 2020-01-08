import {SAVEUSER,DELETEUSER} from '../action_types'

export const saveUserInfoAction = value => {
  if (value.check) {
    localStorage.setItem('user',JSON.stringify(value.username || value.data.phone))
    localStorage.setItem('token',value.data.token)
  }else{
    sessionStorage.setItem('user',JSON.stringify(value.username || value.data.phone))
    sessionStorage.setItem('token',value.data.token)
  }
  return {type:SAVEUSER,data:value.data}
}

export const deleteUserInfoAction = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  return {type:DELETEUSER}
}