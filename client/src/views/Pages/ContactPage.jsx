import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

import SweetAlert from 'react-bootstrap-sweetalert';

import Button from 'elements/CustomButton/CustomButton.jsx';

import ContactField from '../Forms/ContactMe/ContactField';
import ContactFieldTextarea from '../Forms/ContactMe/ContactFieldTextarea';

import validateEmails from '../../utils/validateEmails';


class ContactPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      alert: null,
      show: false,
    }
    this.hideAlert = this.hideAlert.bind(this);
    this.successAlert.bind(this)
  }
  successAlert(){
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{display: "block",marginTop: "-100px"}}
          title="Message Sent!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          I'll get back to you as soon as possible.
          </SweetAlert>
        )
      });
    }
    hideAlert(){
      this.setState({
        alert: null
      });
    }
    renderFields(){
       return (
        <div>
          <Field type="text" name="fullName" placeholder="Full Name" component={ContactField} />
          <Field type="text" name="email" placeholder="Email Address" component={ContactField} />
          <Field type="text" name="message" placeholder="Message" component={ContactFieldTextarea} />
        </div>
      )
    }
  render(){
    return (
      <form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
        <div className="user-profile">
          <h2>Want to work with me?</h2>
          <h4>Drop me a line...</h4>
          <FormGroup>
            {this.renderFields()}
          </FormGroup>
          <Button wd neutral round type="submit" onClick={this.successAlert.bind(this)}>
            Send Message
          </Button>
          {/* {this.state.alert} */}
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = 'You must provide a name'
  }

  errors.email = validateEmails(values.email || '');

  if (!values.email) {
    errors.email = 'You must provide an email address'
  }
  if (!values.message) {
    errors.message = 'You must provide a message'
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'contactForm',
  destroyOnUnmount: false
})(ContactPage);
