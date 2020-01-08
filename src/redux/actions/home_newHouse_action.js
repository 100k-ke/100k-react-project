import {SAVENEWHOUSE} from '../action_types'

// 保存新房
export const createSaveNewHouse = (value)=> {
  console.log(value)
  return {type:SAVENEWHOUSE,data:value}
}
