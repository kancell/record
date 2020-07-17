import React from 'react';
import './App.css';

import {
	Link
  } from "react-router-dom";

function AppHeader() {
    return (
        <header className="App-header">
        <div className="header-left">
            <div>       
                <div className="header-hover"><Link to="/a">场景导航</Link></div>
                <div className="header-hover"><Link to="/b">瀑流图库</Link></div>           
            </div>
            <div className="header-search">
                <input type = "text" placeholder="搜索感兴趣的内容..."/>
                <button>查询</button>
            </div>
        </div>
        <div className="header-right">
            <div className="header-hover">后台管理</div>
            <div className="header-hover">账户模块</div>
        </div>
        </header>
    );
}


export default AppHeader