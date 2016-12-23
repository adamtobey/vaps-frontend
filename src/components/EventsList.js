import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { eventListingFromJSON } from './EventListing';

const EventsList = ({events, fetchEvents}) => {
	let eventsDisplay = events.map(eventListingFromJSON);
	return (
		<InfiniteScroll
			className="events-list"
			loadMore={fetchEvents}
			threshold={500}
			hasMore={true}
			loader={<span>Loading...</span>}
		>
			{eventsDisplay}
		</InfiniteScroll>
	);
}

export default EventsList;
