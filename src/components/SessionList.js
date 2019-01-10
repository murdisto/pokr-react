import React from 'react';
import PropTypes from 'prop-types';
import {fetchSessions} from '../actions/index'
import { connect } from 'react-redux';
import './SessionList.css'
import Session from './Session'


export class SessionList extends React.Component {
  componentDidMount() {
    //console.log("in componentdidmount");
    this.props.dispatch(fetchSessions());
  }

  render () {
    let { sessions } = this.props;
    //console.log("in SessionList", sessions);
    const session = sessions.map( (session, index) => (
      <Session session={session} key={index} />
    ));

    return (
      <div>
        <h3>previous sessions</h3>
        <ul className="session-list" >
          {session}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  //console.log("mapStateToProps: the state is: ", state);
  return {
    sessions: state.sessionReducer.sessions
  }
}

export default connect(mapStateToProps)(SessionList)

SessionList.propTypes = {sessions: PropTypes.array};
SessionList.propTypes = {dispatch: PropTypes.func};
SessionList.propTypes = {sessionsPending: PropTypes.bool};
