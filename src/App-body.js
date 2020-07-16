import React from 'react';
import './App.css';

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
    <section key={item.key}>
        <img src={require(`./img/${item.key}.jpg`)} alt=""/>
        <div>{item.name}</div>
    </section>
  );
	return (
        <main className="App-body">
            <div className="App-contain">
                <div className="pic-flow">
                    {listItems}
                </div>
            </div>
        </main>
	);
}
export default AppBody;
/*			<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to relo啊实打实ad.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
*/