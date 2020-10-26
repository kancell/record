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
    fetch('http://v.juhe.cn/joke/content/list.php?key=您申请的KEY&page=2&pagesize=10&sort=asc&time=14187452377fe74f63adb850d695b873bcd97de1f9', {
        method: 'get',
        mode: 'cors',
        //body: JSON.stringify({userName: this.state.userName, passWord: this.state.passWord, id: 4396}),
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.log('错误:', e)
        //this.setState({user: null})
    }) 
    let { id } = useParams()

    return (
        <ArticleContentContain>
            <ArticleContents>{id}</ArticleContents>
        </ArticleContentContain>
    )
}

export default ArticleContent