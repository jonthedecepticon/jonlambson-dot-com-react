import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class PagesHeader extends Component{
  constructor(props){
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      width: window.innerWidth
    }
  }
  // function that sets the class to active of the active page
  activeRoute(routeName) {
    return window.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }
  // function that shows/hides sidebar on responsive
  mobileSidebarToggle(e){
    document.documentElement.classList.toggle('nav-open');
  }
  updateWidth(){
    this.setState({width: window.innerWidth});
  }
  componentDidMount(){
    window.addEventListener("resize", this.updateWidth.bind(this));
  }
  renderContent(){
    switch (this.props.auth) {
      case null:
        return (
          <ul className="nav navbar-nav navbar-right">
          </ul>
        )
      break;
      case false:
        return (
          <ul className="nav navbar-nav navbar-right">
            <li className={this.activeRoute('login-page')}>
              <NavLink to={'/pages/login-page'} className="nav-link">
                <i className="fa fa-drivers-license-o"></i>
                <p>Login</p>
              </NavLink>
            </li>
            <li className={this.activeRoute('register-page')}>
              <NavLink to={'/pages/register-page'} className="nav-link">
                <i className="fa fa-user-circle-o"></i>
                <p>Register</p>
              </NavLink>
            </li>
          </ul>
        )
      break;
      default:
        return (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to={'/dashboard'} className="nav-link">
                <i className="fa fa-th-list"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <a href="/api/logout" className="nav-link">
                <i className="fa fa-times-circle-o"></i>
                <p>Log Out</p>
              </a>
            </li>
          </ul>
        )
      }
    }
      render(){
        return (
          <Navbar collapseOnSelect inverse className="navbar-primary navbar-transparent navbar-absolute">
            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to={'/pages/home-page'} className="nav-link">
                  { this.state.width > 429 ? "JL":"JL" }
                </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle onClick={this.mobileSidebarToggle} />
            </Navbar.Header>
            <Navbar.Collapse>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to={'/pages/portfolio-page'} className="nav-link">
                    <i className="fa fa-suitcase"></i>
                    <p>Portfolio</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/pages/contact-page'} className="nav-link">
                    <i className="fa fa-envelope-o"></i>
                    <p>Contact</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/pages/resume-page'} className="nav-link">
                    <i className="fa fa-file-text-o"></i>
                    <p>Resume</p>
                  </NavLink>
                </li>
                {this.renderContent()}
              </ul>
            </Navbar.Collapse>
          </Navbar>
      );
    }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(PagesHeader);
