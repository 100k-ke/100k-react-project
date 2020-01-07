import React,{Component} from 'react'
// import { Checkbox } from 'antd';
import HouseItem from './houseItem/houseItem'
import './css/hothouse.css'

export default class MyComponent extends Component{
  render(){
    const filters = ['在售','住宅','VR看房','优惠楼盘','近期开盘']
    return (
      <div className="houseList">
        {/* 左侧楼盘列表 */}
        <div className="recommendHouse">
          <ul className="sort">
            <li className="sortSelect">默认排序</li>
            <li>最新发布</li>
            <li>总价</li>
            <li>房屋单价</li>
            <li>面积</li>
          </ul>
          <div className="houseResult">
            <span className="found">
              共找到 <span>7080</span> 套 北京二手房
            </span>
            <span className="clear"><i> </i> 清空条件</span>
          </div>
          {/* 左侧各个楼盘详情 */}
          <div className="houseContainer">
            <ul>
              <HouseItem/>
            </ul>
          </div>
        </div>
        {/* 右侧热门楼盘列表 */}
        <div className="hotHouseContainer">
          <div>
            <div className="helpFind"></div>
            <span>试试地图找房</span>
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