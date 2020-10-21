import React from 'react'
import styled from 'styled-components';
import {
	Link
  } from "react-router-dom";

const ListContain = styled.article`
    width: 30%;
    height: 14vw;
    display:flex;
    flex-direction: column;
    border: solid 4px;
`

function List (props) {
    return (
        <ListContain>
            <Link to={`/e/${props.title}`}>
                <p>{props.title}</p>
                <p>日期 2020/10/19</p>
            </Link>
        </ListContain>
    )
}

export default List