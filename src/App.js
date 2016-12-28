import React, { Component } from 'react';
import TopBar from './fragments/TopBar';

class App extends Component {
	render() {
		return (
			<div className="App"></div>
				<TopBar />
				{this.props.children}
			</div>
		);
	}
}

export default App;
