import {SAVEUSER,DELETEUSER} from '../action_types'

export const saveUserInfoAction = value => {
  console.log(value)
  if (value.check) {
    localStorage.setItem('user',JSON.stringify(value.data.username || value.data.phone))
    localStorage.setItem('token',value.data.token)
  }else{
    sessionStorage.setItem('user',JSON.stringify(value.data.username || value.data.phone))
    sessionStorage.setItem('token',value.data.token)
  }
  return {type:SAVEUSER,data:value.data}
}

export const deleteUserInfoAction = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  sessionStorage.removeItem('user')
  sessionStorage.removeItem('token')
  return {type:DELETEUSER}
}