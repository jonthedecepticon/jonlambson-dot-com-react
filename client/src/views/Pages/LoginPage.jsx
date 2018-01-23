import React, { Component } from 'react';
import {
  Grid, Row, Col,
  FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import SweetAlert from 'react-bootstrap-sweetalert';

import Button from 'elements/CustomButton/CustomButton.jsx';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';

class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      cardHidden: true
    }

    this.hideAlert = this.hideAlert.bind(this);
    this.successDelete = this.successDelete.bind(this);
    this.cancelDetele = this.cancelDetele.bind(this);
  }
  componentDidMount(){
    setTimeout(function() { this.setState({cardHidden: false}); }.bind(this), 700);
  }
  warningWithConfirmAndCancelMessage(){
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{display: "block",marginTop: "-100px"}}
          title="Oops... Sorry"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.cancelDetele()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
          confirmBtnText="Ok"
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
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          Your imaginary file has been deleted.
        </SweetAlert>
        )
      });
    }
  cancelDetele(){
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{display: "block",marginTop: "-100px"}}
          title="Cancelled"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          Sorry... I'm still working on other ways to login.
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
          <Col md={4} sm={6} mdOffset={4} smOffset={3}>
            <form>
              <Card
                hidden={this.state.cardHidden}
                textCenter
                title="Login"
                content={
                  <div>
                    <div className="text-center">
                      <a href="/auth/google">
                        <Button fill google>
                          <i className="fa fa-google-plus-square"></i> Login with Google+
                        </Button>
                      </a>
                      <br />
                      <br />
                      <a href="">
                        <Button fill facebook disabled>
                          <i className="fa fa-facebook-square"></i> Login with Facebook
                        </Button>
                      </a>
                      <br />
                      <br />
                      <h4 className="title">- or -</h4>
                    </div>
                    <hr />
                    <FormGroup>
                      <ControlLabel>
                        Email address
                      </ControlLabel>
                      <FormControl
                        placeholder="Enter email"
                        type="email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>
                        Password
                      </ControlLabel>
                      <FormControl
                        placeholder="Password"
                        type="password"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Checkbox
                        number="1"
                        label="Subscribe to newsletter"
                      />
                    </FormGroup>
                  </div>
                }
                legend={
                  <Button bsStyle="info" fill wd onClick={this.warningWithConfirmAndCancelMessage.bind(this)}>
                    Login
                  </Button>
                }

                ftTextCenter
              />
              {this.state.alert}
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginPage;
