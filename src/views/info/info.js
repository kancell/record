import React from 'react'

import styled from 'styled-components'
const InfoContain = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-top: 1.5vh;`

const InfoContent = styled.main`
    display: flex;
    flex-direction: column;
    width: 61.8vw;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px 2px rgba(26,26,26,.1);
    padding: 10px;
`
const Name = styled.p`  
    display: flex;
    height: 4vmin;
    margin: 0`
const Detail = styled.section`
    display: flex;
    justify-content: space-between;
    img{
        width: 25vw;
    }`
const Data = styled.div`
    width: 64vw;
`
class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <InfoContain>
                <InfoContent>
                    <Name>大山雀</Name>
                    <Detail>
                        <div><img src={require(`../gallery/img/2.jpg`)} alt=""/></div>
                        <Data>详细信息</Data>
                    </Detail>
                </InfoContent>
            </InfoContain>
        )
    }
}

export default Info