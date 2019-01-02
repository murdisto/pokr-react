import * as actions  from '../actions/location'

const initialState = {
  locations: [],
  loading: false,
  error: null,
};

// action list:{
// FETCH_LOCATIONS_REQUEST,
// FETCH_LOCATIONS_SUCCESS,
// FETCH_LOCATIONS_ERROR
// }

export const locationReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_LOCATIONS_REQUEST) {
      return Object.assign({}, state, { loading: true });
    }

  if (action.type === actions.FETCH_LOCATIONS_SUCCESS) {
      return Object.assign({}, state, {
        locations: action.data,
        error: null,
        loading: false
      });
    }

    if (action.type === actions.FETCH_LOCATIONS_ERROR) {
        return Object.assign({}, state, {
          error: action.error,
          loading: true
        });
      }

    return state;

}

export default locationReducer;
