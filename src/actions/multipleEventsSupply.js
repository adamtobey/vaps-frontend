export const WAIT_FOR_EVENTS = 'WAIT_FOR_EVENTS';
export function waitForEvents(supplyKey) {
  return {
    type: WAIT_FOR_EVENTS,
    supplyKey: supplyKey
  }
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export function receiveEvents(supplyKey, events) {
  return {
    type: RECEIVE_EVENTS,
    supplyKey: supplyKey,
    event: events
  }
}

export const RECEIVE_EVENTS_ERROR = 'RECEIVE_EVENTS_ERROR';
export function receiveEventsError(supplyKey, error) {
  return {
    type: RECEIVE_EVENTS_ERROR,
    supplyKey: supplyKey,
    error: error
  }
}

export const PURGE_EVENTS = 'PURGE_EVENTS';
export function purgeEvents(supplyKey) {
  return {
    type: PURGE_EVENTS,
    supplyKey: supplyKey
  }
}
