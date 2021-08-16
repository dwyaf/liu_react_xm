import React, { Component } from 'react'
import './middle.css'
import axios from 'axios'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {
    SearchOutlined
} from '@ant-design/icons';
import { Tabs, BackTop } from 'antd';
import Tab from '../lunbo';
import Side from '../side/side';
import { Link, Route } from 'react-router-dom'

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}



// import 'element-theme-default';
// import { Tabs } from 'element-react';

const contentStyle = {
    width: '1226px',
    height: '460px',
    color: '#fff',



};

class Middle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrlist: [],

            ptxt: [],
            side: [],
            ztxt: [],
            zimg: [],
            phone_img: [],
            pub: [],
            video: [],
            fixrig: [],
            // showtop: false,
            // index: null,
            isShow: true,
            // n: 1,
            // avtiveIndex: 1,
            // key: 0,



        }
        this.show = this.show.bind(this)
        this.show1 = this.show1.bind(this)
        this.hide = this.hide.bind(this)
        this.hide1 = this.hide1.bind(this)
        this.toToggle = this.toToggle.bind(this)
        this.playBack = this.playBack.bind(this)
    }
    handleClick(key, event) {
        this.setState({ key: key });



    }
    componentDidMount() {
        // console.log('componentDidMount-----------组件挂在完成的时刻')
        axios.get('http://localhost:3000/aaa')
            .then(
                (res) => {
                    console.log("获取数据成功" + JSON.stringify(res))
                    this.setState({
                        arrlist: res.data.middle.arrList,
                        ptxt: res.data.middle.ptxt,
                        side: res.data.middle.side,
                        ztxt: res.data.middle.ztxt,
                        zimg: res.data.middle.zimg,
                        phone_img: res.data.middle.phone_img,
                        pub: res.data.middle.pub,
                        video: res.data.middle.video,
                        fixrig: res.data.middle.fixrig,




                    })
                })
            .catch((error) => { console.log("获取数据失败" + error) })

    }


    render() {
        let n = this.state.n
        var arrlist = this.state.arrlist;
        var ind = this.state.key


        return (
            <div id="home">
                <div className='all'>
                    <div className='conent'>
                        <div className='srarch'>
                            <div className='logo'>
                                <img src='//s02.mifile.cn/assets/static/image/logo-mi2.png' alt='' />
                            </div>
                            <Tab />
                            {/* <div className="nav">
                                <ul>
                                     {this.state.arrlist.map((item, index) => {
                                        return <li className="btn" key={item+index}>
                                            <a href="#">{item.name}</a>
                                        </li>

                                    })} 
                                    
                                   
                                </ul>
                            </div> */}
                            {/* {
                                this.state.arrlist.map((item, index) => {
                                    return <div className='phone' key={item + index}>
                                        <ul>
                                            {
                                                item?.imgarr.map((phitem, phindex) => {
                                                    return <li key={phitem + phindex}>
                                                        <div className='borig'>
                                                            <img src={phitem.src} alt="" />
                                                        </div>
                                                        <p>{phitem.name}</p>
                                                        <p className="pic">{phitem.money}</p>
                                                    </li>
                                                })
                                            }


                                        </ul>
                                    </div>
                                })
                            } */}

                            <div>
                                <input type="text" placeholder="家电" className={this.state.isShow ? 'search' : 'unsearch'} onClick={this.show} onMouseOut={this.hide} />
                                <span className="search_joint">
                                    <SearchOutlined className='sc' />
                                </span>
                                <div className="search_txt">
                                    {this.state.ptxt.map((item, index) => {
                                        return <p key={item + index}>{item.name}</p>
                                    })}
                                </div>
                            </div>
                            {/* 轮播 */}
                            <div className="sideshow">
                                <Carousel autoplay >
                                    <div>
                                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b59d2e454866906384b427a5ed92082.jpeg?w=2452&h=920" alt='' />
                                    </div>
                                    <div>
                                        <img src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793eebbee1dd569fe56a8aaf58f62452.jpg?thumb=1&w=1226&h=460&f=webp&q=90' alt='' />
                                    </div>
                                    <div>
                                        <img src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/527f28ff20aa102b0463704b244db01f.jpg?thumb=1&w=1226&h=460&f=webp&q=90' alt='' />
                                    </div>
                                    <div>
                                        <img src='https://i8.mifile.cn/v1/a1/c6628d2a-e845-2ab2-5e38-392bf3becabf!1226x460.jpg' alt='' />
                                    </div>
                                </Carousel>,
                            </div>
                            {/* 侧边栏 */}
                            <Side />
                            {/* <div className="sde">
                                <div className="sdebar">
                                    <ul className="barul">

                                        {this.state.side.map((item, index) => {
                                            return <li className="bar" key={item + index} onMouseOver={this.show1} onMouseOut={this.hide1}><p >{item.name}</p><span>&gt;</span></li>

                                        })}


                                    </ul>
                                </div>
                            </div>

                            <div>
                                {this.state.side.map((item, index) => {
                                    return <div className="phoneMode" key={item + index}>
                                        <ul>
                                            {item?.arr.map((arritem, arrindex) => {
                                                return <li key={arritem + arrindex}>

                                                    <img src={arritem.src} alt='' /><span>{arritem.type}</span>
                                                </li>
                                            })}

                                        </ul>
                                    </div>

                                })}

                            </div> */}



                        </div>
                        <div className="zone">
                            <div className="zone_txt">
                                <ul>
                                    {
                                        this.state.ztxt.map((item, index) => {
                                            return <li key={item + index}>
                                                <a href="##">
                                                    <img src={item.src} alt="" />
                                                    <p>{item.name}</p>
                                                </a>
                                            </li>

                                        })
                                    }
                                </ul>

                            </div>
                            <div className="zone_img">
                                <ul>
                                    {
                                        this.state.zimg.map((item, index) => {
                                            return <li key={item + index}>

                                                <img src={item.src} alt="" />

                                            </li>

                                        })
                                    }
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
                {/* 手机 */}
                <div className="reuse">
                    <div className="alike">
                        <div className="cell_all">
                            <div className="big_img">
                                <Link to='/redmi'> <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1226&h=120&f=webp&q=90" alt="" /></Link>
                            </div>
                            <p className="public">手机<span>查看更多 》</span></p>
                            <div className="public_img">
                                <div className="public_img1">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=234&h=614&f=webp&q=90" />
                                </div>
                                <div className="cell">
                                    {
                                        this.state.phone_img.map((item, index) => {
                                            return <li className="cell_img" key={item + index}>
                                                <img src={item.src} alt="" />
                                                <h3>{item.name}</h3>
                                                <p>{item.txt}</p>
                                                <span>{item.money}</span>
                                            </li>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* 相同部分 */}
                        <div>
                            {this.state.pub.map((item, index) => {
                                return <div className="smart" key={item + index}>
                                    <div className='smart_logo'><img src={item.logo} alt='' /></div>
                                    <div className='smart_txt'><span>{item.name}</span>
                                        <ul className='sma1'>
                                            {/* <li className={n == 1 ? 'sma' : ''} onMouseOver={() => this.change(1)}>热门</li>
                                            
                                                
                                                     <li onMouseOver={() => this.change(2)} className={n == 2 ? 'sma' : ''}>{item.l_txt}</li>
                                                 */}

                                            <Tabs defaultActiveKey="1" onChange={callback}>
                                                <TabPane tab='热门' key="1">
                                                    <div className='sma_pic'>
                                                        <ul>
                                                            {
                                                                item?.rig.map((citem, cindex) => {
                                                                    return <li key={citem + cindex}>
                                                                        <img src={citem.src} alt="" />
                                                                        <h3>{citem.h3}</h3>
                                                                        <p>{citem.name}</p>
                                                                        <span className='sma_money'>{citem.money}</span>
                                                                        <span className="del">{citem.del}</span>
                                                                    </li>
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </TabPane>
                                                <TabPane tab={item.l_txt} key="2">
                                                    <div className='sma_pic '>
                                                        <ul>
                                                            {
                                                                item?.sed.map((ditem, dindex) => {
                                                                    return <li key={ditem + dindex}>
                                                                        <img src={ditem.src} alt="" />
                                                                        <h3>{ditem.h3}</h3>
                                                                        <p>{ditem.name}</p>
                                                                        <span className='sma_money'>{ditem.money}</span>
                                                                        <span className="del">{ditem.del}</span>
                                                                    </li>
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </TabPane>
                                            </Tabs>


                                        </ul>
                                    </div>

                                    <div className='sma_all'>
                                        <div className='sma_lef'>
                                            {
                                                item?.lef_img.map((bitem, bindex) => {
                                                    return <div key={bitem + bindex}><img src={bitem.src} alt="" /></div>
                                                })
                                            }
                                        </div>
                                        {/* <div className='sma_pic1'>
                                            <div className='sma_pic sma_show'>
                                                <ul>
                                                    {
                                                        item?.rig.map((citem, cindex) => {
                                                            return <li key={citem + cindex}>
                                                                <img src={citem.src} alt="" />
                                                                <h3>{citem.h3}</h3>
                                                                <p>{citem.name}</p>
                                                                <span>{citem.money}</span>
                                                                <span className="del">{citem.del}</span>
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                             <div className='sma_pic '>
                                                    <ul>
                                                        {
                                                            item?.sed.map((ditem, dindex) => {
                                                                return <li key={ditem + dindex}>
                                                                    <img src={ditem.src} alt="" />
                                                                    <h3>{ditem.h3}</h3>
                                                                    <p>{ditem.name}</p>
                                                                    <span>{ditem.money}</span>
                                                                    <span className="del">{ditem.del}</span>
                                                                </li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>

                                        </div> */}
                                    </div>

                                </div>

                            })}
                        </div>
                        {/* 视频 */}
                        <div className='video'>
                            <div className='vid_logo'>
                                <img src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1226&h=120&f=webp&q=90' alt="" />
                            </div>
                            <div className='video_txt'>
                                <Link to='/login'>
                                    <p className="p">视频<span>查看更多 》</span></p>
                                </Link>

                            </div>
                            <div className='play'>
                                <ul>
                                    {
                                        this.state.video.map((item, index) => {
                                            return <li key={item + index}>
                                                <img src={item.src} alt="" />
                                                <div className='oval' onClick={this.playBack}><div className='sanjiao'></div></div>
                                                <p>{item.name}</p>
                                                <span>{item.txt}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            {
                                this.state.video.map((item, index) => {
                                    return <div className='player' key={item + index}>
                                        <div className='player_txt'>
                                            <h3>2021年新品发布会春季第一场</h3>
                                            <span className="sto">×</span>
                                        </div>
                                        <div>
                                            <video controls className="playing">
                                                <source src={item.vdo} />
                                                你的浏览器版本太低，
                                            </video>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                        {/* 右侧固定 */}
                        <div className='fixation'>
                            <ul className='fixul'>
                                {
                                    this.state.fixrig.map((item, index) => {
                                        return <li key={item + index} className='fixpic' onMouseOver={this.Replace}>
                                            <img src={item.src} alt='' className='fiximg' />
                                            <p>{item.txt}</p>
                                            {/* 二维码 */}
                                            <div className="evens">
                                                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78c30d4f259ed43ab20e810a522a6249.png" alt="" className='eve_img' />
                                                <p>扫码领取新</p>
                                                <p>人百元礼包</p>
                                            </div>
                                        </li>
                                    })
                                }

                                <BackTop visibilityHeight='1500'>
                                    <div className='backtop'>
                                        <img src='https://i1.mifile.cn/f/i/2018/home/totop.png' alt='' />
                                        <p>回到顶部</p>
                                    </div>
                                </BackTop>



                            </ul>

                        </div>












                    </div>
                </div>
            </div>
        )
    }
    show() {
        let osearch = document.getElementsByClassName("search")[0];
        let otxt = document.getElementsByClassName("search_txt")[0];
        let osearch1 = document.getElementsByClassName("search_joint")[0];
        osearch.style.border = "1px solid red"
        osearch1.style.border = "1px solid red"
        osearch1.style.borderLeft = "0px solid red"
        otxt.style.display = "block"
    }
    hide() {
        let osearch = document.getElementsByClassName("search")[0];
        let otxt = document.getElementsByClassName("search_txt")[0];
        let osearch1 = document.getElementsByClassName("search_joint")[0];
        osearch.style.border = "1px solid #ccc"
        osearch1.style.border = "1px solid #ccc"
        osearch1.style.borderLeft = "0px solid red"


        otxt.style.display = "none"
    }

    show1() {
        let obarul = document.getElementsByClassName("barul")[0];
        let oBtns1 = obarul.children
        let obox1 = document.getElementsByClassName("phoneMode");
        for (var i = 0; i < oBtns1.length; i++) {
            obox1[i].style.display = "block";
            obox1[i].style.zIndex = "1";
        }
    }
    hide1() {
        let obarul = document.getElementsByClassName("barul")[0];
        let oBtns1 = obarul.children
        let obox1 = document.getElementsByClassName("phoneMode");
        for (var i = 0; i < oBtns1.length; i++) {
            obox1[i].style.display = "none";
            obox1[i].style.zIndex = "1";
        }
    }
    // handleScroll() {
    //     let scrollTop = document.body.scrollTop;
    //     let fixpic5 = document.getElementsByClassName("fixpic")[5];
    //     if (scrollTop >= 1500) {
    //         fixpic5.display = "block"


    //     } else {
    //         this.setState({
    //             showtop: false
    //         })
    //     }
    // }
    // backTop() {
    //     let scrollTop = document.body.scrollTop;
    //     scrollTop = 0

    // }



    // 搜索框
    toToggle() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }




    playBack() {
        let oval = document.getElementsByClassName("oval");
        let player = document.getElementsByClassName("player")[0];
        let playing = document.getElementsByClassName("playing")[0];
        let stoping = document.getElementsByClassName("sto");

        for (var i = 0; i < oval.length; i++) {
            oval[i].index = i;
            oval[i].onclick = function () {
                player.style.display = "block"
                playing.src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4";
            }
            for (let j = 0; j < stoping.length; j++) {
                stoping[j].onclick = function () {
                    player.style.display = "none"
                    playing.src = "";
                }
            }

        }
    }

    change(i) {
        this.setState({
            n: i
        })
    }

    // 更换图片
    // Replace(){
    //     let fiximg = document.getElementsByClassName("fixpic")
    //     let index = this.state



    // }


}

export default Middle
