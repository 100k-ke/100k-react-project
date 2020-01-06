import {SAVEUSER} from '../action_types'

export const createSaveUserAction = value => {
  localStorage.setItem('user',JSON.stringify(value.user))
  localStorage.setItem('token',value.token)
  return {type:SAVEUSER,data:value}
}