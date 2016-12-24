const ADD_ERROR = 'ADD_ERROR';
export function raiseErrorAction(id, error, owner=null) {
  return {
    type: ADD_ERROR,
    error,
    id,
    owner
  }
};

const REMOVE_ERROR = 'REMOVE_ERROR';
export function settleErrorAction(id) {
  return {
    type: REMOVE_ERROR,
    id
  }
}

const SETTLE_ERRORS_FOR = 'SETTLE_ERRORS_FOR';
export function settleAllErrorsForAction(owner) {
  return {
    type: SETTLE_ERRORS_FOR,
    owner
  }
}

export function errorsReducer(state={}, action) {
  switch (action.type) {
    case ADD_ERROR: Object.assign({}, state, {
      [action.id]: {
        error: action.error,
        owner: action.owner
      }
    })

    case REMOVE_ERROR: Object.assign({}, state, {
      [action.id]: undefined
    })

    case SETTLE_ERRORS_FOR: Object.keys(state).reduce(
      key => state[key].owner === action.owner ? undefined : state[key],
      {}
    )

    default: return state
  }
}

export const makeUniqueId = (() => {
  let globalCount = 0;
  return () => globalCount++;
})();
