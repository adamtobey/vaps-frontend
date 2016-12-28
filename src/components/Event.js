import React from 'react';
import EditableTitle from './editables/EditableTitle';
//import EditableDateRange from './editables/EditableDateRange';
import EditableBody from './editables/EditableBody';

const Event = ({event, updateEvent, loading}) => {
      /*<EditableDateRange className="event-date" from={event.startDate} to={event.endDate} />
      */
  const editEvent = (objectDiff) => {
    let newEvent = Object.assign({}, event, objectDiff);
    updateEvent(newEvent);
  }
  let eventDisplay;
  if (loading) {
    eventDisplay = (
      <div>Loading...</div>
    );
  } else {
    eventDisplay = (
      <article className="single-event">
        <header>
          <EditableTitle editable={true} text={event.title}
            onEdit={(title) => editEvent({title})} />
          <button className="purchase-event">$37.68</button>
        </header>
        <div className="sub-header-info">
          <span className="date">Jan 18 - Feb 23</span>
          <span className="location">Fun Event Hall</span>
        </div>
        <EditableBody className="body" editable={true} text={event.body}
          onEdit={(body) => editEvent({body})} />
      </article>
    );
  }

  return eventDisplay;
}

export default Event;
