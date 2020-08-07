import React from 'react';
import birdInfo from './bird1.json';
import './navigation.css';
import { Link } from 'react-router-dom';

const info1 = [[{name: '麻雀', info: 'red'},{name: '山雀', info: 'red'}],
[{name: '啄木鸟', info: 'red'},{name: '鹰', info: 'red'},{name: '海绵', info: 'red'}],
[{name: '鸡', info: 'red'},{name: '鸭子', info: 'red'}],
[{name: '秃鹫', info: 'red'},{name: '燕', info: 'red'},
]]

const polygonBird = birdInfo.map((item) => 
            <li className="range" style={item} key={item.key}></li>
        )

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoShow: 'none',
            tips: '这里可能出现...',
            backgroundList: [{bg: require('./img/1.png')},{bg: require('./img/2.png')},{bg: require('./img/3.png')},{bg: require('./img/4.png')}],
            offsetheight: document.documentElement.clientHeight,
            nowIndex: 0,           //当前在第几页
            fullPageSlide: false,
            timer: null
        }
        this.reSearchShow = this.reSearchShow.bind(this)
        this.reSearchHide = this.reSearchHide.bind(this)
        this.bgScroll = this.bgScroll.bind(this)
    }
    reSearchShow() {
        this.setState({
            tips: '换一批？',
            infoShow: 'block'
        })
    }
    reSearchHide() {
        this.setState({
            tips: '咕咕咕？',
            infoShow: 'none'
        })
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
        const bird = 
        <div className="bird-contain">
            <h1 className="index">{this.state.nowIndex + 1}</h1>
            <div className="bird"  onMouseEnter={this.reSearchShow} onMouseLeave={this.reSearchHide}>
                <ul>
                    {polygonBird}
                </ul>
                <h2 className="bird-tips">{this.state.tips}</h2>
                <button className="bird-button" style={{display: this.state.infoShow}} onClick={this.bgScroll}>换一批</button>
            </div>
        </div>   
        return (
            <div className="nav">
                {navContain}
                {bird}
            </div>
        )
    }
}
//import logo from './logo.svg'
            //<img src={logo} className="App-logo" alt="logo" />
export default Navigation