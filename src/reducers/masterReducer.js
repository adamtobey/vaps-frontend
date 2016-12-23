import { combineReducers } from 'redux';
import supplierReducers from './supplierReducers';
import supplyReducers from './supplyReducers';
import authorizationReducer from './authorizationReducer';

const masterReducer = combineReducers({
    authorization: authorizationReducer,
    supplies: combineReducers(supplyReducers),
    suppliers: combineReducers(supplierReducers)
});

export default masterReducer;
