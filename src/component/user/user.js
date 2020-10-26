import React from 'react'
import {
	Link
  } from "react-router-dom";

import Login from './user-login.js'
import UserAvatar from './user-avatar.js'
import {HeaderNav, HeaderLink} from '../../major/App-header.js'

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
        if (localStorage.getItem('recordtoken') !== null) {
            this.setLoginState(this, JSON.parse(localStorage.getItem('recordtoken')).user)
        }      
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
    setLoginState (result, msg)  {
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
        localStorage.removeItem('recordtoken');
        localStorage.clear();
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
                    <HeaderLink onClick={this.showLogin}>登录</HeaderLink>
                    {this.state.loginShow ? <Login parent={ this }></Login> : ''}
                </React.Fragment>
        } else {
            user = <React.Fragment>
                <Link to="/admin"><HeaderLink>后台</HeaderLink></Link>
                <HeaderLink onClick={this.showUserAvatar}>
                    {this.state.user?this.state.user.userName:'登录'} 
                </HeaderLink> 
                {this.state.userShow ? <UserAvatar parent={ this }></UserAvatar> : ''}
            </React.Fragment>   
        }
        return (
            <HeaderNav>{user}</HeaderNav>  
        )
    }
}

export default User