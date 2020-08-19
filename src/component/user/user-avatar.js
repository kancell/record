import React from 'react'
import styled from 'styled-components'

const UserContain = styled.a`
    position: fixed;
    width: 100vw;
    height: 100vh;
    bottom:0;
    left:0px;
    z-index: -1;
`
const User = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    height: auto;
    border: cornsilk;
    top:8vh;
    right: 4.5vw;
    padding: 0.5vh 1vw;
    border-radius: 4px;
    font-size: calc(6px + 1vmin);
    background-color: #f6f6f6;
    border: 1px solid #ebebeb;
    box-shadow: 0 5px 20px rgba(26,26,26,.1);
    cursor:pointer;
`

class UserAvator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.hideUserAvator = this.hideUserAvatar.bind(this)
        this.loginOut = this.loginOut.bind(this)
    }
    hideUserAvatar(e) {
        if(e.target.name === 'UserContain') {
            this.props.parent.showUserAvatar(this)
        }
    }
    loginOut () {
        this.props.parent.loginOut(this) 
    }
    render () {
        return (
            <UserContain name='UserContain' onClick={e => this.hideUserAvatar(e)}>
                <User>
                    <div>通知</div>
                    <div>资料</div>
                    <div onClick={this.loginOut}>退出</div>
                </User> 
            </UserContain> 
        )

    }
}

export default UserAvator