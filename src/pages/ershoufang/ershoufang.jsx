import React,{Component} from 'react'
import {connect} from 'react-redux'
import Header from '../../components/C-ershoufang/header/header'
import Nav from '../../components/C-ershoufang/nav/nav'
import HotHouse from '../../components/C-ershoufang/HotHouse/HotHouse'
import {reqResold} from '../../api'
import {saveConditionAction} from '../../redux/actions/esf_action'
import './css/ershoufang.css'

@connect(
  state => ({}),
  {
    saveCondition:saveConditionAction
  }
)

class ershoufang extends Component{
  async componentDidMount(){
    let list = await reqResold()
    console.log(list);
    if (list.status===1) {
      this.props.saveCondition(list.datas.data)
    }
  }
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
export default ershoufang