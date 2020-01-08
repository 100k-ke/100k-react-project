import { combineReducers } from 'redux'
import loginReducer from './login_reducer'
import esfReducer from './esf_reducer'
import newhouseReducer from './newhouse_reducer'
import AttensionReducer from './detail_reducer'
import HomeNewHouse from './home_newHouse_reducer'

export default combineReducers({
  userInfo:loginReducer,
  condition:esfReducer,
  AttensionReducer,
  houseList:newhouseReducer,
  HomeNewHouse

})