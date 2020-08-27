import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import NavSprite from './navSprite.js'

const NavContain = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    width: 400vw;
    flex-grow: 1;
`
const SliderImg = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: row;
    flex-grow:1;
    transition: all 1000ms ease;

    background: center url(${props => props.bg}) no-repeat;
    width: ${props => props.wd};
    paddingLeft: 0vw`

let backgroundList = [{bg: require('./img/1.jpg')},{bg: require('./img/2.png')},{bg: require('./img/3.png')},{bg: require('./img/4.png')}]
function Navigation () {
    let [sliderIndex, setSliderIndex] = useState(0)
    useEffect(() => {
        sliderIndex >= 3 ? setSliderIndex(sliderIndex = 0) : setSliderIndex(sliderIndex = sliderIndex + 1)
    })
    function bgScroll() {
        if (this.timer != null) return;
        this.timer = setTimeout(()=> {
            clearTimeout(this.timer)
            this.timer = null
        },1000) 

        sliderIndex >= 3 ? setSliderIndex(sliderIndex = 0) : setSliderIndex(sliderIndex = sliderIndex + 1)
    }

    let SliderContain = this.state.backgroundList.map((item, index) => 
        <SliderImg bg = {item.bg} wd = {index === this.state.nowIndex?'100vw': '100vw'} key={index}></SliderImg>
    )

    return (
        <NavContain>
            {SliderContain}
            <NavSprite bgScroll = {this.bgScroll}></NavSprite>
        </NavContain>
    )
    
}
//import logo from './logo.svg'
            //<img src={logo} className="App-logo" alt="logo" />
export default Navigation