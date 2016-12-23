import React, { Component } from 'react';

/* Props:
		text: the initial text
		onSave(string): callback for when edited text is saved
		editComponent: the component that displays an editing interface
		displayComponent: the component that displays the string
		editable: whether this component should be editable
		NOTE: both components must accept the following props:
			text: the text to display
			toggleEdit: function to trigger an editing state toggle
			saveEdit: function to save the edit
*/
class EditableTextContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			edit: false
		};
	}

	onSave(text) {
		if (!this.props.onSave) return;
		this.props.onSave(text);
	}

	render() {
		let textComponent = this.state.edit
								? this.props.editComponent
								: this.props.displayComponent;
		let toggleEdit = () => {
			this.setState({edit: this.props.editable && !this.state.edit});
		};
		toggleEdit = toggleEdit.bind(this);
		textComponent = React.cloneElement(textComponent, {
			text: this.props.text,
			togglable: this.props.editable,
			toggleEdit: toggleEdit,
			saveEdit: this.onSave.bind(this)
		});
		return (
			<div>
				{textComponent}
			</div>
		);
	}

}

export default EditableTextContainer;
