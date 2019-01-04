import React from 'react';
import PropTypes from 'prop-types';
import {fetchSessions} from '../actions/index'
import { connect } from 'react-redux';
import './index.css'
import Session from './Session'


export class SessionList extends React.Component {



  componentDidMount() {
    console.log("in componentdidmount");
    this.props.dispatch(fetchSessions());
  }




  render () {
    // if(this.props.sessionsPending){
    //   console.log('sessions pending');
    //   return (<p>Pending</p>)
    // }

    

    let { sessions } = this.props;
    // if (this.state.visibleId) {
    //   sessions = sessions.filter(session => {
    //     return this.state.visibleId === session.id;
    //   })
    // }
    console.log("in SessionList", sessions);
    const session = sessions.map( (session, index) => (
      <Session session={session} key={index} />
    ));

    return (
      <ul className="session-list" >
        {session}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps: the state is: ", state);
  return {
    sessions: state.sessionReducer.sessions
  }
}

export default connect(mapStateToProps)(SessionList)

SessionList.propTypes = {sessions: PropTypes.array};
SessionList.propTypes = {dispatch: PropTypes.func};
SessionList.propTypes = {sessionsPending: PropTypes.bool};
