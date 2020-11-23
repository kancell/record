import React from 'react'
import styled from 'styled-components'

const BannerContain = styled.div`
    width:100vw;
    height:40vh;
    background: center url(${props => props.bg}) no-repeat;
    background-size: cover;
    `

function Banner (props) {
    let bg = require(`./img/${props.bg}.jpg`)
    return (
        <BannerContain bg = {bg}></BannerContain>
    )
}

export default Banner
