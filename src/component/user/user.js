import React from 'react'
import './user.css'
import {
	Link
  } from "react-router-dom";
  
import Login from './login.js'


//const appContext = React.createContext()
/*
<appContext.Consumer>
{value => value}
</appContext.Consumer>
*/
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
        this.hideAllOut = this.hideAllOut.bind(this)
    }
    componentDidMount() {

    }
    showLogin () {
        this.setState({
            loginShow: !this.state.loginShow
        })
    }
    showUser () {
        this.setState({
            userShow: !this.state.userShow
        })
    }
    getLoginState (result, msg)  {
        //第一个参数this，msg是第二个参数
        this.setState({
            user: msg
        })
        this.hideAllOut()
    }
    hideAllOut() {
        this.setState({
            userShow: false,
            loginShow: false
        })
    }
    loginOut () {
        this.setState({
            user: null
        })      
    }
    render () {
        let user
        if (this.state.user === null) {
            user = <React.Fragment>      
                    <div className="header-hover" onClick={this.showLogin}>登录</div>
                    {this.state.loginShow ? <Login parent={ this }></Login> : ''}
                </React.Fragment>
        } else {
            user = <React.Fragment>
                <Link to="/admin"><div className="header-hover">后台</div></Link>
                <div className="header-hover" onClick={this.showUser}>
                    {this.state.user?this.state.user.userName:'登录'} 
                </div> 
                {this.state.userShow ? <div className="user-contain" onClick={e => this.showUser(e)}>
                    <div className="user" style={{display: this.state.userShow===false?'none':''}}>
                        <div>通知</div>
                        <div>资料</div>
                        <div onClick={this.loginOut}>退出</div>
                    </div> 
                </div> : ''}
            </React.Fragment>   
        }
        return (
            <React.Fragment>{user}</React.Fragment>  
        )
    }
}

export default User