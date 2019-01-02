import React from 'react';
import LocationList from './location-list'
//import './App.css';
import Form from './form'

class Main extends React.Component {
  render() {
    return (
      <div>


        <Form />

        <h1>Locations</h1>
        <LocationList />
      </div>
    )
  }
}

export default Main;
