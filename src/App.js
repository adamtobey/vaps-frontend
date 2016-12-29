import React, { Component } from 'react';
import TopBar from './fragments/TopBar';
import ErrorGutter from './fragments/ErrorGutter';

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="width-fix">
					<TopBar />
					<ErrorGutter />
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
