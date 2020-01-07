import React,{ Component } from 'react';
import './css/houseItem.css'
export default class HouseItem extends Component{
  render(){
    return(
      <div className="houseItem">
        <div className="houseImg"></div>
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
      </div>
    )
  }
}