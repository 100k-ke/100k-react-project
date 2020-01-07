import {SAVEUSER,DELETEUSER} from '../action_types'

export const saveUserInfoAction = value => {
  localStorage.setItem('user',JSON.stringify(value.username || value.phone))
  localStorage.setItem('token',value.token)
  return {type:SAVEUSER,data:value}
}

export const deleteUserInfoAction = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  return {type:DELETEUSER}
}