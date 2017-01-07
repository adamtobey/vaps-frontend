import React from 'react';
import {mockFetchEvent as fetchEvent, mockUpdateEventWithError as updateEvent} from '../api/event';
import errorsHOC from './globalErrorMessageHandler';
import {loadingMockEvent} from '../models/event';
import {makeUniqueId} from '../state/errors';

class EventSupplier extends React.Component {
  componentWillMount() {
    this.fetchEvent();
  }
  componentWillUnmount() {
    this.props.settleAllErrors();
  }
  fetchEvent() {
    fetchEvent(this.props.eventId)
      .then(this.setEvent.bind(this))
      .catch(this.setError.bind(this));
    this.setState({
      event: loadingMockEvent,
      loading: true
    });
  }
  setError(error) {
    // TODO race condition?
    let id = makeUniqueId();
    this.props.raiseError(id, error);
    setTimeout(() => this.props.settleError(id), 5000);
    this.setState({
      event: {},
      loading: false
    });
  }
  setEvent(event) {
    let lastErr = this.state.fetchErrorId;
    if (lastErr) {
      this.props.settleError(lastErr);
    }
    this.setState({event, loading: false});
  }
  updateEvent(newEvent) {
    this.setState({
      event: loadingMockEvent,
      fallbackEvent: this.state.event
    });
    updateEvent(this.props.eventId, newEvent)
      .then(this.setEvent.bind(this))
      .catch(err => {
        this.setError(err);
        this.setState({
          event: this.state.fallbackEvent,
          fallbackEvent: undefined
        })
      });
  }
  render() {
    let event = this.state.event;
    let updateEvent = this.updateEvent.bind(this);
    let loading = this.state.loading;
    let suppliedChildren = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {event, updateEvent, loading})
    );
    let renderElement = <span></span>;
    if (suppliedChildren.length === 1) {
      renderElement = suppliedChildren[0];
    } else {
      renderElement = (
        <div className="single-event-container">
          {suppliedChildren}
        </div>
      )
    }
    return renderElement;
  }
};

EventSupplier.defaultProps = {
  raiseError: (id, error) => {
    console.log(`Error ${id}: `);
    console.log(error);
  },
  settleError: (id) => console.log(`Error ${id} has been resolved.`),
  settleAllErrors: () => console.log("All errors for this EventSupplier are resolved."),
  eventId: -1
};

export default errorsHOC(EventSupplier);
