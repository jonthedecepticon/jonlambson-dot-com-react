import React from 'react';
import {
    Grid, Row, Col,
    Form, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';

export default ({ input, label, meta: { error, touched} }) => {
  return (
    <div>
      <ControlLabel>{label} <span className="star">*</span></ControlLabel>
      <input className="form-control" {...input} />
      <div className="text-danger">
        {touched && error}
      </div>
    </div>
  )
}
