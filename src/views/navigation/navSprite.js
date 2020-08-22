import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import bird from './bird.json';

const SpriteContain = styled.section`
    display: flex;
    position: fixed;
    right: -15vmin;
    top: 8%;
    flex-grow: 1;
`
const Sprite =styled.ul`
    display: flex;
    width: 45vmin;
    height: 30vmin;
    padding: 0;
    li {
        height: 30vmin;
        width: 45vmin;
        position: absolute;
    }
`
const SpriteButton = styled.button`
    visibility: ${props => props.show};
    outline: none;
    border: none;
    position: absolute;
    top: 50%;
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
const SpriteTips = styled.div`
    position: absolute;
    color: #fff;
    width: 120px;
    font-family: 'BlocExtCond';
    font-size: calc(3px + 2.4vmin);
    font-weight: 300;
    border: 1px solid ;
    padding: 1vmin;
    border-radius: 1vmin;
    background-color: rgba(0,0,0,0.3)
`

const polygonBird = bird.map((item) => <li style={item} key={item.key}></li>)

function NavSprite(params) {
    let [buttonShow, setButtonShow] = useState('hidden');
    useEffect(() => {

    })
    return (
        <SpriteContain onMouseEnter={() => setButtonShow(buttonShow = 'visible')} onMouseLeave={() => setButtonShow(buttonShow = 'hidden')}>
                <SpriteTips>tips</SpriteTips>
                <SpriteButton show={buttonShow} onClick={params.bgScroll}>换一批</SpriteButton>
                <Sprite>
                    {polygonBird}
                </Sprite>
        </SpriteContain>   
    )
}

export default NavSprite