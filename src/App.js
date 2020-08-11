import React from 'react';

import AppHeader from './App-header.js'
import AppBody from './App-body.js'
import './App.css';

class App extends React.Component {
	
	constructor(props) {
		super(props)
		this.docc = () => {
			console.log(this)
		}
		this.state= {
			dox: [1,2]
		}
	}
	render () {
		return (
			<div className="App">
				<AppHeader></AppHeader>
				<AppBody></AppBody>				
			</div>
		);
	}
}



export default App;
