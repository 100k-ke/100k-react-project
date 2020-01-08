import React,{Component} from 'react'
import { Menu ,Dropdown,message} from 'antd';
import {reqnewHouse,reqoverSeas,reqsecondHand,reqxiaoQu,reqrentHouse} from '../../api/index'
import {createSaveNewHouse} from '../../redux/actions/home_newHouse_action'
import {connect} from 'react-redux'
import './css/home.less'
import Login from '../Login/Login'


const menuYeZhu = (
  <Menu  style={{
    width:120+'px',position:'absolute',top:'10px',textAlign:'center',marginLeft:'-30px',color:'red'}}>
    <Menu.Item key="1" ><a href="https://bj.ke.com/yezhu/maifang/" style={{fontSize:'16px',fontWeight:700,color:'#101d37'}}>发布房源</a></Menu.Item>
    <Menu.Item key="2"><a href="https://bj.ke.com/yezhu/gujia/" style={{fontSize:'16px',fontWeight:700,color:'#101d37'}}>房屋估价</a></Menu.Item>
  </Menu>
);
const menuAPP = (
  <Menu  style={{backgroundColor:'#fff',borderRadius:'4px',padding:'8px 0px',marginLeft:'-34px',
  width:200+'px',height:375+'px',position:'absolute',textAlign:'center',top:'10px'}}
  >
    <Menu.Item key="1" ><img className='_img' style={{width:'200px',height:'375px',position:'absolute',left:'0'}} src="http://image1.ljcdn.com/materials/navigation/b04ea2dd5c688d7b212df6c23933a08c.png" alt=""/> </Menu.Item>

  </Menu>
);

 class Home extends Component{

  state = {
    isShow:true, //广告的显示与隐藏
    isCurrent:false,//底部版权信息的显示与隐藏
    currentIndex:0, 
    searchIndex:0,

    isInputShow:false,
    isClear:true,
    // input搜索框
    inputLists:['新龙城','天通苑'],
    leftLists:[],//小三角位置
    nameLists:'',//localStorage中的对象

// 发请求
    newHouses:[],
    overSeas:[],
    secHouses:[],
    xiaoQus:[] ,
    rentHouses:[], 


    // 动态显示登录、注册
    isClose:true,
    isReg:false    
  }
  // 动态显示登录、注册的方法
  showLogin = (event)=>{
    console.log('aaa');
    if (event === true) {
      console.log('111');
      this.setState({isClose: event})
    }else{
      event.preventDefault()
      console.log('222');
      this.setState({isClose: false})
    }
  }
  showReg = (event)=>{
    if (event === false) {
      this.setState({isReg:false})
    }else{
      event.preventDefault()
      this.setState({isReg:true})
    }
  }
  // 发请求
  getrentHouse = async()=>{
    let result = await reqrentHouse()
    const {status,datas,msg} = result   
    if(status === 1) {
      this.setState({rentHouses:datas.rent_house_list.list})

    }  
    else message.error(msg)
  }
  // 新房
  getnewHouse = async()=>{
    let result = await reqnewHouse()
    const {status,datas,msg} = result  
    if(status === 1) {
      this.setState({newHouses:datas.data})
      // redux
      this.props.saveNewHouse(this.state.newHouses)
    }  
    else message.error(msg)
  }
  getoverSeas = async()=>{
    let result = await reqoverSeas()
    const {status,datas,msg} = result
    if(status === 1) this.setState({overSeas:datas.data.list})
    else message.error(msg)
  }
  getsecondHand = async()=>{
    let result = await  reqsecondHand()
    const {status,datas,msg} = result
    if(status === 1) this.setState({secHouses:datas.data})
    else message.error(msg)
  }
  getxiaoQu = async()=>{
    let result = await  reqxiaoQu()
    const {status,datas,msg} = result
    if(status === 1) this.setState({xiaoQus:datas})
    else message.error(msg)
  }

  componentDidMount(){
    this.getnewHouse()
    this.getrentHouse()
    this.getoverSeas()
    this.getsecondHand()
    this.getxiaoQu()
    this.getLefts()
    // 取
    var res = JSON.parse(localStorage.getItem('name_id') || '[]');
    // 存入到搜索列表
    // console.log(res)
    let {inputLists} = this.state
    this.setState({
      inputLists:res.concat(inputLists)
    })
    console.log(this)
  }

  // 广告的关闭按钮
  close=()=>{
    // console.log('aaaa')
    this.setState({
      isShow:false
    })
  } 
  // 底部版权信息==》鼠标移入 
  listEnter = (index) => {
    console.log('111',index,this.state.currentIndex) 
    this.setState({
      currentIndex:index
    })  
  }

  // 搜索导航
  searchTab =(index)=>{
    console.log('111',index,this.state.left) 
    this.setState({
      searchIndex:index,
    })
  }
  // 获取input的输入的事件
  change = () => {
    // 获取用户输入
    let val = this.refs.name.value
    console.log(val)
    this.setState({
      nameLists:val//对象
    })
  }
  // input的获取焦点事件
  focus = ()=>{
    this.setState({
      isInputShow:true,
      // name:name
    })
  }
  // 点击搜索按钮==>将搜索内容保存到localStorage
  search = ()=>{
    if(this.state.searchIndex === 0){
      this.props.history.push('/header')
    }else if(this.state.searchIndex === 1){
      this.props.history.push('https://bj.fang.ke.com/loupan')
    }
  
    // 存 ['']
    let nameLists =this.state.nameLists
    // 先取
    var res = JSON.parse(localStorage.getItem('name_id') || '[]');
    res.unshift(nameLists)
    localStorage.setItem('name_id',JSON.stringify(res))

  }
  // 点击清空==》清空消失，搜索历史变为热门搜索
  clearToRemen=()=>{
    this.setState({
      isClear:false,
      inputLists:['新龙城','天通苑']
    })
  }
  // 获取lefts
  getLefts=()=>{
    let nodeList = [...this.refs.leftList.children]
    console.log(nodeList)
    let leftWidth = []
    nodeList.reduce((pre,item)=>{
      leftWidth.push(pre + item.clientWidth)
      return pre + item.clientWidth
    },0)
    console.log(leftWidth)

    let leftLists = leftWidth.map((item)=>{
        return this.state.left = parseInt((item-56))
    })
    console.log(leftLists)
    // 存入state中
    this.setState({
      leftLists:leftLists
    })   
  }

  render(){
    // let {isShow,currentIndex,searchIndex,newHouses,rentHouses,overSeas,secHouses,xiaoQus,inputLists,leftLists} = this.state
    let {isShow,currentIndex,searchIndex,newHouses,overSeas,secHouses,xiaoQus,inputLists,leftLists,isClose,isReg} = this.state
    console.log(inputLists)
    // let {leftLists} = this
    // header的搜索与切换
    let searchTabs = ['找二手房','找新房','找租房','找小区']
    let placeholders = ['试试输入地铁线、站在地铁附近找房，如13号线','请输入楼盘名称开始找房','请输入区域、商圈或小区名开始找房','请输入小区名开始查找小区']
    // 底部版权的切换
    let listTabs = ['二手房','热门小区','热门房产','热门新房','合作与友情链接','贝壳规划中心']
    let fangChans = [
        [
        '北京二手房','长春二手房','重庆二手房','长沙二手房','东莞二手房','大连二手房','佛山二手房','合肥二手房','海口二手房',
        '杭州二手房','济南二手房','廊坊二手房','南京二手房','苏州二手房','沈阳二手房','深圳二手房','武汉二手房','厦门二手房',
        '中山二手房','珠海二手房','东莞二手房','大连二手房','佛山二手房','合肥二手房','海口二手房',
        ],
        [
          '南郎家园','青年公寓','上东8号','悦廷','华瀚国际','远大园五区','新金山酒店式公寓','葛布店北里','华美橡树岭','南郎家园',
          '培新街乙5号院','宇丰苑','魏公村8号院','上东8号','悦廷','华瀚国际','远大园五区','新金山酒店式公寓','葛布店北里','华美橡树岭','南郎家园',
          '培新街乙5号院','宇丰苑','魏公村8号院','青年公寓','上东8号','悦廷','华瀚国际','远大园五区','新金山酒店式公寓','葛布店北里','华美橡树岭','南郎家园',
          '培新街乙5号院','宇丰苑','魏公村8号院'
        ],
        ['北京房产','长春房产','重庆房产','长沙房产','东莞房产','大连房产','佛山房产','合肥房产','海口房产',
        '杭州房产','济南房产','廊坊房产','南京房产','苏州房产','沈阳房产','深圳房产','武汉房产','厦门房产',
        '中山房产','珠海房产'
        ],
        ['北京新房','长春新房','重庆新房','长沙新房','东莞新房','大连新房','佛山新房','合肥新房','海口新房',
        '杭州新房','济南新房','廊坊新房','南京新房','苏州新房','沈阳新房','深圳新房','武汉新房','厦门新房',
        '中山新房','珠海新房'
        ],
        [
          '连锁加盟','加盟网','北京律师','北京律师咨询','91加盟网','北京黄页88网','个人房源网','北京租房网','淮安房产网','青岛二手房',
          '呼和浩特房产','贝壳研究院','北京房产','北京房产网','北京新房','北京分类信息'
        ],
        ['贝壳隐私政策','贝壳用户服务协议']
    ]

    // 重新取下标
    const index = this.state.currentIndex
    const indexSearch = this.state.searchIndex
    // console.log(indexSearch)

    return (
      <div className='beike'>
        {/* header */}
        {
          isClose ? '' : <Login isShow={this.showLogin}/>
        }
        {
          isReg ? <Login isShowReg={this.showReg}/> : ''
        }
        <div className='header'>
          <div className="wrapper ">
               {/* 头部导航 */}
            <div className='fl '>
              <a href="//www.ke.com" title='贝壳找房' className='logo'></a>
              <a href="//www.ke.com/city/" className='exchange'>
                <i></i>
                北京
              </a>
            </div>
            <div className='fr '>
              <div className='nav'>
                <ul>
                  <li className='clickData'>
                    <div className='top'>二手房</div>
                  </li>
                  <li className='clickData'>
                    <div className='top'>新房</div>
                  </li>
                  <li className='clickData'>
                    <div className='top'>租房</div>
                  </li>
                  <li className='clickData'>
                    <div className='top'>海外</div>
                  </li>
                  <li className='clickData'>
                    <div className='top'>装修</div>
                  </li>
                  <li className='clickData'>
                    <div className='top'>商业办公</div>
                  </li>
                  <li className='clickData'>
                    <div className='top'>小区</div>
                  </li>
                  <li className='clickData'>
                    <div className='top'>百科</div>
                  </li>
                  <li className='clickData'>
                    <div className='top'>贝壳指数</div>
                  </li>
                  <li className='hover clickData'>
                  <Dropdown overlay={menuYeZhu} >
                      <a className="ant-dropdown-link" href="#">
                         我是业主
                      </a>
                  </Dropdown>
                  </li>
                  <li className='clickData'>
                    <div className='top'>贝壳研究院</div>
                  </li>
                  <li className='hover clickData'>
                    <Dropdown overlay={menuAPP} >
                      <a className="ant-dropdown-link" href="#">
                         下载APP
                      </a>
                  </Dropdown>
                  </li>
                </ul>
                <div className='ti-hover'>
                  <div className='typeShowUser'>
                    <i></i>
                    <span className='welcome'>
                      <a href=""  className='btn-login' onClick={this.showLogin}>
                        <span className='reg'>登录</span>
                      </a>
                      <span>&nbsp;/&nbsp;</span>
                      <a href="" className='btn-register' onClick={this.showReg}>
                        <span className='log'>注册</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 大标题及搜索框 */}
            <div className='header-wrap'>
              <div className='wrap-ico'>
                <div className='title_small'>
                  <span>海量真房源，省心上贝壳</span>
                </div>
                <div className='title_big'>开始寻找属于你的家</div>
              </div>
              <div className='search-box-wrap'>
                <div className='search-box-con'>
                  <div className='menu'>
                    <ul ref="leftList">
                        {
                          searchTabs.map((searchTab,index)=>{
                            return(
                            // 添加动态类名（1个或多个）
                              <li className={ searchIndex === index?'check':''}
                                  onClick={()=>this.searchTab(index)} 
                                  key={index} 
                              >
                                <span>{searchTab}</span> 
                              </li>                           
                            )
                          })
                        }
                    </ul>
                  {/* 小三角:取到【点击的下标】时对应的【数组】里的【当前值】 */}
                    <i style={{position:'absolute',left:leftLists[indexSearch]}}></i>

                  </div>
                  <div className='search clear'>
                    <div className='box'>
                      <div className='clear searchBox'>
                        {
                 // 取到【点击的下标】时对应的【数组】里的【当前值】
                        <input ref='name' className='text left ' type="text" 
                          placeholder={placeholders[indexSearch] }

                              onChange={()=>this.change()} 
                              onFocus={()=>this.focus()}                          
                        />                               

                        }
                        <input className='btn' type="button" onClick={()=>this.search()}/>
                        
                        <i className='_i' ></i>
                        <div className='saveSearch'></div>
                      </div>
                      <div className='suggest-wrap'></div>
                    </div>
                    <div className='sug-tips' style={{display:this.state.isInputShow ?'block':'none'}}>
                      <ul>
                        <li className='hotName1'>
                          <span className='hot-tips'>{this.state.isClear?'搜索历史':'热门搜索'}</span>
                          <span className='del' onClick={this.clearToRemen}>{this.state.isClear?'清空':''}</span>
                        </li>
                        <div className='list'>
                          {
                            inputLists.map((inputList,index)=>{
                               return(
                                <li key={index} className='hotName2'>{inputList}</li>
                               )
                            })
                          }
                           
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* 轮播展示的信息 */}
              <div className='header-bottom'>
                <div className='house-num'>
                  <i></i>
                  <ul>
                    <li>北京在售二手房88588套</li>
                  </ul>
                </div>
              </div>
            </div>
          

           </div>
        </div>
        {/* 二手房 */}
        <div className='secHouse'>
          <div className='wrapper'>
            <div className='fl'>
              <div className='name'>二手好房</div>
              <p>好房源那么多，我们为你精选
                <a href="/ershoufang/">更多北京二手房</a>
              </p>
            </div>
            <div className='clear'></div>
            <ul>

            {
              secHouses.map((secHouse,index)=>{
                return(
                  <li className='clickHouse' key={index}>
                    <div className='wrap' title={secHouse.title}>
                    <img className='b' src={secHouse.picture}/>
                    <span className='vr_item'></span>
                    <span className='goodhouse'>
                      <img src={secHouse.haofangTagIcon} alt=""/>
                    </span>
                    <div className='bottom'>
                      <div className='name'>
                <p>{secHouse.districtName}·{secHouse.bizcircleName}</p>
                        <p>{secHouse.bizcircleName}</p>
                      </div>
                      <div className='info'>
                        {secHouse.jushi}·{secHouse.buildSize}平米
                <div className='price'>{secHouse.price}万</div>
                      </div>
                    </div>             
                  </div>
               </li>
              
                )
              })
            }
            </ul>
          </div>
          </div>
        {/* 小区 */}
        <div className='xiaoqu'>
          <div className='wrapper'>
            <div className='fl'>
              <div className='name'>小区精选</div>
              <p>纵览小区，恋上这座城
                <a href="/xiaoqu/">更多北京小区</a>
              </p>
            </div>
            <div className='xiaoquList'>
               <ul className='xiaoqu-list'>
                 {
                   xiaoQus.map((xiaoQu,index)=>{
                     return(
                      <li className='clickHouse' key={index}>
                          <div className='wrap' title={xiaoQu.bizcircleName}>
                            <div className='img_wrap'>
                              <img className='b' src={xiaoQu.picture} alt=""/>
                            </div>
                          <div className='title'>
                            <div className='desc'>
                              <span className='name'>{xiaoQu.bizcircleName}</span>
                              <span className='price'><label >{xiaoQu.priceUnitAvg}</label>元/平</span>    
                            </div>
      
                            <div className='year'>
                              <span>{xiaoQu.buildingFinishYear}年建</span>
                            </div>
                          </div>
                    
                      </div>
                    </li>
               
                     )
                   })
                 }
                 
               </ul>
            </div>
           
          </div>
          </div>
        {/* 新房 */}
        <div className='newHouse'>
          <div className='wrapper'>
            <div className='fl'>
              <div className='name'>优选新房</div>
              <p>真实信息准确同步，楼盘动态一手掌握
                <a href="http://bj.fang.ke.comloupan/">更多北京新房</a>
              </p>
            </div>
            <div className='newhouse-list'>
               <ul >
               
                 {
                   newHouses.map((newHouse,index)=>{
                     return(
                      <li className='clickHouse' key={index}>
                        <a className='wrap' title={newHouse.build_name}>
                          <img className='b' src={newHouse.cover_size_pic} alt=""/>
                          <div className='bg'></div>
                          <div className='title'>
                            {newHouse.resblock_name}            
                            <span className='price'><label >{newHouse.show_price}</label>元/平</span>    
                          </div>
                  
                        </a>
                        </li>
                     )
                   })
                   
                 }               
                </ul> 
            </div>
           
          </div>
          </div>
        {/* 租房 */}
        <div className='rentHouse'>
          <div className='wrapper'>
            <div className='fl'>
              <div className='name'>品质租房</div>
              <p>高品质租房体验，从贝壳开始
                <a href="https://bj.ke.com/zufang">更多北京租房</a>
              </p>
            </div>
            {/* <div className='clear'></div> */}
            <ul>

              {
                 rentHouses.map(( rentHouse,index)=>{
                  return(
                    <li className='clickHouse' key={index}>
                      <div className='wrap' title={rentHouse.house_title}>
                        <img className='b' src={rentHouse.list_picture} alt=""/>
                        <div className='bottom'>
                          <p className='p01'>{rentHouse.house_title}</p>
                          <div className="tips">
                            <div className='info'>
                               {rentHouse.bizcircle_name}/{rentHouse.layout}
                            </div>
                            <div className='price'>{rentHouse.rent_price_listing}元/月</div>
                          </div>
                        </div>              
                      </div>
                  </li>
                    )
                })
              }
            </ul>
          </div>
          </div>
        {/* 海外房产 */}
        <div className='overseaHouse'>
          <div className='wrapper'>
            <div className='fl'>
              <div className='name'>海外房产</div>
              <p>海量全球好房，畅享美好生活
                <a href="https://i.ke.com/us">更多海外房源</a>
              </p>
            </div>
            {/* <div className='clear'></div> */}
            <ul>          
              {
                overSeas.map((overSea,index)=>{
                  return(
                    <li className='clickHouse' key={index}>
                  <div className='wrap' title={overSea.title}>
                    <div className="img">
                      <div className="model"></div>
                      <img className='b' src={overSea.image_url} alt=""/>
                      <p className='dollar'>{overSea.price}</p>
                      <p className='RMB'>{overSea.price_rmb}</p>  
                    </div>
                    
                    <div className='bottom'>
                      <p className='country'>{overSea.area}</p>
                      <p className='p01'>{overSea.title}</p>
                      <div className="tips">
                        <div className='info'>
                          {overSea.frame} {overSea.house_area}
                        </div>
                      </div>
                    </div>              
                  </div>
                </li>
                  )               
                })
              }           
           </ul>
          </div>
        </div>
        {/* 底部版权信息 */}
        <div className="footer">
          <div className="wrapper">
            <div className="f-title">
              <div className="fl">
                <ul>
                  <li>
                    <a href="https://bj.ke.com/sitemap">网站地图</a>
                    <a href="https://about.ke.com/introduce/index.html">了解贝壳</a>
                  </li>
                </ul>
              </div>
              <a href="" className='fr'>官方客服咨询</a>
              <a href="http://chelper.ke.com/#/feedbackForC?channel=bk-pc&city=110000" className='fr'>意见反馈</a>
            </div>
            <div className="lianjia-link-box">
            {/* 列表 */}
              <div className="fl">
                <div className="tab" >
                     {
                        listTabs.map((listTab,index)=>{
                          return(
                            <span key={index} 
                                  className={ currentIndex === index ? 'hover' :''} 
                                  onMouseEnter={()=>this.listEnter(index)}>
                            {listTab}</span>
                          )
                          
                        })
                     }
                </div>
               
                <div className="link-list" >
                  <div>
                    <dd>
                      {/* 用二维数组 */}
                        {
                          fangChans[index].map((fangChan,index)=>{
                            return(
                              <a key={index} target="_blank" href="">{fangChan}</a>
                            )
                          })
                        } 
                    </dd>
                  </div> 
                </div> 

               </div>
            </div>
            <ul className="partner-logo">
              <li>
                <img title='合作与友情链接' src="https://s1.ljcdn.com/pegasus/redskull/images/common/partner/zsyh.png?_v=2020010319222122" alt=""/>
              </li>
              <li>
                <img title='合作与友情链接' src="https://s1.ljcdn.com/pegasus/redskull/images/common/partner/zxyh.png?_v=2020010319222122" alt=""/>
                
              </li>
              <li>
                <img title='合作与友情链接' src="https://s1.ljcdn.com/pegasus/redskull/images/common/partner/shyh.jpg?_v=2020010319222122" alt=""/>
          
              </li>
              <li>
                <img title='合作与友情链接' src="https://s1.ljcdn.com/pegasus/redskull/images/common/partner/gdyh.png?_v=2020010319222122" alt=""/>
        
              </li>
            </ul>
            <div className="bottom">
              <div className='fl copyright'>
              天津小屋信息科技有限公司 | 地址：天津经济技术开发区南港工业区综合服务区办公楼C座一层112室09单元 | 电话：10106188 | 津ICP备18000836号-1 | © Copyright 2020 ke.com版权所有
                    | 
             <a target="_blank" href="http://image.ljcdn.com/lianjia-app-image/1544512218phpe2Aqdb.jpeg.750x.jpg!m_fill,l_bk,f_jpg,ls_30?from=ke.com">营业执照</a>
                    |
              <a target="_blank" href="http://image1.ljcdn.com/materials/appindexconf/69ed6c9ad7ac78f069a98e1bd0cd1c8d.png">ICP证</a>      
              <br/>
              违法和不良信息举报电话：010-86440676
                    | 违法和不良信息举报邮箱：jubaoyouxiang@ke.com      
              <br/>
              <img src="https://s1.ljcdn.com/pegasus/redskull/images/common/beian.png?_v=2020010319222122" alt=""/>
              <a href="">津公网安备12019002000223</a>
              </div>
            </div>
            </div>
          <div className="main_bg">
            <div className="customer">
              <div className="close-btn"></div>
              <h1>官方客服</h1>
              <p>您可以与在线顾问进行实时沟通或者拨打客服热线获得帮助</p>
              <div className="title_main clear">
                <div className='fl'>
                  <div className="title_top">
                    <span className='title'>在线咨询</span>
                    <span className='req_btn_span'>立即咨询</span>
                  </div>
                  <p>09:00-20:00</p>
                </div>
                <div className="fl1 right_top">
                  <div className="title_top">
                    <span className='title'>客服热线</span>
                    <span className='tel_num'>10106188</span>
                  </div> 
                  <p>09:00-20:00</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* 广告 */}
                                            {/* 问题二：点击按钮，display控制div的显示与隐藏 */}
        <div className="app_daoliu_layer" style={{display:isShow ? 'block' : 'none'}}>
          <div className="app_content">
            <div className="app_img">
              <img src="//s1.ljcdn.com/pegasus//redskull/images/home/iphone.png" alt=""/>
            </div>
            <div className="app_desc_c">
              <div className="app_title">下载贝壳找房APP</div>
              <div className="app_desc">随时随地查看新上房源</div>
            </div>
            <div className="app_qr">
              <img src="//ajax.api.ke.com/qr/getDownloadQr?location=site_app_daoliu&ljweb_channel_key=site_index" alt=""/>
            </div>
            <div className="app_close" onClick={this.close} >
              <img src="//s1.ljcdn.com/pegasus//redskull/images/home/icon-close.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {
    saveNewHouse:createSaveNewHouse,
  }
)(Home)