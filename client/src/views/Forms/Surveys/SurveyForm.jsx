import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    Grid, Row, Col, FormGroup
} from 'react-bootstrap';
import SurveyField from './SurveyField';

import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

import validateEmails from '../../../utils/validateEmails';

class SurveyForm extends Component {
  renderFields(){
     return (
      <div>
        <Field type="text" name="title" label="Survey Title" component={SurveyField} />
        <Field type="text" name="subject" label="Subject Line" component={SurveyField} />
        <Field type="text" name="recipients" label="Recipient List" component={SurveyField} />
        <Field type="text" name="body" label="Email Body" component={SurveyField} />
      </div>
    )
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                <Card
                  title="Create Survey"
                  content={
                    <div>
                      <FormGroup>
                        {this.renderFields()}
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

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must provide a title'
  }
  if (!values.subject) {
    errors.subject = 'You must provide a subject'
  }
  if (!values.body) {
    errors.body = 'You must provide a body'
  }

  errors.recipients = validateEmails(values.recipients || '');

  if (!values.recipients) {
    errors.recipients = 'You must provide at least one email address'
  }


  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
