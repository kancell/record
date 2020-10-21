import React from 'react'
import styled from 'styled-components';

const ArticleContain = styled.article`
    width: 16vw;
    height: 14vw;
    display:flex;
    flex-direction: column;
    border: solid 4px;

`

function Article (props) {
    return (
        <ArticleContain>
            <p>{props.title}</p>
            <p>日期 2020/10/19</p>
        </ArticleContain>
    )
}

export default Article