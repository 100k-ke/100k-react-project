import { SAVEHOUSELIST } from '../action_types'
let initState = {
 houseList:[]
}
export default function operaState(preState = initState,action) {
  const {type,data} = action
  let newState
  switch (type) {
    case SAVEHOUSELIST:
      newState = {houseList:data}
      return newState
    default:
      return preState
  }
}