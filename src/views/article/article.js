import React from 'react'
import styled from 'styled-components';

import List from './list.js'
import Banner from '../../component/banner/banner.js'

const ArticleListContain = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    flex-grow: 1;
    margin-top: 0vh;`

const ArticleListContent = styled.ul`
    width:70vw;  
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 2px rgba(26,26,26,.1);
    padding: 10px;
    align-items: center;
    column-count: 4;
    column-gap: 8px;
    margin: 10px 0  10px 0 ;

`

let article = [
[{title:'react访问绝对路径中资源'},
{title:'flex布局下垂直与水平居中方式'},
{title:'react下使用styled-components组织css优劣简介'},
{title:'react-router-dom 5.0文档翻译'},],
[{title:'react1'},{title:'react2'},{title:'react3'},{title:'react4'}],
[{title:'react5'},{title:'react6'},{title:'readddddddddddddddddddddct7'}]
]


function ArticleList (props) {
    let bookImg = require('./img/book.jpg')
    const content = article.map((item, index) => {
        if (item.length%4 !== 0) {
            for (let index = 0; index < item.length%4; index++) {
                item.push({title: "null"})
            }
        }
        let list = item.map((list) => {
            return <List key={list.title} title={list.title} bookImg = {bookImg}></List>
        })
        return (
            <ArticleListContent key={index}>
                {list}
            </ArticleListContent>
        )
    })
    return (
        <ArticleListContain>          
            <Banner bg = 'banner'></Banner>
            {content}
        </ArticleListContain>
    )
}

export default ArticleList