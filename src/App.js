import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
import Header from './components/header/header'

export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/detail" component={Detail}/>
        </Switch>
      </div>
    )
  }
}
