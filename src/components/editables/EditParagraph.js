import React from 'react';
import {Editor, EditorState, ContentState} from 'draft-js';

class EditParagraph extends React.Component {
	constructor(props) {
		super(props);
		let initialState = EditorState.createWithContent(
			ContentState.createFromText(props.text || "")
		);
		this.state = {
			editorState: initialState
		};
		this.onChange = (editorState) => this.setState({editorState});
		this.saveEdit = this.saveEdit.bind(this);
	}

	saveEdit() {
		let editorText = this.state.editorState.getCurrentContent().getPlainText();
		this.props.saveEdit(editorText);
		this.props.toggleEdit();
	}

	render() {
		return (
			<div>
				<Editor editorState={this.state.editorState} onChange={this.onChange} />
				{this.props.togglable ? <button onClick={this.saveEdit}>Save</button> : ''}
			</div>
		);
	}
}

export default EditParagraph;
