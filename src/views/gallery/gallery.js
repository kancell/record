import React from 'react';
import styled from 'styled-components';

const GalleryContain = styled.main`
display: flex;
justify-content: center;
background-color: #fff;;
flex-grow: 1;
padding-top: 7.5vh;`

const GalleryMain = styled.section`
    display: flex;
    width: 90vw;
    background: #f6f6f6;
    border-radius: 4px;
    box-shadow: 0 2px 5px 2px rgba(26,26,26,.1);
    padding: 10px;
    @media screen and (max-width: 1800px) {
        width: 90vw;
        padding: 0;
    }
    @media screen and (max-width: 1366px) {
        width: 90vw;
        padding: 0;
    }
    @media screen and (max-width: 768px) {
        width: 100vw;
        padding: 0;
    }
`

const PicContain= styled.div`
    margin: 0 auto;
    column-count: 4;
    column-gap:8px;
    width: 100%;
    @media screen and (max-width: 1800px) {
        margin: 0 auto;
        column-count: 3;
        column-gap:8px;
    }
    @media screen and (max-width: 1366px) {
        margin: 0 auto;
        column-count: 3;
        column-gap:4px;
    }
    @media screen and (max-width: 768px) {
        margin: 0 auto;
        column-count: 2; 
        column-gap:1px;
    }
`

const Pic = styled.section`
    break-inside: avoid;
    margin-bottom: 8px;
    border-radius: 4px;
    transition: transform .15s ease-in-out, box-shadow .15s ease-in-out;
    box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
    :hover {
        box-shadow: 0 1px 8px 2px rgba(26,26,26,.1);
    }
    img {
        border-radius: 4px;
        width: 100%;
    }
`
const PicLabel = styled.div`
    display: flex;
    span{
        align-items: center;
        margin-left: 8px;
        margin-bottom: 0.5vh;
        padding-right: 0.75vw;
        padding-left: 0.75vw;
        border-radius: 2px;
        text-decoration: none;
        font-size: calc(6px + 1vmin);
        transition: all .1s ease-in-out;
        text-transform: capitalize;
        line-height: 3vh;
        height: 3vh;
        color: #767676;
        background-color: #eee;
    }
    span:hover{
        color: #000;
        background-color: #ebebeb;
    }     
`
function Gallery({ name }) {
    if(name != null) {
        console.log(name)
    }
    const info = [{name: '大山雀', key: 1, desribe: '描述'},
        {name: '银喉白尾山雀', key: 2, desribe: '描述'},
        {name: '沼泽山雀', key: 3, desribe: '描述'},
        {name: '黄腹山雀', key: 4, desribe: '描述'},
        {name: '西域山雀', key: 5, desribe: '描述'},
        {name: '绿背山雀', key: 6, desribe: '描述'},
        {name: '山雀', key: 7, desribe: '描述'},
        {name: '山雀', key: 8, desribe: '描述'}]
    const listItems = info.map((item) =>
        <Pic key={item.key}>
            <img src={require(`./img/${item.key}.jpg`)} alt=""/>
            <PicLabel>
                <span>{item.name}</span>
                <span>{item.desribe}</span>
            </PicLabel>
        </Pic>
    );
	return (
        <GalleryContain>
            <GalleryMain>
                <PicContain>
                    {listItems}
                </PicContain>
            </GalleryMain>
        </GalleryContain>
	);
}
export default Gallery;