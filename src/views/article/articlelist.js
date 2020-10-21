import React from 'react'
import styled from 'styled-components';

import Article from './article.js'

const ArticleListContain = styled.div`
    display: flex;

    flex-direction: column;
    align-items:center;
    flex-grow: 1;
    margin-top: 0vh;`

const ArticleListContent = styled.main`
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
const ArticleListBanner = styled.div`
    width:100vw;
    height:20vh;
    background: center url(${props => props.bg}) no-repeat;
    background-size: cover;
`
let article = [{title:'react访问绝对路径中资源'}, {title:'flex布局下垂直与水平居中方式'},{title:'react下使用styled-components组织css优劣简介'}]
let bg = require('./img/1.jpg')
function ArticleList (props) {
    const list = article.map((item) =>
        <Article key={item.title} title={item.title}></Article>
    );
    return (
        <ArticleListContain>          
            <ArticleListBanner bg = {bg}></ArticleListBanner>
            <ArticleListContent>
                <div>
                    {list}
                </div>
            </ArticleListContent>
        </ArticleListContain>
    )
}

export default ArticleList