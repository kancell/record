import React from 'react';
import birdInfo from './bird1.json';
import './navigation.css';
import { Link } from 'react-router-dom';

const info1 = [[{name: '麻雀', info: 'red'},
{name: '山雀', info: 'red'},
],[{name: '啄木鸟', info: 'red'},
{name: '鹰', info: 'red'},
{name: '海绵', info: 'red'}],[{name: '麻雀', info: 'red'},
{name: '山雀', info: 'red'},
],[{name: '麻雀', info: 'red'},
{name: '山雀', info: 'red'},
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
            backgroundList:[{bg: require('./1.png')},{bg: require('./2.png')},{bg: require('./3.png')},{bg: require('./4.png')}],
            offsetheight:document.documentElement.clientHeight,
            nowIndex:0,           //当前在第几页
            fullPageSlide:false,   
        }
        this.reSearchShow = this.reSearchShow.bind(this)
        this.reSearchHide = this.reSearchHide.bind(this)
        this.bgScroll = this.bgScroll.bind(this)
    }
    reSearchShow() {
        this.setState({
            tips: '换一批吗？',
            infoShow: 'block'
        })
    }
    reSearchHide() {
        this.setState({
            tips: '示意敌人已不见踪迹',
            infoShow: 'none'
        })
    }
    bgScroll() {
        (this.state.nowIndex < this.state.backgroundList.length - 1) ?
        this.setState({
            nowIndex: this.state.nowIndex + 1
        }) :
        this.setState({
            nowIndex: 0
        })
    }
    render() {
        const navContain = this.state.backgroundList.map((item, index) => 
            <div className="nav-contain" 
                style={{background: `center url(${item.bg}) no-repeat`,
                backgroundSize: 'cover',
                width: `${index === this.state.nowIndex?'100vw': '0vw'}`}} key={item.bg}>                 
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
                <div className="bird-contain">
                    <div className="bird"  onMouseEnter={this.reSearchShow} onMouseLeave={this.reSearchHide}>
                        <ul>
                            {polygonBird}
                        </ul>
                        <h2 className="bird-tips">{this.state.tips}</h2>
                        <button className="bird-button" style={{display: this.state.infoShow}} onClick={this.bgScroll}>换一批</button>
                    </div>
                </div>   
            </div>
        )
    }
}
//import logo from './logo.svg'
            //<img src={logo} className="App-logo" alt="logo" />
export default Navigation