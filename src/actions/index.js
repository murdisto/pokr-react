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

export const submitSession = (values) => (dispatch, getState) => {
  console.log("this is inside submitSession");
  const authToken = getState().auth.authToken;
  //console.log("the authToken is ", authToken);

    console.log("something is in submitSession");
    dispatch(submitSessionRequest());
    fetch(`${BASE_URL}/sessions`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
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

export const fetchSessions = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  //
  console.log("in fetchSessions");
  console.log("the authToken is ", authToken);

    dispatch(fetchSessionRequest());
    fetch(`${BASE_URL}/sessions`, {
      headers: {Authorization: `Bearer ${authToken}`}
    })
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

export default submitSession;
