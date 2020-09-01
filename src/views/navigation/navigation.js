import React from 'react';
import './navigation.css';

import styled from 'styled-components'
import NavSprite from './navSprite.js'

const NavContain = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    flex-grow: 1;
    overflow: hidden;
    justify-content: flex-start;
`
const SliderContain = styled.section`
    display:flex;
`
const ImgContain = styled.div`
    display:flex;
    transform: translateX(${props => props.left/5}%);
    transition: ${props => props.ts};
    overflow: hidden;
`
const SliderImg = styled.div`
    display: flex;
    height: 100vh;

    width:100vw;

    background: center url(${props => props.bg}) no-repeat;

  `
/*
const info1 = [[{name: '麻雀', info: 'red'},{name: '山雀', info: 'red'}],
[{name: '啄木鸟', info: 'red'},{name: '鹰', info: 'red'},{name: '海绵', info: 'red'}],
[{name: '鸡', info: 'red'},{name: '鸭子', info: 'red'}],
[{name: '秃鹫', info: 'red'},{name: '燕', info: 'red'},
]]
<div className="nav-list">
{index === this.state.nowIndex ? info1[this.state.nowIndex].map((item) => 
    <div className="nav-label" key={item.name}>
        <div className="link">
            <Link to={`/b?name=${item.name}`} >{item.name}</Link>
        </div>
    </div>
) : null}
</div>
*/
let backgroundList = [{bg: require('./img/1.jpg')},{bg: require('./img/2.png')},{bg: require('./img/3.png')}]
class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoShow: 'none',
            tips: '这里可能出现...',
            backgroundList: [{bg: require('./img/1.jpg')},{bg: require('./img/2.png')},{bg: require('./img/3.png')},{bg: require('./img/4.png')},{bg: require('./img/1.jpg')}],
            offsetheight: document.documentElement.clientHeight,
            nowIndex: 0,           //当前在第几页
            transition: 'all 1000ms ease',
            timer: null
        }
        this.bgScroll = this.bgScroll.bind(this)
    }
    bgScroll() {
       //if (this.timer != null) return;
       this.setState({transition: 'all 1000ms ease'})
        if (this.state.nowIndex > -(this.state.backgroundList.length-1) * 100) {
            this.setState({nowIndex: this.state.nowIndex - 100})
            if (this.state.nowIndex === -(this.state.backgroundList.length-2) * 100) {
                setTimeout(()=> {
                    this.setState({transition: ''})
                    this.setState({nowIndex: 0}) 
                },1000) 
            }
        } 


        
        /*
        let ca = this.state.backgroundList.shift()
        this.state.backgroundList.push(ca)
      
        
        this.timer = setTimeout(()=> {
            clearTimeout(this.timer)
            this.timer = null
        },1000) 
 */
        
    }
    render() {
        const Slider = this.state.backgroundList.map((item, index) => 
            <SliderImg bg = {item.bg} wd = {index === this.state.nowIndex?'100vw': '100vw'} key={index}></SliderImg>
        )
        return (
            <NavContain>
               <SliderContain>
                    <ImgContain left = {this.state.nowIndex}  wd = {this.state.backgroundList.length * 100} ts = {this.state.transition}>
                        {Slider}
                    </ImgContain>
                
                    <NavSprite bgScroll = {this.bgScroll}></NavSprite>
           
                </SliderContain>
            </NavContain>
        )
    }
}
//import logo from './logo.svg'
            //<img src={logo} className="App-logo" alt="logo" />
export default Navigation