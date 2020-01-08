import React,{Component} from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Ershoufang from './pages/ershoufang/ershoufang'
import Login from './pages/Login/Login'
import NewHouse from './pages/Newhouse/Newhouse'


export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/ershoufang" component={Ershoufang}/>
          <Route path="/profile/:index" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/newhouse" component={NewHouse}/>
        </Switch>
      </div>
    )
  }
}
