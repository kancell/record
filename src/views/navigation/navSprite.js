import React from 'react'
import styled from 'styled-components'

import birdInfo from './bird1.json';

const BirdContain = styled.section`
    display: flex;
    position: fixed;
    right: 0%;
    top: 8%;
    flex-grow: 1;
`
const Bird =styled.ul`
    display: flex;
    width: 15vmin;
`
const BirdButton = styled.button`
    outline: none;
    border: none;
    color: #fff;
    font-family: 'BlocExtCond';
    font-size: calc(3px + 1.4vmin);
    width: 80px;
    height: 80px;
    cursor:pointer;
    background-color: rgba(0,0,0,0.3);
    border-radius: 100%;
    border: 1px solid ;
`
const BirdTips = styled.div`
    color: #fff;
    font-family: 'BlocExtCond';
    font-size: calc(3px + 2.4vmin);
    font-weight: 300;
    border: 1px solid ;
    padding: 1vmin;
    border-radius: 1vmin;
    background-color: rgba(0,0,0,0.3)
`
const SpritePolygon = styled.li`
    height: 30vmin;
    width: 45vmin;
    margin-left: -15vmin;
    position: absolute;;
    `
const polygonBird = birdInfo.map((item) => <SpritePolygon style={item} key={item.key}></SpritePolygon>)

function NavSprite(params) {
    return (
        <BirdContain>
                <BirdTips>tips</BirdTips>
                <BirdButton>换一批</BirdButton>
                <Bird>
                    {polygonBird}
                </Bird>
        </BirdContain>   
    )
}

export default NavSprite