import {SAVEHOUSE} from '../action_types'

let initState = { // 初始化状态
  attensionList:{}
}
export default function reducer(preState=initState,action) {
  let {type,data} = action
  console.log(type,data)
  let newState
  switch (type) {
    case SAVEHOUSE:
      newState = {data:data}
      return newState
    default:
      return preState
  }
}