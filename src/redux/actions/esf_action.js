import {SAVECONDITION} from '../action_types'


export const saveConditionAction = (value) => {
  console.log("action",11111);
  
  // sessionStorage.setItem('condition',JSON.stringify(value))
  return {type:SAVECONDITION,data:value}
}
