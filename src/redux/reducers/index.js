import { combineReducers } from 'redux'
import loginReducer from './login_reducer'
import AttensionReducer from './detail_reducer'
import HomeNewHouse from './home_newHouse_reducer'

export default combineReducers({
  userInfo:loginReducer,
  AttensionReducer,
  HomeNewHouse

})