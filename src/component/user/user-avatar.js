import React from 'react'
import './user-avatar.css'
class UserAvator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.hideUserAvator = this.hideUserAvatar.bind(this)
        this.loginOut = this.loginOut.bind(this)
    }
    hideUserAvatar(e) {
        if(e.target.className === 'user-contain') {
            this.props.parent.showUserAvatar(this)
        }
    }
    loginOut () {
        this.props.parent.loginOut(this) 
    }
    render () {
        return (
            <div className="user-contain" onClick={e => this.hideUserAvatar(e)}>
                <div className="user">
                    <div>通知</div>
                    <div>资料</div>
                    <div onClick={this.loginOut}>退出</div>
                </div> 
            </div> 
        )

    }
}

export default UserAvator