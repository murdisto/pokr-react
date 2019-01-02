import {FETCH_LOCATIONS_REQUEST, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_ERROR} from '../actions/location'

const initialState = {
  locations: [],
  loading: false,
  error: null,
};

export const locationReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_REQUEST :
    return Object.assign({}, state, { loading: true })

    case FETCH_LOCATIONS_SUCCESS :
    return Object.assign({}, state, {
      loading: false,
      locations: action.data,
      error: null
    })

    case FETCH_LOCATIONS_ERROR :
    return Object.assign({}, state, {
      loading: true,
      error: action.error
    })

    default: return state
  }
}

export default locationReducer;
