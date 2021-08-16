import React, { Component } from 'react'
import './header.css'

// let menu = [
//     {name:"小米商城"},
//     {name:"MUI"},{name:"loT"},{name:"云服务"},{name:"天星数科"},{name:"有品"},{name:"小米开放平台"},{name:"企业团购"},{name:"资质证照"},
//     {name:"协议规则"},{name:"下载App"},{name:"智能生活"},{name:"Select Location"},{name:"登录"},{name:"注册"},{name:"消息通知"},{name:"购物车(0)"},


// ]

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                { name: "小米商城" },
                { name: "MUI" }, { name: "loT" }, { name: "云服务" }, { name: "天星数科" }, { name: "有品" }, { name: "小米开放平台" }, { name: "企业团购" }, { name: "资质证照" },
                { name: "协议规则" }, { name: "下载App" }, { name: "智能生活" }, { name: "Select Location" }, { name: "登录" }, { name: "注册" }, { name: "消息通知" }


            ]
        }
        // this.show = this.show.bind(this)
        this.show1 = this.show1.bind(this)
        // this.hide = this.hide.bind(this)
        this.hide1 = this.hide1.bind(this)
    }
    render() {
        return (
            <div className="M-header">
                <ul className="header_ul">
                    {
                        this.state.menu.map((item, index) => {
                            return <li key={item + index} ><a href='#!'>{item.name}</a> <div className="fix_app">
                                <img src="../assets/img/img1/ia_100000000.png" alt="" />

                                <p>下载小米App</p>
                            </div></li>
                        })
                    }

                    <li onMouseOver={this.show1} onMouseOut={this.hide1} className='shopli'><span>

                    </span><a href='#!'>购物车(0)</a></li>
                </ul>


                <div className="shop">购物车中还没有商品赶紧选购吧</div>
            </div>
        )
    }

    // show() {
    //     let app = document.getElementsByClassName("fix_app")[0];
    //     app.style.display = "block"
    // }
    // hide() {
    //     let app = document.getElementsByClassName("fix_app")[0];
    //     app.style.display = "none"
    // }
    show1() {
        let shop = document.getElementsByClassName("shop")[0];
        shop.style.display = "block"
    }
    hide1() {
        let shop = document.getElementsByClassName("shop")[0];
        shop.style.display = "none"
    }
}



export default Header

