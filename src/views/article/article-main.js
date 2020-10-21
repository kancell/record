import React from 'react'
import styled from 'styled-components';
import {
    useParams
} from "react-router-dom";

const ArticleContentContain = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    flex-grow: 1;
    margin-top: 0vh;`

const ArticleContents = styled.main`
    display: flex;
    flex-direction: row;
    width: 61.8vw;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 2px rgba(26,26,26,.1);
    padding: 10px;
    justify-content: center;
    
    margin-top: 1.5vh;
    div {
  
        display: flex;
        flex-wrap: wrap;

        flex-direction: row;
    }
`
function ArticleContent(params) {
    let { id } = useParams()
    return (
        <ArticleContentContain>
            <ArticleContents>{id}</ArticleContents>
        </ArticleContentContain>
    )
}

export default ArticleContent