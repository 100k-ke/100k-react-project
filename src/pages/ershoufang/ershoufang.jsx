import React,{Component} from 'react'
import Nav from '../../components/C-ershoufang/nav/nav'
import HotHouse from '../../components/C-ershoufang/HotHouse/HotHouse'
import Header from "../../components/header/header";
import './css/ershoufang.css'



export default class ershoufang extends Component{
  render(){
    return(
      <div className="ershoufangComponent">
        <Header/>
        <Nav/>
        <HotHouse/>
      </div>
    )
  }
}