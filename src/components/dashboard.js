import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import SessionList from './SessionList'
import HeaderBar from './header-bar';
import Form from './form'
import './dashboard.css';



export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <div className="dashboard">

           {/* <div className="dashboard-username">
                      Username: {this.props.username}
          </div> */}
          <Form />
          <SessionList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
