import React,{Component} from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Ershoufang from './pages/ershoufang/ershoufang'
import Login from './pages/Login/Login'


export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/ershoufang" component={Ershoufang}/>
          <Redirect to="/ershoufang"/>
          <Route path="/profile/:index" component={Profile}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    )
  }
}
