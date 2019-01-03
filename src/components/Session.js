import React from 'react';

export default class Session extends React.Component {
    state = {
      visible: false,
    }


  handleToggleVisible(id) {
    console.log(id);
    this.setState(
      {
        visible: !this.state.visible,
      }
    )

  }

  render() {
    const result = (cashIn, cashOut) => {
        return cashOut - cashIn;
    }

    const {location, date, cashIn, cashOut, hours, minutes} = this.props.session;
    return(
    <li onClick={this.handleToggleVisible.bind(this)}>
     <div> {date} {location} ${result(cashIn, cashOut)}</div>
      {this.state.visible && (
        <div> ${cashIn} ${cashOut} {hours} hours {minutes} minutes </div>
      )}
    </li>)
  }
}
