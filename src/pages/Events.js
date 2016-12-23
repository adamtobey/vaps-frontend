import React from 'react';
import MultipleEventsSupplier from '../containers/MultipleEventsSupplier.js';
import EventsList from '../components/EventsList.js';

const Events = () => {
	return (
		<main>
			<MultipleEventsSupplier>
				<EventsList />
			</MultipleEventsSupplier>
		</main>
	);
}

export default Events;
