import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import {reqAutoLogin} from './api'
import Test from './pages/test'


export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/profile/:index" component={Profile}/>
          <Route path="/test" component={Test}/>
          <Redirect to="/test"/>
        </Switch>
      </div>
    )
  }
}
