import React from 'react';
import TitleEditor from './TitleEditor';
import TitleDisplay from './TitleDisplay';
import EditableTextContainer from './EditableTextContainer';

const EditableTitle = ({editable, onEdit, text, className}) => {
  return (
    <EditableTextContainer
      text={text}
      onSave={onEdit}
      editComponent={<TitleEditor className={className} />}
      displayComponent={<TitleDisplay className={className} />}
      editable={editable}
    />
  );
}

export default EditableTitle;
