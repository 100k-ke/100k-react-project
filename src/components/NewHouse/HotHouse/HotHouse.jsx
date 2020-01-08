import React,{Component} from 'react'
import { Checkbox } from 'antd';
import {reqNewHouse} from '../../../api/index'
import './css/hothouse.css'

export default class MyComponent extends Component{
  state={
    houseList:[]
  }
  componentDidMount(){
    this.getHouseList()
  }
  async getHouseList(){
    let result = await reqNewHouse()
    console.log(result)
    // let houseList = result.datas.
    // this.setState({houseList:result})
  }
  render(){
    const filters = ['在售','住宅','VR看房','优惠楼盘','近期开盘']
    return (
      <div className="houseList">
        {/* 左侧楼盘列表 */}
        <div className="recommendHouse">
          <ul className="sort">
            <li className="sortSelect">默认排序</li>
            <li>均价</li>
            <li>开盘时间</li>
          </ul>
          <div className="fastFilter">
            <span>筛选:</span>
            <Checkbox.Group className="item" options={filters} defaultValue={['']} onChange={this.onChange} />
          </div>
          <div className="houseResult">
            <span className="found">
              为您找到439个北京楼盘
            </span>
            <span className="clear"><i>c </i> 清空条件</span>
          </div>
          {/* 左侧各个楼盘详情 */}
          <div className="houseContainer">
            <ul>
              <li>
                <div className="houseImg">
                </div>
                <div className="houseDetail">
                  <div className="houseName">
                    <span className="name">北京岭秀</span>
                    <span className="sale">在售</span>
                    <span className="size">别墅</span>
                  </div>
                  <div className="position">
                    <i>p </i>
                    <span> 平谷/平谷其它/环山路与主环路交叉口东南(南一路)</span>
                  </div>
                  <div className="houseType">
                    <i>h </i>
                    <span className="type">户型:3室</span>
                    <span className="buildArea"> 建面 223-260㎡</span>
                  </div>
                  <div className="advantage">
                    <span>品牌房企</span>
                    <span>环线房</span>
                    <span>现房</span>
                    <span>车位充足</span>
                  </div>
                  <div className="totalPrice">
                    <div>
                      <span>428</span>
                      <span>万/套(总价)</span>
                    </div>
                    <span>总价419万/套</span>
                  </div>
                  <div className="attention">关注</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* 右侧热门楼盘列表 */}
        <div className="hotHouseContainer">
          <div className="helpFind">
            <span>帮我找房</span>
          </div>
          <div className="hotHouse">
            <div className="title">热门楼盘</div>
            <ul>
              <li>
                <div className="hotImg"></div>
                <div className="hotHouseDetail">
                  <span>北京岭秀</span>
                  <div className="hotHouseCate">
                    <span className="sale">在售</span>
                    <span className="size">别墅</span>
                  </div>
                </div>
                <div className="priceWrapper">
                  <span>428</span>
                  <span>万/套</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}