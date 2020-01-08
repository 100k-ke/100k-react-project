import React,{Component} from 'react'
import Nav from '../../components/C-ershoufang/nav/nav'
import HotHouse from '../../components/C-ershoufang/HotHouse/HotHouse'
import Header from "../../components/header/header";
import {connect} from 'react-redux'
// import Header from '../../components/C-ershoufang/header/header'
import Nav from '../../components/C-ershoufang/nav/nav'
import HotHouse from '../../components/C-ershoufang/HotHouse/HotHouse'
import {reqResold} from '../../api'
import {saveConditionAction} from '../../redux/actions/esf_action'
import {createSaveNewHouse} from '../../redux/actions/home_newHouse_action'
import Footer from '../../components/footer/footer'
import './css/ershoufang.css'

@connect(
  state => ({}),
  {
    saveCondition:saveConditionAction,
    saveNewHouse:createSaveNewHouse
  }
)

class ershoufang extends Component{
  async componentDidMount(){
    let list = await reqResold()
    console.log(list);
    if (list.status===1) {
      this.props.saveCondition(list.datas.data)
      this.props.saveNewHouse(list.datas.data)
    }
  }
  render(){
    return(
      <div className="ershoufangComponent">
        <Header/>
        <Nav/>
        <HotHouse/>
        <div style={{width:'1150px',margin: '0 auto'}}>
          <Footer/>
        </div>
      </div>
    )
  }
}
export default ershoufang