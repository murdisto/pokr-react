import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash';
import submitSession from '../actions/index'

class Form extends React.Component {
  onSubmit(values){
    this.props.dispatch(submitSession(values))
  }

render(){
  return (
    <form onSubmit={this.props.handleSubmit(values => {
      this.onSubmit(values);
      console.log(values);
    })}>
      <div>
        <label></label>
        <div>
          <Field
            name="location"
            component="input"
            type="text"
            placeholder="Location"
          />
          <Field
            name="date"
            component="input"
            type="date"
            placeholder="date"
          />
        </div>
      </div>

      <div>
        <label></label>
        <div>
          <Field name="game" component="select">
            <option value="">select game</option>
            <option value="NLHE">NLHE</option>
            <option value="PLO">PLO</option>
            <option value="LHE">LHE</option>
          </Field>
          <Field name="stakes" component="select">
            <option value="game">select stakes</option>
            <option value="1-2">1-2</option>
            <option value="2-5">2-5</option>
            <option value="5-10">5-10</option>
          </Field>
        </div>
      </div>

      <div>
        <label></label>
        <div>
          <Field
            name="cashIn"
            component="input"
            type="number"
            placeholder="cash in"
          />
          <Field
            name="cashOut"
            component="input"
            type="number"
            placeholder="cash out"
          />
        </div>
      </div>

      <div>
        <label></label>
        <div>
          <Field name="hours" component="select">
          <option value="">select hours</option>

            {_.times(25, i =>
              <option value={i} key={i}>{i}</option>
            )}
          </Field>
          <Field name="minutes" component="select">
            <option value="">select minutes</option>
            {_.times(61, i =>
              <option value={i} key={i}>{i}</option>
            )}

          </Field>
        </div>
      </div>


      <div>
        <button type="submit" disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </div>
    </form>
  )}
}



export default reduxForm({
  form: 'session' // a unique identifier for this form
})(Form)

Form.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  dispatch: PropTypes.func,
};
