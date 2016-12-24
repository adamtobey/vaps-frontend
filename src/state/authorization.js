const AUTH_REVOKE = 'AUTH_REVOKE';
export function revoke() {
  return {
    type: 'AUTH_REVOKE'
  };
};

const AUTH_CREATE = 'AUTH_CREATE';
export function create(privileges, paymentCategory) {
  return {
    type: 'AUTH_CREATE',
    privileges: privileges,
    paymentCategory: paymentCategory
  }
};

const defaultState = {
  privileges: [],
  paymentCategory: "base"
};

export function authorizationReducer(state=defaultState, action) {
  switch(action.type) {
    case AUTH_REVOKE: return Object.assign({}, state, {
      privileges: []
    })

    case AUTH_CREATE: return Object.assign({}, state, {
      privileges: action.privileges,
      paymentCategory: action.paymentCategory
    })

    default: return state
  }
};
