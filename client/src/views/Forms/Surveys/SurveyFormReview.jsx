import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  return (
    <div className="main-content">
      <h5>Please confirm your entries</h5>
      <form>
        <div>
          <label>Survey Title:</label>
          <div>{formValues.title}</div>
        </div>
        <div>
          <label>Survey Subject:</label>
          <div>{formValues.subject}</div>
        </div>
        <div>
          <label>Recipient List:</label>
          <div>{formValues.emails}</div>
        </div>
        <div>
          <label>Survey Message:</label>
          <div>{formValues.body}</div>
        </div>
      </form>
      <button className="btn btn-warning" onClick={onCancel}>
        Edit
      </button>
      <button className="btn btn-submit" style={{marginLeft: "10px"}} onClick={() => submitSurvey(formValues)}>
        Send Survey
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
