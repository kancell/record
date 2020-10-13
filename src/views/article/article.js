import React from 'react'
import styled from 'styled-components';

const ArticleContain = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-top: 1.5vh;`

const ArticleContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 90vw;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 2px rgba(26,26,26,.1);
    padding: 10px;
`
function Article (props) {
    return (
        <ArticleContain>
            <ArticleContent>asdas</ArticleContent>
        </ArticleContain>
    )
}

export default Article