import React from 'react';
import EventSupplier from '../containers/EventSupplier.js';
import Event from '../components/Event.js';

const SingleEvent = (props) => {
  return (
    <main className="content">
      <EventSupplier eventId={props.params.eventId}>
        <Event />
      </EventSupplier>
    </main>
  );
}

export default SingleEvent;
