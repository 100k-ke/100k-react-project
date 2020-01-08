import React,{Component} from 'react'
// import { Checkbox } from 'antd';
import HouseItem from './houseItem/houseItem'
import {reqResold} from '../../../api'
import './css/hothouse.css'

export default class MyComponent extends Component{
  state={
      list:[],
      titleArr:['默认排序','最新发布','总价','房屋单价','面积'],
      isShow:0
    }
  
  async componentDidMount(){
    let list = await reqResold()
    console.log(list);
    if (list.status===1) {
      this.setState({list:list.datas.data}) 
    }
    console.log(this.state.list);
    
  }

  // 点击切换
  show(index){
    this.setState({
      isShow:index
    })
  }
  render(){
    let {list,titleArr,isShow} = this.state
    console.log(isShow)
    return (
      <div className="houseList">
        {/* 左侧楼盘列表 */}
        <div className="recommendHouse">
          <ul className="sort">
            {
              titleArr.map((title,index)=>
               <li className={isShow===index?'sortSelect':null} key={index} onClick={()=>{this.show(index)}}>{title}</li>
              )
            }
            
          </ul>
          <div className="houseResult">
            <span className="found">
              共找到 <span>7080</span> 套 北京二手房
            </span>
            <span className="clear"><i> </i> 清空条件</span>
          </div>
          {/* 左侧各个楼盘详情 */}
          <div className="houseContainer">
            {
              list.map((item,index)=> <HouseItem key={index} item={item}/>)
            }
              

            
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