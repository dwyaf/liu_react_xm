
import React, { Component, Fragment } from 'react'
import axios from "axios"
import './footer.css'




class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            use1: [],
            end: [],


            site: [],
            src: [],
            footrig: [],
            timer: null,
            index: 0,
            imgArr: ["https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/43e10cba687baf8be7cd2cbea682311a.png",
                "https://xyt.xinchacha.com/img/icon/icon3.png"],
        }
        // this.Regular = this.Regular.bind(this)
    }
    componentDidMount() {
        // console.log('componentDidMount-----------组件挂在完成的时刻')
        axios.get('http://localhost:3000/aaa')
            .then(
                (res) => {
                    console.log("获取数据成功" + JSON.stringify(res))

                    this.setState({
                        use1: res.data.user.use1,
                        end: res.data.end.end_txt,


                        site: res.data.site.sited,
                        src: res.data.img.end_img,
                        footrig: res.data.footrig


                    })
                })
            .catch((error) => { console.log("获取数据失败" + error) })

    }

    render() {
        return (
            <Fragment>
                <div className="footer" >
                    <div className="foot">
                        <div className='nav_end'>
                            <ul>
                                {
                                    this.state.use1.map((item, index) => {
                                        return <li key={item + index}>{item.name}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='left_end'>
                            {
                                this.state.end.map((item, index) => {
                                    return <ul key={item + index}><li>{item.name}</li>
                                        {item?.txt.map((sonItem, sonIndex) => {
                                            return <li key={sonItem + sonIndex} className='hov'>{sonItem.txt1}</li>

                                        })}




                                    </ul>
                                })
                            }
                            <div className='right_end'>
                                <div className="dl_right">
                                    <p className="dl_phone">{this.state.footrig.phone}</p>
                                    <p className="time">{this.state.footrig.time}</p>
                                    <div className="people">{this.state.footrig.people}</div>
                                    <p className="time">
                                        <span>{this.state.footrig.prefer}</span>
                                        <span>
                                            <img src={this.state.footrig.picwx} alt="hh" />
                                            <img src={this.state.footrig.picwb} alt="hh" />
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='base'>
                            <img src='//s02.mifile.cn/assets/static/image/logo-mi2.png' className='logo_end' alt="" />
                            <div className='base_rig'>
                                <ul>
                                    {
                                        this.state.site.map((item, index) => {
                                            return <li key={item + index}>{item.name}</li>
                                        })
                                    }
                                </ul>
                                <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</p>
                                <p>(京)网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告</p>
                                <p>增值电信业务许可证 网络食品经营备案 京食药网食备202010048   食品经营许可证</p>
                                <p>违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
                                <div>
                                    {
                                        this.state.src.map((item, index) => {
                                            return <img src={item.src} className='flash' key={item + index} alt="" />
                                        })
                                    }

                                </div>

                            </div>
                            <p className="live">让全球每个人都能享受科技带来的美好生活</p>
                        </div>

                    </div>

                </div>

            </Fragment>
        )
    }
    // Regular() {
    //     let flash = document.getElementsByClassName("flash")[4];
    //     let { timer, index } = this.state
    //     timer = setInterval(() => {

    //         this.state.index++;

    //         if (this.state.index >= this.state.imgArr.length) {
    //             this.state.index = 0;
    //         }

    //         flash.src = this.state.imgArr[index];
    //     }, 5000);
    // }
}

export default Footer;