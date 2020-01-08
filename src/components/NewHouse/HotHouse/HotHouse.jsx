import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Checkbox } from 'antd';
import './css/hothouse.css'
@withRouter
class Hothouse extends Component{

  render(){
    const filters = ['在售','住宅','VR看房','优惠楼盘','近期开盘']
    const {houseList} = this.props
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
              为您找到{houseList.length}个北京楼盘
            </span>
            <span className="clear"><i>c </i> 清空条件</span>
          </div>
          {/* 左侧各个楼盘详情 */}
          <div className="houseContainer">
            <ul>
              {
                houseList.map((house,index)=>
                  <li key={index} onClick={()=>{this.props.history.push(`/detail/${house.id}`)}}>
                    <div className="houseImg" style={{backgroundImage:`url(${house.cover_size_pic})`}}>
                    </div>
                    <div className="houseDetail">
                      <div className="houseName">
                        <span className="name">{house.build_name}</span>
                        <span className="sale">{house.sale_status}</span>
                        <span className="size">{house.house_type}</span>
                      </div>
                      <div className="position">
                        <i>p </i>
                        <span>{house.store_addr}</span>
                      </div>
                      <div className="houseType">
                        <i>h </i>
                        <span className="type">户型:{house.frame_rooms_desc}</span>
                        <span className="buildArea">{house.resblock_frame_area}</span>
                      </div>
                      <div className="advantage">
                        {house.project_tags.map((project,index)=>
                          <span key={index}>{project.desc}</span>
                        )}
                      </div>
                      <div className="totalPrice">
                        <div>
                          <span>{house.lowest_total_price}</span>
                          <span>万/套(总价)</span>
                        </div>
                        <span>总价{house.lowest_total_price}万/套</span>
                      </div>
                      <div className="attention">关注</div>
                    </div>
                  </li>
                )
              }
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
              {
                houseList.map((house,index)=>
                  <li key={index} onClick={()=>{this.props.history.push(`/detail/${house.id}`)}}>
                    <div className="hotImg" style={{backgroundImage:`url(${house.cover_size_pic})`}}></div>
                    <div className="hotHouseDetail">
                      <span>{house.build_name}</span>
                      <div className="hotHouseCate">
                        <span className="sale">{house.sale_status}</span>
                        <span className="size">{house.house_type}</span>
                      </div>
                    </div>
                    <div className="priceWrapper">
                      <span>{house.lowest_total_price}</span>
                      <span>万/套</span>
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Hothouse