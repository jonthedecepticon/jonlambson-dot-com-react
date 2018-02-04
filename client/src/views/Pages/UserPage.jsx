import React, { Component } from 'react';
import {
  FormGroup, ControlLabel, FormControl,
  Grid, Row, Col
} from 'react-bootstrap';
import { connect } from 'react-redux';


import Card from 'components/Card/Card.jsx';
import FormInputs from 'components/FormInputs/FormInputs.jsx';
import UserCard from 'components/Card/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import avatar from "assets/img/default-avatar.png";

class UserPage extends Component {
  getUser(){
    if (this.props.auth) {
      const user = this.props.auth
      return user;
    } else {
      const user = 'Test User'
      return user;
    }
  }
  getUserName(){
    if (this.props.auth) {
      const user_name = this.props.auth.displayName;
      return user_name;
    } else {
      const user_name = 'Test User';
      return user_name;
    }
  }
  getUserEmail(){
    if (this.props.auth) {
      const user_email = this.props.auth.emails[0].value;
      return user_email;
    } else {
      const user_email = 'email@gmail.com';
      return user_email;
    }
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols = {["col-md-5" , "col-md-3" , "col-md-4"]}
                      proprieties = {[
                        {
                          label : "Company (disabled)",
                          type : "text",
                          bsClass : "form-control",
                          placeholder : "Company",
                          defaultValue : "",
                          disabled : true
                        },
                        {
                          label : "Username",
                          type : "text",
                          bsClass : "form-control",
                          placeholder : "Username",
                          defaultValue : ""
                        },
                        {
                          label : "Email address",
                          type : "email",
                          bsClass : "form-control",
                          placeholder : "Email",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols = {["col-md-6" , "col-md-6"]}
                      proprieties = {[
                        {
                          label : "First name",
                          type : "text",
                          bsClass : "form-control",
                          placeholder : "First name",
                          defaultValue : ""
                        },
                        {
                          label : "Last name",
                          type : "text",
                          bsClass : "form-control",
                          placeholder : "Last name",
                          defaultValue : ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols = {["col-md-12"]}
                      proprieties = {[
                        {
                          label : "Address",
                          type : "text",
                          bsClass : "form-control",
                          placeholder : "Home Address",
                          defaultValue : ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols = {["col-md-4","col-md-4","col-md-4"]}
                      proprieties = {[
                        {
                          label : "City",
                          type : "text",
                          bsClass : "form-control",
                          placeholder : "City",
                          defaultValue : ""
                        },
                        {
                          label : "Country",
                          type : "text",
                          bsClass : "form-control",
                          placeholder : "Country",
                          defaultValue : ""
                        },
                        {
                          label : "Postal Code",
                          type : "number",
                          bsClass : "form-control",
                          placeholder : "ZIP Code"
                        }
                      ]}
                    />
                    <div className="row">
                      <div className="col-md-12">
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl rows="5" componentClass="textarea" bsClass="form-control" placeholder="Here can be your description" defaultValue="Apparently, this user prefers to keep an air of mystery about them."/>
                        </FormGroup>
                      </div>
                    </div>
                    <Button
                      bsStyle="info"
                      pullRight
                      fill
                      type="submit"
                    >
                      Update Profile
                    </Button>
                    <div className="clearfix"></div>
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name={this.getUserName()}
                userName={this.getUserEmail()}
                description={
                  <span>
                    "Apparently, <br />
                    this user prefers to keep an air <br />
                    of mystery about them."
                  </span>
                }
                socials={
                  <div>
                    <Button simple><i className="fa fa-facebook-square"></i></Button>
                    <Button simple><i className="fa fa-twitter"></i></Button>
                    <Button simple><i className="fa fa-google-plus-square"></i></Button>
                  </div>
                }
              />

            </Col>
          </Row>
        </Grid>
      </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  export default connect(mapStateToProps)(UserPage);
