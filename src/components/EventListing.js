import React from 'react';
import {Link} from 'react-router';
import DateRange from './DateRange.js';
import RichText from './RichText.js';

const EventListing = ({title, href, summary, dateStart, dateEnd, eventType}) => {
	return (
		<div className={"event-listing-" + eventType.split(' ').join('_')}>
			<h3><Link to={href}><RichText text={title} /></Link></h3>
			<DateRange className="event-listing-dates" from={dateStart} to={dateEnd} />
			<div className="event-listing-summary">
				<RichText text={summary} />
			</div>
		</div>
	);
}

const eventListingFromJSON = (json) => {
	let event = JSON.parse(json);
	return (
		<EventListing
			title={event.title}
			key={event.title + event.dateStart.toString()}
			href={event.href}
			summary={event.summary}
			dateStart={new Date(event.dateStart)}
			dateEnd={new Date(event.dateEnd)}
			eventType={event.eventType}
		/>
	)
};

export { eventListingFromJSON };
export default EventListing;
