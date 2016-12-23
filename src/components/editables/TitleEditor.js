import React from 'react';
import {Editor, EditorState, ContentState} from 'draft-js';

class TitleEditor extends React.Component {
  constructor(props) {
    super(props);
    let title = props.text;
    let editorState = EditorState.createWithContent(
      ContentState.createFromText(title || "")
    )
    this.state = {
      editorState: editorState
    }
		this.onChange = (editorState) => this.setState({editorState});
  }

  saveEdit() {
		let editorText = this.state.editorState.getCurrentContent().getPlainText();
    this.props.saveEdit(editorText);
    this.props.toggleEdit();
  }

  discardEdit() {
    this.props.toggleEdit();
  }

  render() {
    return (
      <h1 className={(this.props.className || "") + " editor"}>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
				{this.props.togglable ? <button onClick={this.saveEdit.bind(this)}>Save</button> : ''}
				{this.props.togglable ? <button onClick={this.discardEdit.bind(this)}>Discard</button> : ''}
      </h1>
    )
  }
}

export default TitleEditor;
