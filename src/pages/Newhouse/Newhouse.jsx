import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Input } from 'antd';
import {reqNewHouse} from '../../api/index'
import {createSaveNewHouse} from '../../redux/actions/home_newHouse_action'
import HotHouse from '../../components/NewHouse/HotHouse/HotHouse'
import MainNav from '../../components/NewHouse/MainNav/MainNav'
import './css/newhouse.css'

@connect(
  state => ({houseList:state.HomeNewHouse.newHouses}),
  {
    saveNewHouse:createSaveNewHouse
  }
)
class NewHouse extends Component{
  state={
    houseList:[]
  }
  componentDidMount(){
    this.getHouseList()
  }
  async getHouseList(){
    let result = await reqNewHouse()
    let houseList = result.datas.data
    this.props.saveNewHouse(houseList)
    this.setState({houseList})
  }

  render(){
    const {houseList} = this.state
    return (
      <div className="newhouseContainer">
        <div className="mainnavContainer">
          <div className="mainnav">
            <div className="navTop">
              <div className="left">
                <img src="//s1.ljcdn.com/kepler/static/dist/common/img/logo@2x.png?_v=20200103150159" alt=""/>
                <span></span>
                <div>北京 i</div>
              </div>
              <div className="search">
                <Input type="text" placeholder="请试试输入楼盘名、区域或地铁线"/>
                <div className="searchIconContainer">
                  <i>icon</i>
                </div>
              </div>
              <ul className="place">
                <li>中海首钢长安云锦</li>
                <li>中海寰宇时代</li>
                <li>葛洲坝北京紫郡兰园</li>
              </ul>
            </div>
            <div className="navBottom">
              <ul className="bottomLeft">
                <li className="active">全部楼盘</li>
                <li>近期开盘</li>
                <li>优惠楼盘</li>
                <li>地图找房</li>
                <li>帮我找房</li>
              </ul>
              <div className="bottomRight">咨询热线：4000608902转8630
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 筛选过滤 --> */}
        <MainNav/>
        {/* 楼盘列表 */}
        <HotHouse houseList={houseList}/>
      </div>
    )
  }
}
export default NewHouse