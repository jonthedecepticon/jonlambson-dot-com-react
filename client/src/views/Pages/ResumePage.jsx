import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

import Button from 'elements/CustomButton/CustomButton.jsx';

import resume from 'assets/img/jlresume-compressor.jpg';

class ResumePage extends Component {
  render() {
    return (
      <form className="ng-untouched ng-pristine ng-valid">
        <div className="resume-page-container">
          <img src={resume} alt="resume" style={{width: "100%",marginTop: "-50px"}} />
        </div>
      </form>
    );
  }
}

export default ResumePage;
