import React from 'react';
import {EditableRichText} from './editables/EditableComponents';

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
          <EditableRichText
            initialData={event.title || ""}
            editable={true}
            onEdit={title => editEvent({title})}
            wrapper={<h1></h1>}
          />
          <button className="purchase-event">$37.68</button>
        </header>
        <div className="sub-header-info">
          <span className="date">Jan 18 - Feb 23</span>
          <span className="location">Fun Event Hall</span>
        </div>
        <EditableRichText
          initialData={event.body || ""}
          editable={true}
          onEdit={body => editEvent({body})}
          wrapper={<div className="body"></div>}
        />
      </article>
    );
  }

  return eventDisplay;
}

export default Event;
