import React from 'react'
import styled from 'styled-components';

const ArticleContain = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    flex-grow: 1;
    margin-top: 0vh;`

const ArticleContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 61.8vw;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 2px rgba(26,26,26,.1);
    padding: 10px;
    margin-top: 1.5vh;
`
const ArticleBanner = styled.div`
    width:100vw;
    height:20vh;
    background: center url(${props => props.bg}) no-repeat;
    background-size: cover;
`
let bg = require('./img/1.jpg')
function Article (props) {
    return (
        <ArticleContain>          
            <ArticleBanner bg = {bg}></ArticleBanner>
            <ArticleContent>
                <p>1. react访问绝对路径中资源</p>
                <p>2. flex布局下垂直与水平居中方式</p>
                <p>3. react下使用styled-components组织css优劣简介</p>
            </ArticleContent>
        </ArticleContain>
    )
}

export default Article