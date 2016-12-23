import updateSupply from './updateSupply';
import {INITIALIZE_EVENT_SUPPLIER_STORE, WAIT_FOR_EVENT, RECEIVE_EVENT, RECEIVE_EVENT_ERROR, PURGE_EVENT} from '../actions/singleEventSupply';

const emptySupply = {
  isLoading: false,
  fetchError: false,
  event: {}
}

const singleEventReducer = (state={}, action) => {
  console.log(action);
  switch (action.type) {
    case INITIALIZE_EVENT_SUPPLIER_STORE: return updateSupply(state, action.supplyKey, {}, emptySupply);

    case WAIT_FOR_EVENT: return updateSupply(state, action.supplyKey, {
      isLoading: false
    }, emptySupply)

    case RECEIVE_EVENT: return updateSupply(state, action.supplyKey, {
      isLoading: false,
      event: action.event,
      fetchError: false
    }, emptySupply)

    case RECEIVE_EVENT_ERROR: return updateSupply(state, action.supplyKey, {
      isLoading: false,
      fetchError: action.error
    }, emptySupply)

    case PURGE_EVENT: return Object.assign({}, state, {
      [action.supplyKey]: emptySupply
    })

    default: return state
  }
}

export default singleEventReducer;
