import React from 'react'
import styled from 'styled-components'

const LoginContain = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    bottom:0;
    left:0px;
    z-index: -1;
`
const LoginForm = styled.div`
    position: fixed;
    width: 20vw;
    display: flex;
    top:8vh;
    right: 0vw;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #ebebeb;
    box-shadow: 0 5px 20px rgba(26,26,26,.1);
    cursor:default;
    font-family: 'BlocExtCond';
    font-size: calc(3px + 1.5vmin);
    font-weight: 300;
`
const Button = styled.button`margin-bottom: 0.5vh;`
const Label = styled.label`
    display: flex;
    padding: 0.5vh;
`
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            user: null
        }
        this.login = this.login.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.hideLogin = this.hideLogin.bind(this)
    }
    login() {
        fetch('http://localhost:8080/1', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({userName: this.state.userName, passWord: this.state.passWord}),
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({user: data})
            this.props.parent.getLoginState(this, this.state.user)
        })
        .catch(e => {
            console.log('错误:', e)
            this.setState({user: null})
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
        if(e.target.className === 'login-contain') {
            this.props.parent.showLogin(this)
        }
    }
    render() {
        return (
            <LoginContain onClick={e => this.hideLogin(e)}>
                <LoginForm>
                    <form>
                        <Label>账号:<input name='userName' value={this.state.userName} onChange={this.handleChange} /></Label>
                        <Label>密码:<input name='passWord' value={this.state.passWord} onChange={this.handleChange} /></Label>
                    </form>
                    <Button onClick={this.login}>登录</Button>
                </LoginForm>
            </LoginContain>
        )
    }
}

export default Login