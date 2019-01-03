import {BASE_URL} from '../config';

export const SUBMIT_SESSION_REQUEST = 'SUBMIT_SESSION_REQUEST';
export const submitSessionRequest = () => ({
  type: SUBMIT_SESSION_REQUEST,
});

export const SUBMIT_SESSION_SUCCESS = 'SUBMIT_SESSION_SUCCESS';
export const submitSessionSuccess = (session) => ({
  type: SUBMIT_SESSION_SUCCESS,
  session
});

export const SUBMIT_SESSION_ERROR = 'SUBMIT_SESSION_ERROR';
export const submitSessionError = (err) => ({
  type: SUBMIT_SESSION_ERROR,
  err
});

export const FETCH_SESSIONS_REQUEST = 'FETCH_SESSIONS_REQUEST';
export const fetchSessionRequest = () => ({
  type: FETCH_SESSIONS_REQUEST,
});

export const FETCH_SESSIONS_SUCCESS = 'FETCH_SESSIONS_SUCCESS';
export const fetchSessionSuccess = (sessions) => ({
  type: FETCH_SESSIONS_SUCCESS,
  sessions
});

export const FETCH_SESSIONS_ERROR = 'FETCH_SESSIONS_ERROR';
export const fetchSessionError = (err) => ({
  type: FETCH_SESSIONS_ERROR,
  err
});

export default function submitSession(values) {
  return dispatch => {
    dispatch(submitSessionRequest());
    fetch(`${BASE_URL}/`, {
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
      .then(session => {
        //console.log("the data is", data);
        dispatch(submitSessionSuccess(session))
      }
      )
      .catch(err => dispatch(submitSessionError(err)))
  }
}

export function fetchSessions() {
  console.log("in fetchSessions");
  return dispatch => {
    dispatch(fetchSessionRequest());
    fetch(`${BASE_URL}/`)
      .then(res => {
        if (!res.ok) return Promise.reject(res.statusText);
        return res.json();
      })
      .then(sessions => {
        console.log("the session is", sessions);
        dispatch(fetchSessionSuccess(sessions))
      }
      )
      .catch(err => dispatch(fetchSessionError(err)))
  }
}
