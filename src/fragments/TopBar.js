import React from 'react';
import {Link, IndexLink} from 'react-router';
import banner from '../assets/VAPS-logo.png';

const TopBar = (props) => {
	return (
		<header className="main-header">
			<span className="account-toolbar">
				<button className="login">Log In</button>
			</span>
			<nav className="main-nav">
				<IndexLink to="/">Home</IndexLink>
				<Link to="/events">Events</Link>
			</nav>
			<div className="brand">
				<img src={banner} alt="VAPS" />
			</div>
		</header>
	);
}

export default TopBar;
