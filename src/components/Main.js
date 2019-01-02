import React from 'react';
import LocationList from './location-list'
//import './App.css';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Locations</h1>
        <LocationList />
      </div>
    )
  }
}

export default Main;
