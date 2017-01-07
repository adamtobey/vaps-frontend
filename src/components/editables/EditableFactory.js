import React from 'react';
import RichText from '../RichText';
import Editable, {
  EditableComponentPropDefaults as defProps,
  EditableComponentPropTypes as propTypes
} from './Editable';
import {Editor, EditorState, ContentState} from 'draft-js';

export function makeEditable(displayComponent, editComponent) {
  return (props) => (
    <Editable
      {...props}
      displayComponent={displayComponent}
      editComponent={editComponent}
    />
  )
}

const DisplayWrapper = ({triggerToggleEdit}) => (
  <div className="edit-block">
    {this.props.children}
    <button onClick={triggerToggleEdit} className="edit">Edit</button>
  </div>
)

const EditWrapper = ({triggerSaveEdit, triggerRevertEdit}) => (
  <div className="edit-block">
    {this.props.children}
    <button onClick={triggerSaveEdit} className="save">Save</button>
    <button onClick={triggerRevertEdit} className="revert">Revert</button>
  </div>
)

// Display Components: {initialData, wrapper, togglable, toggleEdit, saveEdit}

export const DisplayRichText = ({initialData, wrapper, togglable, toggleEdit}) => {
  if (togglable) {
    wrapper = <DisplayWrapper triggerToggleEdit={toggleEdit} />;
  }
  return <RichText text={initialData} />;
}
DisplayRichText.propTypes = propTypes;
DisplayRichText.defaultProps = defProps;

// Edit Components: {initialData, wrapper, togglable, toggleEdit, saveEdit}

export class EditRichText extends React.Component {
	constructor(props) {
		super(props);
		let initialState = EditorState.createWithContent(
			ContentState.createFromText(props.initialData)
		);
		this.state = {
			editorState: initialState
		};
		this.onChange = (editorState) => this.setState({editorState});
		this.saveEdit = this.saveEdit.bind(this);
	}

  revertEdit() {
    this.props.toggleEdit();
  }

	saveEdit() {
		let editorText = this.state.editorState.getCurrentContent().getPlainText();
		this.props.saveEdit(editorText);
		this.props.toggleEdit();
	}

	render() {
		return (
      <EditWrapper
        triggerSaveEdit={this.saveEdit.bind(this)}
        triggerRevertEdit={this.revertEdit.bind(this)}
      >
				<Editor editorState={this.state.editorState} onChange={this.onChange} />
      </EditWrapper>

		);
	}
}
EditRichText.propTypes = propTypes;
EditRichText.defaultProps = defProps;
