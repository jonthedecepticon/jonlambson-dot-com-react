import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer className={"footer" + (this.props.transparent !== undefined ? " footer-transparent":"")}>
              <div className={"container" + (this.props.fluid !== undefined ? "-fluid":"")}>
                <nav className="pull-left">
                  <ul>
                    <li>
                      <a href="#pablo">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#pablo">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#pablo">
                        Portfolio
                      </a>
                    </li>
                  </ul>
                </nav>
                <p className="copyright pull-right">
                  <i className="fa fa-code"></i>Web Development by Jon <strong>Lambson</strong> &copy; {1900 + (new Date()).getYear()} All rights reserved.
                </p>
              </div>
            </footer>
        );
    }
}
export default Footer;
