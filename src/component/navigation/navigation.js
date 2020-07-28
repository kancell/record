import React from 'react';
import birdInfo from './bird1.json';
import './navigation.css';
import { Link } from 'react-router-dom';

const info1 = [{name: '麻雀', info: 'red'},
{name: '山雀', info: 'red'},
{name: '啄木鸟', info: 'red'},
{name: '鹰', info: 'red'},
{name: '海绵', info: 'red'},]
const listItems = 
      info1.map((item) => 
            <div className="nav-label" key={item.name}>
                <div className="link">
                    <Link to={`/b?name=${item.name}`} >{item.name}</Link>
                </div>
            </div>
        )  
const polygonBird = birdInfo.map((item) => 
            <li className="range" style={item} key={item.key}></li>
        )



class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoShow: 'none',
            tips: '这里可能出现...'
        }
        this.reSearchShow = this.reSearchShow.bind(this)
        this.reSearchHide = this.reSearchHide.bind(this)
    }
    reSearchShow() {
        this.setState({
            tips: '换一批吗？',
            infoShow: 'block'
        })
    }
    reSearchHide() {
        this.setState({
            tips: '再看看吧',
            infoShow: 'none'
        })
    }
    render() {
        return (
            <div className="nav">
                <div className="nav-contain">                 
                    <div className="nav-list">
                            {listItems}    
                    </div>

                    <div className="bird-contain">
                        <div className="bird"  onMouseEnter={this.reSearchShow} onMouseLeave={this.reSearchHide}>
                            <ul>
                                {polygonBird}
                            </ul>
                            <h2 className="bird-tips">{this.state.tips}</h2>
                            <div className="bird-button" style={{display: this.state.infoShow}}>换一批</div>
                        </div>
                    </div>                      
                </div>
            </div>
        )
    }

}
//import logo from './logo.svg'
            //<img src={logo} className="App-logo" alt="logo" />
export default Navigation