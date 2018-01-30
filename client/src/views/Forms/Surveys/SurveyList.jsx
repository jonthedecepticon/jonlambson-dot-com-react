import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../../actions';

import {
    Table,
} from 'react-bootstrap';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (this.props.surveys.length !== 0) {
      return this.props.surveys.reverse().map(survey => {
        return (
          <tr key={survey._id}>
            <td>
              {survey.title}
            </td>
            <td>
              {survey.body}
            </td>
            <td>
              {survey.yes}
            </td>
            <td>
              {survey.no}
            </td>
            <td>
              {new Date(survey.dateSent).toLocaleDateString()}
            </td>
            <td>
              <a className="btn btn-simple btn-danger btn-icon remove"><i className="fa fa-times"></i></a>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td>No Surveys have been sent out...</td>
        </tr>
      )
    }

  }

  render() {
    return (
      <div>
        <h4 style={{ marginTop: "-10px" }}>Survey List</h4>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Yes</th>
              <th>No</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSurveys()}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
