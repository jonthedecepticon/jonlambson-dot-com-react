import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    Grid, Row, Col,
    Form, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';
import SurveyField from './SurveyField';

import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

class SurveyForm extends Component {
  renderFields(field){

    return (
      <div className="">
        <Field type="text" name="title" component={SurveyField} />
      </div>
    )
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
                <Card
                  title="Create Survey"
                  content={
                    <div>
                      <FormGroup>
                        <ControlLabel>Survey Title: <span className="star">*</span></ControlLabel>
                        {this.renderFields('title')}
                      </FormGroup>
                      <div className="category">
                        <span className="star">*</span> Required fields
                      </div>
                      <Button bsStyle="info" type="submit" fill pullRight>
                        Create
                      </Button><br/><br/>
                    </div>
                  }
                />
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
