import {SAVEHOUSE,SAVENEWHOUSE} from '../reducer-type'

//创建保存用户信息的action
export const createSaveAttensionHouse = (value)=> {
  console.log(value)
  return {type:SAVEHOUSE,data:value}
}

// 保存新房
export const createSaveNewHouse = (value)=> {
  console.log(value)
  return {type:SAVENEWHOUSE,data:value}
}
