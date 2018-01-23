import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import SweetAlert from 'react-bootstrap-sweetalert';

import Button from 'elements/CustomButton/CustomButton.jsx';


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
  render(){
    return (
      <form className="ng-untouched ng-pristine ng-valid">
        <div className="user-profile">
          <h2>Want to work with me?</h2>
          <h4>Drop me a line...</h4>
          <FormGroup>
            <FormControl
              placeholder="Enter name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              placeholder="Enter email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              componentClass="textarea"
              style={{ height: 100 }}
              placeholder="Enter message"
              type="text"
            />
          </FormGroup>
          <Button wd neutral round onClick={this.successAlert.bind(this)}>
            Send Message
          </Button>
          {this.state.alert}
        </div>
      </form>
    );
  }
}

export default ContactPage;
