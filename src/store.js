import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {sessionReducer} from './reducers/sessionReducer';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  sessionReducer,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
