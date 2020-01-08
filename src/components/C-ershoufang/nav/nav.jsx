import React,{Component} from 'react'
import { Checkbox } from 'antd'
import {connect} from 'react-redux'
import { saveConditionAction } from "../../../redux/actions/esf_action";
import {reqResold} from '../../../api'
import './css/nav.css'

@connect(
  state => ({}),
  {
    saveCondition:saveConditionAction
  }
)

class Nav extends Component{
  state={
    isShow:true,
    address:[
      {
        title:'价格',
        listArr:['200万以下', '200-250万', '250-300万','300-400万','400-500万','500-800万','800-1000万','1000万以上']
      },
      {
        title:'房型',
        listArr:['一室','二室','三室','四室','五室及以上']
      },
      {
        title:'建筑面积',
        listArr:['50m²','50-70m²','70-90m²','90-110','110-130m²','130-150m²','150-200m²','200m²以上']
      },
      {
        title:'房源特色',
        listArr:['必看好房','满五年','近地铁','VR房源','VR看装修','7日新上','随时看房']
      }
    ],
    condition:{},
    titleList:['jiagekey','fangxingkey','mianjikey','fangyuankey','chaoxiangkey','loucengkey','loulingkey','zhuangxiukey','yongtukey','diantikey','gongnuankey','quanshukey','leixingkey']
  }
  async onChange(checkedValues,index) {
    let {condition} = this.state
    let arr = []
    checkedValues.forEach((item)=> {
      this.state.address[index].listArr.forEach((p,index)=>{
        if(p===item){
          arr.push(index)
        }
      })
    })
    
    condition[this.state.titleList[index]]=arr
    this.setState({
      condition
    })
    let dataobj = await reqResold()
    let data = dataobj.datas.data
    let obj=condition
    // {jiagekey:[6]}↑
    let list = Object.keys(obj)
    // [jiagekey]
    let newData = []
    let num=0
    if (true) {
      for (let key in condition) {
        // if (condition[key]) {
        //   const element = object[key];
          console.log(condition[key].length);
          if (condition[key].length) {
            num++
          }
        // }
      }
    }
    if(num!==0){
      console.log(2);
      
      // 遍历后台数据
      for (let m = 0; m < data.length; m++) {
        if (list.length) {
          // 遍历传进来的已选的key   data[m]
          for (let i = 0; i < list.length; i++) {
            if (obj[list[i]].length) {
              // (因为每一项都有可能多个值,所有是数组)
              for (let k = 0; k < obj[list[i]].length; k++) {
                if (obj[list[i]][k]==data[m][list[i]]) {
                  // 防止重复添加
                  let a = newData.findIndex((item)=>data[m].id===item.id)
                  if(a===-1){
                    newData.push(data[m])
                  }
                }
              }
            }
          }
        }
      }
    }else{
      newData=data
    }
    console.log(newData);
    this.props.saveCondition(newData)
  }
  heightVariety(index){
    console.log(this.refs["list"+index]);
    
    this.refs["list"+index].className='heights'
    this.refs["item"+index].style="display: none"

  }
  heightShow(){
    let arr=[
      {
        title:'价格',
        listArr:['200万以下', '200-250万', '250-300万','300-400万','400-500万','500-800万','800-1000万','1000万以上']
      },
      {
        title:'房型',
        listArr:['一室','二室','三室','四室','五室及以上']
      },
      {
        title:'建筑面积',
        listArr:['50m²','50-70m²','70-90m²','90-110','110-130m²','130-150m²','150-200m²','200m²以上']
      },
      {
        title:'房源特色',
        listArr:['必看好房','满五年','近地铁','VR房源','VR看装修','7日新上','随时看房']
      },
      {
        title:'朝向',
        listArr:['南北','朝南','朝东','朝北','朝西']
      },
      {
        title:'楼层',
        listArr:['低楼层','中楼层','高楼层']
      },
      {
        title:'楼龄',
        listArr:['5年以内','10年以内','15年以内','20年以内','20年以上']
      },
      {
        title:'装修',
        listArr:['精装','普通装修','毛坯房']
      },
      {
        title:'用途',
        listArr:['普通住宅','商业类','别墅','四合院','车位','其他']
      },
      {
        title:'电梯',
        listArr:['有电梯','无电梯']
      },
      {
        title:'供暖',
        listArr:['集体供暖','自供暖']
      },
      {
        title:'权属',
        listArr:['商品房','公房','经适房','其他']
      },
      {
        title:'类型',
        listArr:['塔楼','板楼','板塔结合']
      }
    ]
    if (this.state.address.length<arr.length){
      this.setState({address:arr,isShow:false})
    }else{
      let newArr=[...this.state.address].splice(0,4)
      
      this.setState({address:newArr,isShow:true})
    }
  }
  render(){
    const address = [...this.state.address]
    const text = ''
    return(
      <div className="navComponent">
        <div className="headerBar">
          <ul>
            <li>位置</li>
            <li>
              区域
              <span className="arrow"></span>
            </li>
            <li>
              地铁线
              <span className="arrow"></span>
            </li>
          </ul>
        </div>
        <div className="region">
          <span>东城</span>
          <span>东城</span>
          <span>东城</span>
          <span>东城</span>
          <span>东城</span>
          <span>东城</span>
          <span>东城</span>
          <span>东城</span>
          <span>东城</span>
          <span>东城</span>
        </div>
        <div ref='container' className="container">
        {
          
          address.map((add,index) => 
            // text =
            <div className="select" key={index}>
              <div ref={"list"+index}>
                <span className="title">{add.title}</span><Checkbox.Group className="item" options={add.listArr} defaultValue={['Apple']} onChange={(a)=>{this.onChange(a,index)}} /><br/>
                {add.listArr.length>6?<span className="more" ref={"item"+index} onClick={()=>{this.heightVariety(index)}}>点击查看更多</span>:''}
              </div>
            </div>
          )
        }
       <div style={{height:'50px'}}></div>
        <span className="show"  onClick={()=>{this.heightShow()}}>{this.state.isShow?'更多条件':"收起选项"}</span>
        </div>
      </div>
    )
  }
}
export default Nav