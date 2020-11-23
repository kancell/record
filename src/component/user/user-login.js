import React from 'react'
import styled from 'styled-components'
const LoginContain = styled.a`
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    bottom:0;
    left:0px;
    background: #669999;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    justify-content: flex-end;
`
const LoginForm = styled.div`
    margin-top: 2vh;
    margin-right: 1vw;
    display:flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(26,26,26,.1);
    cursor:default;
    font-family: 'BlocExtCond';
    font-size: calc(3px + 1.5vmin);
    font-weight: 300;
    height: 61.8vh;
`
const LoginLabel = styled.label`
    border-radius: px;
    display: flex;
    width:230px;
    height:34.4px;
    flex-direction: row;
    margin: 4px 20px 4px 20px;
    align-items: center;
    border: 1px solid #BBBBBB;
    span {
        width: 48px;
        text-align: center;
    }
    :focus {
        border: 1px solid #red
    }
`
const LoginInput = styled.input`
    border: none;
    outline: none; 
    width:170px;
    height:17.6px; 

`
const LoginButton = styled.div`
    justify-content: space-around;
    button {
        color: #fff;
        background: #1890ff;
        border-color: #1890ff;
        text-shadow: 0 -1px 0 rgba(0,0,0,.12);
        box-shadow: 0 2px 0 rgba(0,0,0,.045);      
    }

`
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            token: '',
            user: null
        }
        this.tokencheck = this.tokencheck.bind(this)
        this.login = this.login.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.hideLogin = this.hideLogin.bind(this)
    }
    login() {
        fetch('http://localhost:8080/1', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({userName: this.state.userName, passWord: this.state.passWord, id: 4396}),
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            if (data.code === 200) {
                console.log(data)
                this.setState({user: data.user, token: data.token})         
                this.props.parent.setLoginState(this, this.state.user)
                localStorage.setItem('recordtoken', JSON.stringify(data));
            } else {
                console.log('返回状态码：' + data.code + ' 登陆失败')
            }
        })
        .catch(e => {
            console.log('错误:', e)
            this.setState({user: null})
        })   
    }
    tokencheck() {
        fetch('http://localhost:8080/2', {
            method: 'get',
            mode: 'cors',
            //body: JSON.stringify({userName: this.state.userName, passWord: this.state.passWord, id: 4396}),
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json',
                'token': this.state.token
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
    }
    handleSubmit() {
        alert('提交的名字: ' + this.state.userName + 'this.state.userName' + this.state.passWord)
    }
    handleChange(e) {
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name]: value
        })
    }
    hideLogin(e) {
        if(e.target.name === 'LoginContain') {
            this.props.parent.showLogin(this)
        }
    }
    render() {
        return (
            <LoginContain name='LoginContain' onClick={e => this.hideLogin(e)}>
                <LoginForm>
                    <LoginLabel><span>账号:</span><LoginInput name='userName' value={this.state.userName} onChange={this.handleChange} /></LoginLabel>
                    <LoginLabel><span>密码:</span><LoginInput name='passWord' value={this.state.passWord} onChange={this.handleChange} /></LoginLabel>
                    <LoginButton>
                        <button onClick={this.login}>登录</button>
                        <button onClick={this.tokencheck}>登录2</button>
                    </LoginButton>
                </LoginForm>
            </LoginContain>
        )
    }
}

export default Login