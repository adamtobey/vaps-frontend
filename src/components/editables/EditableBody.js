import React from 'react';
import EditableTextContainer from './EditableTextContainer';
import EditParagraph from './EditParagraph';
import DisplayParagraph from './DisplayParagraph';

const EditableBody = ({editable, onEdit, text, className}) => {
  return (
    <EditableTextContainer
      text={text}
      onSave={onEdit}
      editComponent={<EditParagraph className={className} />}
      displayComponent={<DisplayParagraph className={className} />}
      editable={editable}
    />
  );
}

export default EditableBody;
