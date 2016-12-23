import React from 'react';
import {Link, IndexLink} from 'react-router';
import banner from '../assets/VAPS-logo.png';

const TopBar = (props) => {
	let containerStyle = {
		backgroundColor: "#649570"
	};
	let imgStyle = {
		maxWidth: "100%",
		maxHeight: 66
	};
	return (
		<header style={containerStyle}>
			<img src={banner} alt="VAPS" style={imgStyle}/>
			<nav className="main-nav">
				<IndexLink to="/">Home</IndexLink>
				<Link to="/events">Events</Link>
			</nav>
		</header>
	);
}

export default TopBar;
