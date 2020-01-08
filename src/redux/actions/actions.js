import {SAVEHOUSE} from '../reducer-type'

//创建保存用户信息的action
export const createSaveAttensionHouse = (value)=> {
  console.log(value)
  return {type:SAVEHOUSE,data:value}
}
