import * as actions  from '../actions/index'

const initialState = {
  sessions: [],
  loading: false,
  error: null,
}


export const sessionReducer = (state=initialState, action) => {
  if (action.type === actions.SUBMIT_SESSION_REQUEST) {
      return Object.assign({}, state, { loading: true });
    }

  if (action.type === actions.SUBMIT_SESSION_SUCCESS) {
      return Object.assign({}, state, {
        locations: action.data,
        error: null,
        loading: false
      });
    }

    if (action.type === actions.SUBMIT_SESSION_ERROR) {
        return Object.assign({}, state, {
          error: action.error,
          loading: true
        });
      }

    return state;

}

export default sessionReducer;
