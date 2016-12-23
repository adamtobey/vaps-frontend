import React from 'react';

const NavBar = (props) => {
	let navStyle = {
		display: "inline-block",
		listStyle: "none",
		textAlign: "center",
		margin: 0
	};
	let liStyle = {
		display: "inline-block",
		padding: "0px 10px 5px 10px"
	};
	return (
		<ul style={navStyle}> {
			React.Children.map(props.children, (child) => (
				<li style={liStyle}>{child}</li>
			))
		} </ul>
	);
}

export default NavBar
