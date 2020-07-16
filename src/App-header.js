import React from 'react';
import './App.css';

function AppHeader() {
    return (
        <header className="App-header">
        <div className="header-left">
            <div>
                <div className="header-hover">场景导航</div>
                <div className="header-hover">瀑流图库</div>
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