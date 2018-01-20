import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
  render(){
    return (
      <footer className={"footer" + (this.props.transparent !== undefined ? " footer-transparent":"")}>
        <div className={"container" + (this.props.fluid !== undefined ? "-fluid":"")}>
          <nav className="pull-left">
            <ul>
              <li>
                <NavLink to={'/pages/home-page'}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/pages/portfolio-page'}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to={'/pages/contact-page'}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to={'/pages/resume-page'}>
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            <i className="fa fa-code"></i>Web Development by <a href="https://www.linkedin.com/in/jon-lambson/" rel="noreferrer" target="_blank">Jon <strong>Lambson</strong></a> &copy; {1900 + (new Date()).getYear()} All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
