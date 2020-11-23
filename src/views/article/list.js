import React from 'react'
import styled from 'styled-components';
import {
	Link
  } from "react-router-dom";

const ListContain = styled.li`
    padding-top: 1.5vh;
    display:flex;
    justify-content:center;
    a {
        width: 91.8%;
        display:flex;
        height:  100%;
        flex-direction: column;
        align-items: center; 
    }
    p {
        margin: 0.8vh 0 0 0;
        padding: 0;
        width: 200px;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        font-size: calc(4px + 1vmin);
        color: #8590a6;
        text-align: center;
    }
`
const PicContain = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 

`
const BookPic = styled.div`
    width: 100px;
    height: 140px;      
    background: center center url(${props => props.bg}) no-repeat;
    background-size: cover;
    border-radius: 4px;
`

function List (props) {
    if (props.title === "null") {
        return (
            <ListContain  style={{pointerEvents:" none", opacity: 0}}>
            <span>
                <PicContain>
                    <BookPic></BookPic>
                </PicContain>
                <p>null</p>
                <p>日期 0000/00/00</p>
            </span>
        </ListContain>
        )
    } else
    return (
        <ListContain>
            <Link to={`/e/${props.title}`}>
                <PicContain>
                    <BookPic bg = {props.bookImg}></BookPic>
                </PicContain>
                <p>{props.title}</p>
                <p>日期 2020/10/19</p>
            </Link>
        </ListContain>
    )
}

export default List