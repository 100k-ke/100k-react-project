import React,{ Component } from 'react';
import './css/houseItem.css'
export default class HouseItem extends Component{
  
  render(){
    let item = this.props.item
    return(
      <div className="houseItem" >
        <div className="houseImg" style={{backgroundImage:`url(${item.cover_size_src})`}}></div>
        <div className="houseDetail">
          <div className="houseName">
            <span className="name">{item.build_name}</span>
            <span className="sale">{item.sale_status}</span>
            <span className="size">{item.yongtu}</span>
          </div>
          <div className="position">
            <i>p </i>
            <span>{item.address}</span>
          </div>
          <div className="houseType">
            <i>h </i>
            <span className="type">户型:{item.fangxing}</span>
    <span className="buildArea"> {item.resblock_frame_area}</span>
          </div>
          <div className="advantage">
            {
              item.project.map((i,index)=>
                <span key={index}>{i}</span>
              )
            }
          </div>
          <div className="totalPrice">
            <div>
              <span>{item.jiagewan}</span>
              <span>万/套(总价)</span>
            </div>
            <span>总价{item.jiagewan}万/套</span>
          </div>
          <div className="attention">关注</div>
        </div>
      </div>
    )
  }
}