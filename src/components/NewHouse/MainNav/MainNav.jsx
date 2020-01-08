import React,{Component} from 'react'
import './css/mainnav.css'
import { Checkbox } from 'antd'


export default class MyComponent extends Component{
  state={
    isShow:true,
    address:[
      {
        title:'单价',
        listArr:['20000元/m²以下', '20000-30000元/m²', '30000-40000元/m²','40000-50000元/m²','50000-60000元/m²','60000-80000元/m²','80000-100000元/m²','100000以上']
      },
      {
        title:'总价',
        listArr:['100万一下','100-150万','150-200万','200-250万','250-300万','300-500万','500-1000万','1000万以上']
      },
      {
        title:'建筑面积',
        listArr:['50m²','50-70m²','70-90m²','90-110','110-130m²','130-150m²','150-200m²','200m²以上']
      },
      {
        title:'房型',
        listArr:['一室','二室','三室','四室','五室及以上']
      }
    ]
  }
  onChange(index,value) {
    console.log('checked = ', index,value);
    console.log(this.refs)
    if (index===0) {
      // console.log(this.refs['value'+(index+1)])
    }
  }
  heightVariety(index){
    // alert(this)
    console.log(this.refs["list"+index]);
    this.refs["list"+index].className='heights'
    this.refs["more"+index].style="display: none"

  }
  heightShow(){
    let arr=[
      {
        title:'单价',
        listArr:['20000元/m²以下', '20000-30000元/m²', '30000-40000元/m²','40000-50000元/m²','50000-60000元/m²','60000-80000元/m²','80000-100000元/m²','100000以上']
      },
      {
        title:'总价',
        listArr:['100万一下','100-150万','150-200万','200-250万','250-300万','300-500万','500-1000万','1000万以上']
      },
      {
        title:'建筑面积',
        listArr:['50m²','50-70m²','70-90m²','90-110m²','110-130m²','130-150m²','150-200m²','200m²以上']
      },
      {
        title:'房型',
        listArr:['一室','二室','三室','四室','五室及以上']
      },
      {
        title:'开盘',
        listArr:['近期开盘','未来一个月','未来三个月','未来半年','过去一个月','过去三个月']
      },
      {
        title:'物业',
        listArr:['住宅','别墅','商业类','写字楼','底商']
      },
      {
        title:'状态',
        listArr:['在售','未开盘','售罄']
      },
      {
        title:'特色',
        listArr:['特价好房','买贵包赔','免费专车','限竞房','VR看房','优惠楼盘','品牌房企','地铁沿线','小户型','现房','车位充足','视频看房']
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
    return (
      <div className="filter">
        <div className="title">
          <span className="position">位置</span>
          <span className="select">按区域<i>上</i></span>
          <span>按地铁<i>下</i></span>
        </div>
        <div className="areaContainer">
          <ul>
            <li>东城</li>
            <li>西城</li>
            <li>朝阳</li>
            <li>海淀</li>
            <li>丰台</li>
            <li>石景山</li>
            <li>通州</li>
            <li>昌平</li>
            <li>大兴</li>
            <li>亦庄开发区</li>
            <li>顺义</li>
            <li>房山</li>
            <li>门头沟</li>
            <li>平谷</li>
            <li>怀柔</li>
            <li>密云</li>
            <li>延庆</li>
          </ul>
        </div>
          {
          address.map((addressItem,index)=>
            <div className="choose" key={index} >
              <div ref={"list"+index} >
                <span className="title">{addressItem.title}</span>
                <Checkbox.Group ref={'value'+index} className="item" options={addressItem.listArr} defaultValue={['']} onChange={(value)=>{this.onChange(index,value)}}/><br/>
                {addressItem.listArr.length>6?<div className="moreCondition" ref={'more'+index} onClick={()=>{this.heightVariety(index)}}><span>更多选项</span></div>:''}
              </div>
            </div>
          )
          }
          <span className="show"  onClick={()=>{this.heightShow()}}>{this.state.isShow?'更多条件':"收起选项"}</span>
      </div>
    )
  }
}