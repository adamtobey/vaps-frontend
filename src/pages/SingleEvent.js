import React from 'react';
import EventSupplier from '../containers/EventSupplier.js';
import Event from '../components/Event.js';

const SingleEvent = (props) => {
  return (
    <EventSupplier eventId={props.params.eventId}>
      <Event />
    </EventSupplier>
  );
}

export default SingleEvent;
