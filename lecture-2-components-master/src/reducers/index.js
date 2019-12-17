import { combineReducers } from 'redux'
import doggos from './doggos';

const doggosApp = combineReducers({
  doggos,
  // more reducers here
});

export default doggosApp;
