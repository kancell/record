import React from 'react';
import './App.css';

import {
	Link, withRouter
  } from "react-router-dom";
  
class AppHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headHide: 1
        }
    }
    render () {
        return (
            <header className={`App-header ${this.props.location.pathname === '/'? 'hide':''}`}>
                <div className="header-contain">
                    <div className="header-left">
                        <div>       
                            <div className="header-hover"><Link to="/">场景导航</Link></div>
                            <div className="header-hover"><Link to="/b">瀑流图库</Link></div>
                            <div className="header-hover"><Link to="/c">信息</Link></div>           
                        </div>
                        <div className="header-search">
                            <input type = "text" placeholder="搜索感兴趣的内容..."/>
                            <button>查询</button>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-hover"><Link to="/admin">后台</Link></div>
                        <div className="header-hover"><Link to="/user">账户</Link></div>
                    </div>              
                </div>
            </header>
        )
    }
}


export default withRouter(AppHeader)