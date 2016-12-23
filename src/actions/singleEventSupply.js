import {mockFetchEvent as apiFetchEvent} from '../api/event';
import {cacheEvent} from './eventSupplyActions';

export const INITIALIZE_EVENT_SUPPLIER_STORE = 'INITIALIZE_EVENT_SUPPLIER_STORE';
export function initializeEventSupplierStore(supplyKey) {
  return {
    type: INITIALIZE_EVENT_SUPPLIER_STORE,
    supplyKey: supplyKey
  }
}

export const WAIT_FOR_EVENT = 'WAIT_FOR_EVENT';
export function waitForEvent(supplyKey) {
  return {
    type: WAIT_FOR_EVENT,
    supplyKey: supplyKey
  }
}

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export function receiveEvent(supplyKey, eventRef) {
  return {
    type: RECEIVE_EVENT,
    supplyKey: supplyKey,
    eventRef: eventRef
  }
}

export const RECEIVE_EVENT_ERROR = 'RECEIVE_EVENT_ERROR';
export function receiveEventError(supplyKey, error) {
  return {
    type: RECEIVE_EVENT_ERROR,
    supplyKey: supplyKey,
    error: error
  }
}

export const PURGE_EVENT = 'PURGE_EVENT';
export function purgeEvent(supplyKey) {
  return {
    type: PURGE_EVENT,
    supplyKey: supplyKey
  }
}

export function fetchEvent(supplyKey, id) {
  return dispatch => {
    dispatch(waitForEvent(supplyKey));
    apiFetchEvent(id)
      .then(e => dispatch(cacheEvent(e)))
      .then(() => dispatch(receiveEvent(supplyKey, id)))
      .catch(e => dispatch(receiveEventError(supplyKey, e)));
  };
}
