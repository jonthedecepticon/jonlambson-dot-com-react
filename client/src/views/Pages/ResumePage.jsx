import React, { Component } from 'react';

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
