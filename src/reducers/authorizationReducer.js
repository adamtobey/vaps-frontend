import {AUTH_REVOKE, AUTH_CREATE} from '../actions/authorization';

const defaultState = {
  privileges: []
};

const authorizationReducer = (state=defaultState, action) => {
  switch(action.type) {
    case AUTH_REVOKE: return Object.assign({}, state, {
      privileges: []
    })

    case AUTH_CREATE: return Object.assign({}, state, {
      privileges: action.privileges
    })

    default: return state
  }
};

export default authorizationReducer;
