import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';

import NavSprite from './navSprite.js'

const info1 = [[{name: '麻雀', info: 'red'},{name: '山雀', info: 'red'}],
[{name: '啄木鸟', info: 'red'},{name: '鹰', info: 'red'},{name: '海绵', info: 'red'}],
[{name: '鸡', info: 'red'},{name: '鸭子', info: 'red'}],
[{name: '秃鹫', info: 'red'},{name: '燕', info: 'red'},
]]

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoShow: 'none',
            tips: '这里可能出现...',
            backgroundList: [{bg: require('./img/1.jpg')},{bg: require('./img/2.png')},{bg: require('./img/3.png')},{bg: require('./img/4.png')}],
            offsetheight: document.documentElement.clientHeight,
            nowIndex: 0,           //当前在第几页
            fullPageSlide: false,
            timer: null
        }
        this.bgScroll = this.bgScroll.bind(this)
    }
    bgScroll() {
        if (this.timer != null) return;
        (this.state.nowIndex < this.state.backgroundList.length - 1) ?
        this.setState({nowIndex: this.state.nowIndex + 1}) :
        this.setState({nowIndex: 0})
        /*
        let ca = this.state.backgroundList.shift()
        this.state.backgroundList.push(ca)
       */
        this.timer = setTimeout(()=> {
            clearTimeout(this.timer)
            this.timer = null
        },1000) 
    }
    render() {
        const navContain = this.state.backgroundList.map((item, index) => 
            <div className="nav-contain" 
                style={{background: `center url(${item.bg}) no-repeat`,
                backgroundSize: 'auto 100vh',
                paddingLeft: `${index > this.state.nowIndex?'0vw': '0vw'}`,
                width: `${index === this.state.nowIndex?'100vw': '0vw'}`}} key={index}>                 
                <div className="nav-list">
                    {index === this.state.nowIndex ? info1[this.state.nowIndex].map((item) => 
                        <div className="nav-label" key={item.name}>
                            <div className="link">
                                <Link to={`/b?name=${item.name}`} >{item.name}</Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        )
        return (
            <div className="nav">
                {navContain}
                <NavSprite bgScroll = {this.bgScroll}></NavSprite>
            </div>
        )
    }
}
//import logo from './logo.svg'
            //<img src={logo} className="App-logo" alt="logo" />
export default Navigation