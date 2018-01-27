import React from 'react';
import {
    Grid, Row, Col,
    Form, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';

export default ({ input, placeholder, meta: { error, touched} }) => {
  return (
    <div className="form-group">
      <input className="form-control" placeholder={placeholder} {...input} />
      <div className="text-left text-danger">
        {touched && error}
      </div>
    </div>
  )
}
