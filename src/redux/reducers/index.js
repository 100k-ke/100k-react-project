import { combineReducers } from 'redux'
import loginReducer from './login_reducer'
import newhouseReducer from './newhouse_reducer'

export default combineReducers({
  userInfo:loginReducer,
  houseList:newhouseReducer
})