import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {sessionReducer} from './reducers/sessionReducer';
import {reducer as formReducer} from 'redux-form'
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './local-storage';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  protectedData: protectedDataReducer,
  sessionReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

//remove this to stop tokens being stored in localStorage
// Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
