import React, {useState, useEffect} from 'react';
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
    transform: translateX(-${props => props.left*100/5}%);
    transition: ${props => props.ts};
    overflow: hidden;
`
const SliderImg = styled.div`
    display: flex;
    height: 100vh;
    width:100vw;
    background: center url(${props => props.bg}) no-repeat;
  `

let backgroundList = [{bg: require('./img/1.jpg')},{bg: require('./img/2.png')},{bg: require('./img/3.png')},{bg: require('./img/4.png')},{bg: require('./img/1.jpg')}]

function Navigation (props) {
    let animationSetting = `all ${props.duration}ms ${props.timing}`
    let [sliderIndex, setSliderIndex] = useState(0)
    let [transition, setTransition] = useState(animationSetting)
    let [timer, setTimer] = useState(null)
    useEffect(() => {

    })
    let bgScroll = () => {
        if (timer === 'running') return
        setTimer('running')
        setTimeout(() => {
            setTimer(null)
        }, props.duration + 1)

        if (sliderIndex < backgroundList.length - 1) {
            setSliderIndex(sliderIndex += 1)
        }
        if (sliderIndex === backgroundList.length - 1) {
            setTimeout(()=> {
                setTransition('')
                setSliderIndex(0)
                setImmediate(()=> {
                    setTransition(animationSetting)
                })
            },props.duration)              
        }
    }

    const Slider = backgroundList.map((item, index) => 
        <SliderImg bg = {item.bg} key={index}></SliderImg>
    )

    return (
        <NavContain>
            <SliderContain>
                <ImgContain left = {sliderIndex} ts = {transition}>
                    {Slider}
                </ImgContain>           
                <NavSprite bgScroll = {bgScroll}></NavSprite>      
            </SliderContain>
        </NavContain>
    )
    
}
export default Navigation
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