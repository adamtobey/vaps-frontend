import React, { Component } from 'react';
import TopBar from './fragments/TopBar';

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="width-fix">
					<TopBar />
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
