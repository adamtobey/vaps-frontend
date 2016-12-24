import {createStore} from 'redux';
import masterReducer from './masterReducer';

const store = createStore(masterReducer);

export default store;
