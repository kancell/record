import React from 'react';

import './navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
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
    return (
        <div className="nav">
            <div className="nav-contain">
                <h2>这里可能出现...</h2>
                {listItems}
                <ul className="bird">
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                    <li className="range"></li>
                </ul>
            </div>
        </div>
    )
}
//import logo from './logo.svg'
            //<img src={logo} className="App-logo" alt="logo" />
export default Navigation