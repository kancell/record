import React from 'react';
import birdInfo from './bird1.json';
import './navigation.css';
import { Link } from 'react-router-dom';

const info1 = [{name: '麻雀', info: 'red'},
{name: '山雀', info: 'red'},
{name: '啄木鸟', info: 'red'},
{name: '鹰', info: 'red'},
{name: '海绵', info: 'red'},]
const listItems = 
<div className="nav-list">
    {
        info1.map((item) => 
            <div className="nav-label" key={item.name}>
                <div className="link">
                    <Link to={`/b?name=${item.name}`} >{item.name}</Link>
                </div>
            </div>
        )  
    }
</div>


const polygonBird = 
<ul className="bird"  onMouseEnter={birdNav}>
    {
        birdInfo.map((item) => 
            <li className="range" style={item} key={item.key}></li>
        )
    }
</ul>

function birdNav(e) {
    //polygonBird.props.children[3].props.style.backgroundColor = "#fff"
}

function Navigation() {

    return (
        <div className="nav">
            <div className="nav-contain">
                {polygonBird}
                <h2>这里可能出现...</h2>
                {listItems}
                
            </div>
        </div>
    )
}
//import logo from './logo.svg'
            //<img src={logo} className="App-logo" alt="logo" />
export default Navigation