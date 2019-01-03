import React from 'react';
import SessionList from './SessionList'
//import './App.css';
import Form from './form'

class Main extends React.Component {
  render() {
    return (
      <div>


        <Form />

        <h3>previous sessions</h3>
        <SessionList />
      </div>
    )
  }
}

export default Main;
