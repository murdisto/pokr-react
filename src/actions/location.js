import {API_BASE_URL} from '../config';


export const FETCH_LOCATIONS_REQUEST = 'FETCH_LOCATIONS_REQUEST';
export const fetchLocationsRequest = () => ({
  type: FETCH_LOCATIONS_REQUEST,
});

export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const fetchLocationsSuccess = (data) => ({
  type: FETCH_LOCATIONS_SUCCESS,
  data
});

export const FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR';
export const fetchLocationsError = (err) => ({
  type: FETCH_LOCATIONS_ERROR,
  err
});

export default function fetchLocations() {
  return dispatch => {
    dispatch(fetchLocationsRequest());
    fetch(`${API_BASE_URL}/locations`)
      .then(res => {
        if (!res.ok) return Promise.reject(res.statusText);
        return res.json();
      })
      .then(data => {
        //console.log("the data is", data);
        dispatch(fetchLocationsSuccess(data))
      }
      )
      .catch(err => dispatch(fetchLocationsError(err)))
  }
}
