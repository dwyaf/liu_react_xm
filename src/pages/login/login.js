import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin: false,
            user: ''
         }
         this.logout = this.logout.bind(this);
        this.select = this.select.bind(this);
    }
    componentDidMount() {
        let getUserArr = window.sessionStorage.getItem("user");

        if (getUserArr != null) {
            getUserArr = JSON.parse(getUserArr);
            getUserArr.map(item => {
                if (item.status == true) {
                    this.setState({
                        isLogin: true,
                        user: item.name
                    });

                    return;
                }
            });
        }
    }

    logout() {
        // 退出时记录当前页面地址
        window.sessionStorage.setItem("backurl", this.props.location.pathname);

        // 设置登出状态
        let getUserArr = window.sessionStorage.getItem("user");

        getUserArr = JSON.parse(getUserArr);
        getUserArr.map(item => {
            if (item.name == this.state.user) {
                item.status = false;
                return;
            }
        });

        window.sessionStorage.setItem("user", JSON.stringify(getUserArr));
        this.setState({ isLogin: false });

        // 如果在购物车界面退出登录就要调回首页
        let path = this.props.location.pathname;
        if (path == '/shoppingcar') {
            this.props.history.replace('/');
        }
    }

    select(obj) {
        this.props.history.push(obj.key);
    }
    render() { 
        let logInfo = this.state.isLogin == false ?
            (<p><Link to="/login">登录</Link><span>|</span><Link to="/register">注册</Link></p>) :
            (<p>Hi, <a href="javascript:;">{this.state.user}</a><span>|</span><a href="javascript:;" onClick={this.logout}>退出登录</a></p>);
        let currentKey = this.props.location.pathname;
        // const Demo2 = () => {
        //     const onFinish = (values: any) => {
        //       console.log('Success:', values);
        //     };
          
        //     const onFinishFailed = (errorInfo: any) => {
        //       console.log('Failed:', errorInfo);
        //     };
          
        //     return (
        //       <Form
        //         name="basic"
        //         labelCol={{ span: 8 }}
        //         wrapperCol={{ span: 16 }}
        //         initialValues={{ remember: true }}
        //         onFinish={onFinish}
        //         onFinishFailed={onFinishFailed}
        //       >
        //         <Form.Item
        //           label="Username"
        //           name="username"
        //           rules={[{ required: true, message: 'Please input your username!' }]}
        //         >
        //           <Input />
        //         </Form.Item>
          
        //         <Form.Item
        //           label="Password"
        //           name="password"
        //           rules={[{ required: true, message: 'Please input your password!' }]}
        //         >
        //           <Input.Password />
        //         </Form.Item>
          
        //         <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        //           <Checkbox>Remember me</Checkbox>
        //         </Form.Item>
          
        //         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        //           <Button type="primary" htmlType="submit">
        //               <Link to='/home'> 登录</Link>
                   
        //           </Button>
        //         </Form.Item>
        //       </Form>
        //     );
        //   };
        return ( 
            <div>
                <div className="" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            style={{ lineHeight: '64px' }}
                            defaultSelectedKeys={[currentKey]}
                            onSelect={this.select}
                        >
                            <Menu.Item key="/home">首页</Menu.Item>
                            <Menu.Item key="/redmi">红米</Menu.Item>
                            <Menu.Item key="/home">登录</Menu.Item>
                            <Menu.Item key="/home">注册</Menu.Item>
                        </Menu>
                        <div className='load'>
                            {/* <Demo2 /> */}
                        </div>
                
            </div>
             
             )
            
    }
    
}
 
export default Login;