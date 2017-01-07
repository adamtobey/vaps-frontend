import React from 'react';
import {makeEditable, DisplayRichText, EditRichText} from './EditableFactory';

/* All components here require:
  initialData: the data to display initially
	onEdit: callback for edit event -- facilitate edit here
	editable: whether this component should be editable
	wrapper: the component to use to wrap the display and edit components,
		but not the edit button
*/


export const EditableRichText = makeEditable(
  <DisplayRichText></DisplayRichText>,
  <EditRichText></EditRichText>
);
