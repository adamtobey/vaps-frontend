import {CACHE_EVENT} from '../actions/eventSupplyActions';

const defaultState = {
  ids: [],
  map: {}
}

const eventSupplyReducer = (state=defaultState, action) => {
  switch (action.type) {
    case CACHE_EVENT: return Object.assign({}, state, {
      events: Object.assign({}, state.events, {
        [action.event.id]: event
      })
    })

    default: return state;
  }
}

export default eventSupplyReducer;
