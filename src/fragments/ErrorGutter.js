import React from 'react';
import {getAllErrors} from '../state/errors';
import {connect} from 'react-redux';

const ErrorGutter = ({errors}) => {
  let errorCounter = 0;
  let unknownError = {
    text: "An unknown error occurred."
  };
  errors = errors.map(e => e && e.text ? e : unknownError);
  let className = errors.length > 0 ? 'error' : '';
  return (<div id="error-gutter" className={className}>
    {errors.map(er => (
      <span className="error" key={errorCounter++}>{er.text}</span>
    ))}
  </div>)
}

const mapStateToProps = (state) => ({
  errors: getAllErrors(state)
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorGutter);
