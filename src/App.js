import React,{Component} from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Ershoufang from './pages/ershoufang/ershoufang'

export default class App extends Component{
  render(){
    return (
      <div>
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/ershoufang" component={Ershoufang}/>
          <Redirect to="/ershoufang"/>
        </Switch>
      </div>
    )
  }
}
