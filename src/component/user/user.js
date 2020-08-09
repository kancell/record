import React from 'react'
import './user.css'
import {
	Link
  } from "react-router-dom";
  
import Login from './login.js'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            userShow: false,
            loginShow: false,
            childrenMsg: null
        }
        this.showLogin = this.showLogin.bind(this)
        this.showUser = this.showUser.bind(this)
        this.loginOut = this.loginOut.bind(this)
    }
    showLogin () {
        this.setState({
            loginShow: !this.state.loginShow
        })
    }
    getLoginState (result, msg)  {
        //第一个参数this，msg是第二个参数
        this.setState({
            user: msg
        })
        this.setState({
            userShow: false,
            loginShow: false
        })
    }
    showUser () {
        this.setState({
            userShow: !this.state.userShow
        })
    }
    loginOut () {
        this.setState({
            user: null
        })      
    }
    render () {
        let login = this.state.loginShow ? <Login parent={ this }></Login> : ''

        let user
        if (this.state.user === null) {
            user = <React.Fragment>
                <div className="header-hover" onClick={this.showLogin}>登录</div>
                {login}
            </React.Fragment>
        } else {
            user =  <React.Fragment>
                <Link to="/admin"><div className="header-hover">后台</div></Link>
                <div className="header-hover" onClick={this.showUser}>
                    {this.state.user?this.state.user.userName:'登录'} 
                </div> 

                <div className="user" style={{display: this.state.userShow===false?'none':''}}>
                    <div>通知</div>
                    <div>资料</div>
                    <div onClick={this.loginOut}>退出</div>
                </div> 
            </React.Fragment>   
        }
        return (
                <div className="header-right">{user}</div>  
        )
    }
}

export default User