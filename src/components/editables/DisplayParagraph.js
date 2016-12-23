import React from 'react';

const DisplayParagraph = ({text, togglable, toggleEdit, style}) => {
	return (
		<div>
			<p style={style || {}}>
				{text || ""}
			</p>
			{togglable ? <button onClick={toggleEdit}>Edit</button> : ''}
		</div>
	);
}

export default DisplayParagraph;
