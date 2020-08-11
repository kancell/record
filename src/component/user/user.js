import React from 'react'

import {
	Link
  } from "react-router-dom";
  
import Login from './user-login.js'
import UserAvatar from './user-avatar.js'


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
        }
        this.showLogin = this.showLogin.bind(this)
        this.showUserAvatar = this.showUserAvatar.bind(this)
        this.hideAllOut = this.hideAllOut.bind(this)
        this.loginOut = this.loginOut.bind(this)
    }
    componentDidMount() {

    }
    showLogin () {
        this.setState({
            loginShow: !this.state.loginShow
        })
    }
    showUserAvatar () {
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
    loginOut () {
        this.setState({
            user: null
        })
    }
    hideAllOut() {
        this.setState({
            userShow: false,
            loginShow: false
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
                <div className="header-hover" onClick={this.showUserAvatar}>
                    {this.state.user?this.state.user.userName:'登录'} 
                </div> 
                {this.state.userShow ? <UserAvatar parent={ this }></UserAvatar> : ''}
            </React.Fragment>   
        }
        return (
            <React.Fragment>{user}</React.Fragment>  
        )
    }
}

export default User