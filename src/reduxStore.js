import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import masterReducer from './reducers/masterReducer';

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(
  masterReducer,
  middleware
);

export default store;
