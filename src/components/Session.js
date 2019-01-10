import React from 'react';
import './index.css';


export default class Session extends React.Component {
    state = {
      visible: false,
    }

  handleToggleVisible() {
    this.setState(
      {
        visible: !this.state.visible,
      }
    )
  }

  render() {
    /* eslint-disable-next-line */
    const {location, date, game, stakes, cashIn, cashOut, hours, minutes} = this.props.session;

    const result = ( () => {
        return cashOut - cashIn;
    })();

    const hoursPlayed = (() => {
      return Math.round((hours + minutes/60) * 100) / 100;
    })(); //'member IIFEs??

   const hourlyRate = (() => {
     return Math.round(result / hoursPlayed * 100) / 100;
   })();

    return(
      <div>
        <li onClick={this.handleToggleVisible.bind(this)}>

          <div className={result > 0 ? "session positive" : "session negative"}>
          <span className="left">{date} {location} </span>
          
          <span className="right">  {result > 0 ? "+$" + result : "-$" + result * -1}</span>
          </div>


          {this.state.visible && (
            <div className="subItem">
            <ul>
              <li>In: ${cashIn}</li>
              <li>Out: ${cashOut}</li>
              <li>{hoursPlayed} hrs </li>
              <li>${hourlyRate}/hr</li>
            </ul>
            </div>

          )}
        </li>
        <br />
    </div>)
  }
}
