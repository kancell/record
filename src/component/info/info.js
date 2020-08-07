import React from 'react'
import './info.css';

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="info">
                <div className="info-contain">
                    <div className="name">大山雀</div>
                    <div className="detail">
                        <div className="pic"><img src={require(`../gallery/img/2.jpg`)} alt=""/></div>
                        <div className="data">详细信息</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info