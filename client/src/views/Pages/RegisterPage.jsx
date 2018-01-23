import React, { Component } from 'react';
import {
  Grid, Row, Col,
  Media,
  FormControl, FormGroup
} from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';

import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

class RegisterPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      alert: null,
      show: false
    }
    this.hideAlert = this.hideAlert.bind(this);
    this.successDelete = this.successDelete.bind(this);
  }
  warningWithConfirmMessage(){
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{display: "block",marginTop: "-100px"}}
          title="Oops... Sorry"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
          confirmBtnText="Go Back"
          cancelBtnText="Cancel"
          showCancel
        >
          I currently only have login with Google+ set up!
          </SweetAlert>
        )
      });
    }
    successDelete(){
      this.setState({
        alert: (
          <SweetAlert
            success
            style={{display: "block",marginTop: "-100px"}}
            title="User has been destroyed!"
            onConfirm={() => this.hideAlert()}
            onCancel={() => this.hideAlert()}
            confirmBtnBsStyle="info"
          >
            The user was not created.
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
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="header-text">
              <h2>Sorry...</h2>
              <h4>
                This page isn't hooked up yet.
                <a href="/auth/google">
                  <Button simple google>
                    <i className="fa fa-google-plus-square"></i> Login with Google+
                  </Button>
                </a>
              </h4>
              <hr />
            </div>
          </Col>
          <Col md={4} mdOffset={2}>
            <Media>
              <Media.Left>
                <div className="icon">
                  <i className="pe-7s-user"></i>
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>
                  Free Account
                </Media.Heading>
                Create surveys and mass email them to your friends. Access todo app and calander to store your important events.
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className="icon">
                  <i className="pe-7s-graph1"></i>
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>
                  Awesome Charts
                </Media.Heading>
                A collection of random charts and graphs, because everyone loves charts and graphs.
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className="icon">
                  <i className="pe-7s-map"></i>
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>
                  Awesome Maps
                </Media.Heading>
                A bunch of random maps that have nothing to do with anything!
              </Media.Body>
            </Media>
          </Col>
          <Col md={4}>
            <form>
              <Card
                plain
                content={
                  <div>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Your First Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Your Last Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="email"
                        placeholder="Enter Email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="password"
                        placeholder="Password"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="password"
                        placeholder="Password Confirmation"
                      />
                    </FormGroup>
                  </div>
                }
                ftTextCenter
                legend={
                  <Button wd fill neutral onClick={this.warningWithConfirmMessage.bind(this)}>
                    Create Account
                  </Button>
                }
              />
              {this.state.alert}
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RegisterPage;
