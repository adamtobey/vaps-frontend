import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import {Provider} from 'react-redux';
import routerHistory from './routerHistory.js';
import App from './App.js';
import './assets/index.css';

import Home from './pages/Home.js';
import Events from './pages/Events.js';
import SingleEvent from './pages/SingleEvent.js';

import store from './reduxStore';

ReactDOM.render((
	<Provider store={store}>
		<Router history={routerHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home} />
				<Route path='events' component={Events} />
				<Route path='events/:eventId' component={SingleEvent} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'));
