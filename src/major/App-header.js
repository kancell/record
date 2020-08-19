import React from 'react';
import User from '../component/user/user.js'

import {
	Link, withRouter
  } from "react-router-dom";

import styled from 'styled-components'
const HeaderContain = styled.header`
    width: 100vw;
    min-height: 6vh;
    position: fixed;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    font-size: calc(6px + 1vmin);
    color: #8590a6;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    transition: all 500ms ease;
    z-index: 1;
    background-color: ${props => props.bg};
    :hover {
        background-color: #fff;
      }
    `
const Header = styled.div`
    display: flex;
    width: 90vw;
    justify-content: space-between;
    flex-direction: row;`
export const HeaderNav = styled.div`
    display: flex;
    margin: 0 1.5vh;
    align-items: center;
    div {display: flex}`
const HeaderInput = styled.input`
    width: 14vw;
    height: calc(16px + 1vmin);
    padding: 0.5vh;
    border-radius: 4px;
    font-size: calc(6px + 1vmin);
    background-color: #f6f6f6;
    border: 1px solid #ebebeb;`
export const HeaderLink = styled.div`
    :hover {
        color: #0084ff;
        cursor: pointer;
    }
    :active  {
        color: #0c6cc7;
        cursor: pointer;
    }
    color: #8590a6;
    padding: 0 0.9vw;`
const HeaderButton = styled.button`
    padding: 0.5vh 1vh;
    border-radius: 4px;
    background-color: #0084ff;
    border-style: hidden;
    font-size: calc(6px + 1vmin);
    margin: 0 0.5vh;
    color: #fff;`

class AppHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render () {
        return (
            <HeaderContain bg = {this.props.location.pathname === '/'? 'rgba(0,0,0,0.3)':'#fff'}>
                <Header>
                    <HeaderNav>
                        <div>       
                            <Link to="/"><HeaderLink>场景导航</HeaderLink></Link>
                            <Link to="/b"><HeaderLink>瀑流图库</HeaderLink></Link>
                            <Link to="/c"><HeaderLink>信息</HeaderLink></Link>      
                        </div>
                        <HeaderInput type = "text" placeholder="搜索感兴趣的内容..."/>
                        <HeaderButton>查询</HeaderButton>        
                    </HeaderNav>
                    <User></User>
                </Header>
            </HeaderContain>
        )
    }
}


export default withRouter(AppHeader)