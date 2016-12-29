import React, { Component } from 'react';
import TopBar from './fragments/TopBar';
import ErrorGutter from './fragments/ErrorGutter';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopBar />
				<ErrorGutter />
				{this.props.children}
			</div>
		);
	}
}

export default App;
