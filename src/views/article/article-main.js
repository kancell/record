import React , { useState , useEffect } from 'react'
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
    flex-direction: column;
    width: 61.8vw;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 2px rgba(26,26,26,.1);
    padding: 10px;
    align-items: center;  
    margin-top: 1.5vh;
    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
`
function ArticleContent(params) {
    const [content, setContent] = useState(null)

    useEffect(() => {
        let loginState = null
        if (localStorage.getItem('recordtoken') !== null) {
            loginState = JSON.parse(localStorage.getItem('recordtoken')).token
            //loginState = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ7XCJpZFwiOlwiNDM5NlwifSJ9.DLoyHLDJG2wSaDiTBtf-yA3xJOYhQzJIUIhsrnwPMVk"
            //setLoginState(JSON.parse(localStorage.getItem('recordtoken')).user)
        }
        fetch('http://localhost:8080/2', {
            method: 'get',
            mode: 'cors',
            redirect: 'manual',
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json',
                'token': loginState,
            },
        })
        .then(res => {
            console.log(res);
            //window.location.reload();
        })
        .then(data => {
            //setContent(data.status)
            //console.log(data)
        })
       .catch(e => {
            console.log('错误:', e)
            //this.setState({user: null})
        }) 
    })


    let { id } = useParams()

    return (
        <ArticleContentContain>
            <ArticleContents>
                <h2>{id}</h2>
                <p>{content}</p>
            </ArticleContents>
        </ArticleContentContain>
    )
}

export default ArticleContent