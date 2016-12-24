import { combineReducers } from 'redux';
import {authorizationReducer} from './authorization';
import {errorsReducer} from './errors';

const masterReducer = combineReducers({
    authorization: authorizationReducer,
    errors: errorsReducer
});

export default masterReducer;
