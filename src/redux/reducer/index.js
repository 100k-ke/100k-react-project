import AttensionReducer from './reducer.js'
import {combineReducers} from 'redux'
//整合所有reducer汇总所有状态
export default combineReducers({
  //该对象里的key和value决定着store里保存该状态的key和value
  AttensionReducer,
})