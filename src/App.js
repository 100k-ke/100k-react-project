import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Ershoufang from './pages/ershoufang/ershoufang'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
import NewHouse from './pages/Newhouse/Newhouse'

export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/ershoufang" component={Ershoufang}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/profile/:index" component={Profile}/>
          <Route path="/newhouse" component={NewHouse}/>
          <Redirect to="/home"/>
        </Switch>
      </div>
    )
  }
}

