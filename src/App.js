import React from 'react';

import AppHeader from './major/app-header.js'
import AppBody from './major/app-body.js'

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
