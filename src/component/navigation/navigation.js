import React from 'react';
import bird from './bird1.json';
import './navigation.css';
import { Link } from 'react-router-dom';

const info1 = [{name: '麻雀', info: 'red'},
{name: '山雀', info: 'red'},
{name: '啄木鸟', info: 'red'}]
const listItems = info1.map((item) => 
    <div className="nav-label" key={item.name}>
        <div className="link">
            <Link to={`/b?name=${item.name}`} >{item.name}</Link>
        </div>

    </div>
);
const polygonInfo = bird
const polygonBird = 
<ul className="bird">
    {
        polygonInfo.map((item) => 
            <li className="range" style={item} key={item.key}></li>
        )
    }
</ul>
function Navigation() {

    return (
        <div className="nav">
            <div className="nav-contain">
                <h2>这里可能出现...</h2>
                {polygonBird}
                {listItems}
                
            </div>
        </div>
    )
}
//import logo from './logo.svg'
            //<img src={logo} className="App-logo" alt="logo" />
export default Navigation