import React from 'react'
import './login.css'

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
            body: JSON.stringify({userName: this.state.userName, passWord: this.state.passWord, id: 4396}),
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
            <div className="login-contain" onClick={e => this.hideLogin(e)}>
                <div className="login">
                    <form>
                        <label>账号:<input name='userName' value={this.state.userName} onChange={this.handleChange} /></label>
                        <label>密码:<input name='passWord' value={this.state.passWord} onChange={this.handleChange} /></label>
                    </form>
                    <button onClick={this.login}>登录</button>
                </div>
            </div>
        )
    }
}

export default Login