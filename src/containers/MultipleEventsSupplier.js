import React from 'react';

// FIXME: get rid of this mocking of the JSON API
const numToEventMock = (n) => {
	let nowDate = new Date(Date.now());
	let tomorrowDate = new Date();
	tomorrowDate.setDate(nowDate.getUTCDate() + 1);
	return JSON.stringify({
		title: "<i>Mock</i> Event #" + n,
		href: "/events/" + n,
		dateStart: nowDate,
		dateEnd: tomorrowDate,
		summary: "A little <em>fake</em> JSON event for testing purposes.</br> This event is not really part of the VAPS event database, but it will be useful for faking the backend API and doing the styling until I have some real data!",
		eventType: "current"
	});
}

let lastEvent = 0;

class MultipleEventsSupplier extends React.Component {
	constructor(props) {
		super(props);
		lastEvent = 0;
		this.state = {
			events: []
		}
		this.children = this.props.children;
		this.fetchEvents = this.fetchEvents.bind(this);
	}

	fetchEvents() {
		let events = this.state.events;
		for (let i = 1; i <= 20; i++) {
			events.push(numToEventMock(lastEvent++));
		}
		setTimeout(() => this.setState({
			events: events
		}), 500);
	}

	render() {
		let events = this.state.events;
		let fetchEvents = this.fetchEvents;
		let children = React.Children.map(this.children, (child) =>
			React.cloneElement(child, {events, fetchEvents}));
		return (
			<div>
				{children}
			</div>
		);
	}
}

export default MultipleEventsSupplier;
