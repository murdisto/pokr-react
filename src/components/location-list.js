import React from 'react';
import PropTypes from 'prop-types';
import fetchLocations from '../actions/location'
import { connect } from 'react-redux';



export class LocationList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchLocations());
  }

  render () {
    const { locations } = this.props;

    const location = locations.map( (location, index) => (
     <li key={index}>
       {location}
     </li>));

    return (
      <ul className="location-list">
        {location}
      </ul>
    )
  }
}

const mapStatetoProps = state => {
  return {
    locations: state.locationReducer.locations
  }
}

export default connect(mapStatetoProps)(LocationList)

LocationList.propTypes = {locations: PropTypes.array};
LocationList.propTypes = {dispatch: PropTypes.func};
