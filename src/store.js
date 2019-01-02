import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from './reducers/locationReducer';

export default createStore( locationReducer, applyMiddleware(thunk))
