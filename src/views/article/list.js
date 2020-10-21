import React from 'react'
import styled from 'styled-components';
import {
	Link
  } from "react-router-dom";

const ArticleContain = styled.article`
    width: 16vw;
    height: 14vw;
    display:flex;
    flex-direction: column;
    border: solid 4px;

`

function List (props) {
    return (
        <ArticleContain>
            <Link to={`/article/${props.title}`}>
                <p>{props.title}</p>
                <p>日期 2020/10/19</p>
            </Link>
        </ArticleContain>
    )
}

export default List