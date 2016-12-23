import updateSupply from './updateSupply';
import {WAIT_FOR_EVENTS, RECEIVE_EVENTS, RECEIVE_EVENTS_ERROR, PURGE_EVENTS} from '../actions/multipleEventsSupply';

const defaultState = {};

const emptySupply = {
  isLoading: false,
  events: []
};

const multipleEventsReducer = (state={}, action) => {
  switch (action.type) {
    case WAIT_FOR_EVENTS: return updateSupply(state, action.supplyKey, {
      isLoading: false
    }, emptySupply)

    case RECEIVE_EVENTS: return updateSupply(state, action.supplyKey, {
      isLoading: false,
      events: [...state[action.supplyKey].events, action.event]
    }, emptySupply)

    case RECEIVE_EVENTS_ERROR: return updateSupply(state, action.supplyKey, {
      isLoading: false,
      fetchError: action.error
    })

    case PURGE_EVENTS: return Object.assign({}, state, {
      [action.supplyKey]: emptySupply
    })

    default: return state
  }
}

export default multipleEventsReducer;
