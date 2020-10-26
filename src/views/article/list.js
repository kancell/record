import React from 'react'
import styled from 'styled-components';
import {
	Link
  } from "react-router-dom";

const ListContain = styled.li`
    padding-top: 1.5vh;
    width: 16vw;
    display:flex;
    justify-content: center;
    a {
        width: 91.8%;
        height:  100%;
    }
    p {
        margin:1vh 0 1vh 0;
        padding: 0;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        font-size: calc(4px + 1vmin);
        color: #8590a6;
        text-align: center;
    }
`
const ListPic = styled.div`
    display: flex;
    justify-content: center;
    span {
        width: 100px;
        height: 140px;
        background-color: rgb(168, 200, 126);
    }

`

function List (props) {
    return (
        <ListContain>
            <Link to={`/e/${props.title}`}>
                <ListPic><span/></ListPic>
                <p>{props.title}</p>
                <p>日期 2020/10/19</p>
            </Link>
        </ListContain>
    )
}

export default List