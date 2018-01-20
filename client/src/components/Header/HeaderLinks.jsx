import React, { Component } from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown, MenuItem,
    FormGroup, FormControl, InputGroup
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class HeaderLinks extends Component{
    render(){
        return(
            <div>
              <Navbar.Form pullLeft className="navbar-search-form">
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon><i className="fa fa-search"></i></InputGroup.Addon>
                    <FormControl type="text" placeholder="Search..." />
                  </InputGroup>
                </FormGroup>
              </Navbar.Form>
              <Nav pullRight>
                <NavItem eventKey={3} href="/dashboard">
                  <i className="fa fa-line-chart"></i>
                  <p>Stats</p>
                </NavItem>
                <NavDropdown
                  eventKey={2}
                  title={(
                    <div>
                      <i className="fa fa-gavel"></i>
                      <p className="hidden-md hidden-lg">
                        Actions
                        <b className="caret"></b>
                      </p>
                    </div>
                  )} noCaret id="basic-nav-dropdown-1">
                  <MenuItem eventKey={2.1}>Create New Post</MenuItem>
                  <MenuItem eventKey={2.2}>Manage Something</MenuItem>
                  <MenuItem eventKey={2.3}>Do Nothing</MenuItem>
                  <MenuItem eventKey={2.4}>Submit to live</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.5}>Another action</MenuItem>
                </NavDropdown>
                <NavDropdown
                  eventKey={3}
                  title={(
                    <div>
                      <i className="fa fa-bell-o"></i>
                      <span className="notification">5</span>
                      <p className="hidden-md hidden-lg">
                        Notifications
                        <b className="caret"></b>
                      </p>
                    </div>
                  )} noCaret id="basic-nav-dropdown-2">
                  <MenuItem eventKey={3.1}>Notification 1</MenuItem>
                  <MenuItem eventKey={3.2}>Notification 2</MenuItem>
                  <MenuItem eventKey={3.3}>Notification 3</MenuItem>
                  <MenuItem eventKey={3.4}>Notification 4</MenuItem>
                  <MenuItem eventKey={3.5}>Another notifications</MenuItem>
                </NavDropdown>
                <NavDropdown
                  eventKey={4}
                  title={(
                    <div>
                      <i className="fa fa-list"></i>
                      <p className="hidden-md hidden-lg">
                        More
                        <b className="caret"></b>
                      </p>
                    </div>
                  )} noCaret id="basic-nav-dropdown-3" bsClass="dropdown-with-icons dropdown">
                  <li role="presentation">
                    <NavLink eventKey={4.1} to={'/tables/data-tables'}>
                      <i className="pe-7s-mail"></i>
                      Messages
                    </NavLink>
                  </li>
                  <li role="presentation">
                    <NavLink eventKey={4.2} to={'/pages/user-page'}>
                      <i className="pe-7s-tools"></i>
                      Settings
                    </NavLink>
                  </li>
                  <MenuItem divider />
                  <MenuItem eventKey={4.3} href="/api/logout"><div className="text-danger"><i className="pe-7s-close-circle"></i> Log out</div></MenuItem>
                </NavDropdown>
              </Nav>
            </div>
        );
    }
}
export default HeaderLinks;
