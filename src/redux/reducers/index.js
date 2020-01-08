import { combineReducers } from 'redux'
import loginReducer from './login_reducer'
import esfReducer from './esf_reducer'

export default combineReducers({
  userInfo:loginReducer,
  condition:esfReducer
})