import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash';
import {submitSession} from '../actions/index'
import './form.css'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
  </div>
)

class Form extends React.Component {
  onSubmit(values){
    //console.log("the values are ", values);
    this.props.dispatch(submitSession(values))
  }

render(){


  return (
    <form className="sessionForm"
     onSubmit={this.props.handleSubmit(values => {
      this.onSubmit(values);
      //console.log(values);
    })}>

      <div>
        <label htmlFor="location" aria-label="location">Location</label>
          <Field
            name="location"
            component={renderField}
            type="text"
            placeholder="Location"
            validate={[required]}
            warn={required}
          />
          <label htmlFor="date">Date</label>
          <Field
            name="date"
            component={renderField}
            type="date"
            placeholder="date"
            validate={[required]}
            warn={required}
          />

      </div>

      <div>
        <div>
          <label htmlFor="game">Game</label>
          <Field name="game" component="select" validate={[required]} warn={required}>
            <option value="">select game</option>
            <option value="NLHE">NLHE</option>
            <option value="PLO">PLO</option>
            <option value="LHE">LHE</option>
          </Field>
          <label htmlFor="stakes">Stakes</label>
          <Field name="stakes" component="select" validate={[required]} warn={required}>
            <option value="game">select stakes</option>
            <option value="1-2">1-2</option>
            <option value="2-5">2-5</option>
            <option value="5-10">5-10</option>
          </Field>
        </div>
      </div>

      <div>
        <label htmlFor="cashIn">Cash In</label>
        <div>
          <Field
            name="cashIn"
            component={renderField}
            type="number"
            placeholder="cash in"
            validate={[required]}
            warn={required}
          />
          <label htmlFor="cashOut">Cash Out</label>
          <Field
            name="cashOut"
            component={renderField}
            type="number"
            placeholder="cash out"
            validate={[required]}
            warn={required}
          />
        </div>
      </div>

      <div>
        <div>
        <label htmlFor="hours">Hours</label>
          <Field name="hours" component="select" validate={[required]} warn={required}>
          <option value="">select hours</option>

            {_.times(24, i =>
              <option value={i} key={i}>{i}</option>
            )}
          </Field>
          <label htmlFor="minutes">Minuts</label>
          <Field name="minutes" component="select" validate={[required]} warn={required}>
            <option value="">select minutes</option>
            {_.times(60, i =>
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
