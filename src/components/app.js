import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';



import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';

export class App extends React.Component {

  render() {

    return (
      <div className="app">
        
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={RegistrationPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
