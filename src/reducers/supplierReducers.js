import multipleEventsReducer from './multipleEventsReducer';
import singleEventReducer from './singleEventReducer';
import eventSupplyReducer from './eventSupplyReducer';

const supplierReducers = {
  multipleEvents: multipleEventsReducer,
  singleEvent: singleEventReducer
}

export default supplierReducers;
