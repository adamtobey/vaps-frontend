import React from 'react';
import EditableTitle from './editables/EditableTitle';
//import EditableDateRange from './editables/EditableDateRange';
import EditableBody from './editables/EditableBody';

const Event = ({event, saveEdit, isLoading}) => {
      /*<EditableDateRange className="event-date" from={event.startDate} to={event.endDate} />
      */
  const editEvent = (objectDiff) => {
    let newEvent = Object.assign({}, event, objectDiff);
    saveEdit(newEvent);
  }

  let eventDisplay;
  if (isLoading) {
    eventDisplay = (
      <div>Loading...</div>
    );
  } else {
    eventDisplay = (
      <article className="single-event">
        <EditableTitle className="event-title" editable={true} text={event.title}
          onEdit={(title) => editEvent({title})} />
        <EditableBody className="event-body" editable={true} text={event.body}
          onEdit={(body) => editEvent({body})} />
      </article>
    );
  }

  return eventDisplay;
}

export default Event;
