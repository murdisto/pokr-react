import {API_BASE_URL} from '../config';

export const SUBMIT_SESSION_REQUEST = 'SUBMIT_SESSION_REQUEST';
export const submitSessionRequest = () => ({
  type: SUBMIT_SESSION_REQUEST,
});

export const SUBMIT_SESSION_SUCCESS = 'SUBMIT_SESSION_SUCCESS';
export const submitSessionSuccess = (sessions) => ({
  type: SUBMIT_SESSION_SUCCESS,
  sessions
});

export const SUBMIT_SESSION_ERROR = 'SUBMIT_SESSION_ERROR';
export const submitSessionError = (err) => ({
  type: SUBMIT_SESSION_ERROR,
  err
});

export default function submitSession(values) {
  return dispatch => {
    dispatch(submitSessionRequest());
    fetch(`${API_BASE_URL}/`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
      .then(res => {
        if (!res.ok) return Promise.reject(res.statusText);
        return res.json();
      })
      .then(sessions => {
        //console.log("the data is", data);
        dispatch(submitSessionSuccess(sessions))
      }
      )
      .catch(err => dispatch(submitSessionError(err)))
  }
}
