
import {SAVENEWHOUSE} from '../action_types'

let initState = { // 初始化状态
  newHouses:[]
}
export default function reducer(preState=initState,action) {
  let {type,data} = action
  console.log(type,data)
  let newState
  switch (type) {
    case SAVENEWHOUSE:
      newState = {data:data}
      return newState
    default:
      return preState
  }
}
