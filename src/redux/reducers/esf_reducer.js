import {SAVECONDITION} from '../action_types'
let user = localStorage.getItem('username')
let initState = []

export default function operaState(preState = initState,action) {
  const {type,data} = action
  console.log(data);
  let newState
  switch (type) {
    case SAVECONDITION:
      newState = data
      return newState
    default:
      return preState
  }
}