import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {locationReducer} from './reducers/locationReducer';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  locationReducer,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
