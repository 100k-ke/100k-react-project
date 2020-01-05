import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'

export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Redirect to="/login"/>
        </Switch>
      </div>
    )
  }
}
