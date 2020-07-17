import React from 'react';
import './App.css';
import logo from './logo.svg'

import {
	Switch,
	Route
  } from "react-router-dom";

function AppBody() {
    const info = [{name: '大山雀', key: 1, desribe: '描述'},
        {name: '银喉白尾山雀', key: 2, desribe: '描述'},
        {name: '沼泽山雀', key: 3, desribe: '描述'},
        {name: '黄腹山雀', key: 4, desribe: '描述'},
        {name: '西域山雀', key: 5, desribe: '描述'},
        {name: '绿背山雀', key: 6, desribe: '描述'},
        {name: '山雀', key: 7, desribe: '描述'},
        {name: '山雀', key: 8, desribe: '描述'}]
    const listItems = info.map((item) =>
    <article key={item.key}>
        <img src={require(`./img/${item.key}.jpg`)} alt=""/>
        <div className="label">
            <span>{item.name}</span>
            <span>{item.desribe}</span>
        </div>
    </article>
  );
	return (
        <Switch>
            <Route path="/a">
                <img src={logo} className="App-logo" alt="logo" />
            </Route>
            <Route path="/b">
                <main className="App-body">
                    <div className="App-contain">
                        <div className="pic-flow">
                            {listItems}
                        </div>
                    </div>
                </main>
            </Route>
        </Switch>	

	);
}
export default AppBody;
/*			

*/