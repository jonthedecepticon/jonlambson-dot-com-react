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
                  Company
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pablo">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}
export default Footer;
