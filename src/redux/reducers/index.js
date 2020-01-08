import { combineReducers } from 'redux'
import loginReducer from './login_reducer'
import AttensionReducer from './detail_reducer'

export default combineReducers({
  userInfo:loginReducer,
  AttensionReducer
})