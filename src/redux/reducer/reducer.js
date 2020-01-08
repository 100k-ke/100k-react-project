import {SAVEHOUSE,SAVENEWHOUSE} from '../reducer-type'

let initState = { // 初始化状态
  attensionList:{},
  newHouses:[]
}
export default function reducer(preState=initState,action) {
  let {type,data} = action
  console.log(type,data)
  let newState
  switch (type) {
    case SAVEHOUSE:
      newState = {data:data}
      return newState
    case SAVENEWHOUSE:
      newState = {data:data}
      return newState
    default:
      return preState
  }
}
