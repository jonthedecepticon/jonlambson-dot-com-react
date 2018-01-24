import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Table,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';

import Switch from 'react-bootstrap-switch';

import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

// react component that creates an input in which you add words that become like tags
import TagsInput from 'react-tagsinput';

import spotify from 'assets/img/spotifyClone.png';
import personalWebsite from 'assets/img/personalWebsite.png';
import magicmirror from 'assets/img/magicmirror.jpg';
import hardware from 'assets/img/hardware.jpg';

class PortfolioPage extends Component{
  constructor(props){
      super(props);
      this.state = {
          jonlambsondotcomTags: ["MongoDB","Expressjs","React", "Redux", "Passport", "mongoose", "nodejs", "Stripe", "sendgrid", "sass"],
          jonthedecepticonTags: ["nodejs", "javascript", "Raspberry Pi 3", "arduino Uno", "Vuejs", "wit.ai"],
          spotifyCloneTags: ["Vuejs", "PHP", "Mysql", "Sass"],
          magicmirrorTags: ["Raspberry Pi", "electron", "Javascript", "linux"]
      };
  }
  render(){
    const viewPost = (
        <Tooltip id="view">View Project</Tooltip>
    );
    const actionsPost = (
        <td className="td-actions">
          <OverlayTrigger placement="left" overlay={viewPost}>
            <Button simple icon bsStyle="info">
              <i className="fa fa-image"></i>
            </Button>
          </OverlayTrigger>
        </td>
    );
    return (
      <form className="ng-untouched ng-pristine ng-valid">
        <div className="portfolio-page-container">
          <div className="about-me-section" style={{marginTop: "-70px"}}>
            <h2>About me...</h2>
            <h4>
              My name is Jon Lambson and I am a full stack web developer and just getting into IoT development. I am from Pleasant Grove, Utah. I am currently still going through college. I have been attending off and on do to a hectic work and personal life schedule. I hope to graduate with a bachelor’s degree in Computer Science from Utah Valley University. Unfortunaly, I do not have an expected graduation date since I haven't been able to focus on my schooling. I plan to go back as soon as possilbe and finish out my degree. I love being creative, whether that means drawing, painting, playing the violin/guitar/piano, etc. I have a very strong desire to create something beautiful.
            </h4>
            <h4 className="">
              Recently, I have taken an interest to IoT development and am still in the very beginner stages (but you gotta start somewhere, right?). I really enjoy building projects with Raspberry Pi's and Arduino's. <code>sudo apt-get blah</code> is cool and all, but learning how the project is built from the ground up is where the real fun is!!! I have a check list of IoT type projects I want to build as a hobby, I'll make sure to post them below when they are finished!
            </h4>
            <br />
            <br />
          </div>
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Card
                  textCenter
                  title="Web Projects"
                  category=""
                  tableFullWidth
                  content={
                    <Table responsive className="table-bigboy">
                      <thead>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="img-container">
                              <img alt="..." src={personalWebsite} style={{height: "100%"}} />
                            </div>
                            <a href="http://jonlambson.com">
                              jonlambson.com
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.jonlambsondotcomTags} tagProps={{className: 'react-tagsinput-tag tag-azure' }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>Personal Website</h6>
                            M.E.R.N Stack build from the ground up. Zero boiler plate code. Hosted with Heroku. Two Mongo Databases one for production and one for development. Frontend server for React, Backend server for Express API routes. Using Passport for user authentication.
                            If you sign up, you will see a lot more features in the admin dashboard. If you'd rather not sign up, that's okay too because I left the some of the authenticated routes open just for fun and for you to test <a href="/dashboard">Go to admin dashboard</a>. Other routes and features will require a logged in user.
                            Stripe API, send out mass amounts of emails using Sendgrid API. Packed with a bunch of random charts and maps.
                          </td>
                          { actionsPost }
                        </tr>
                        <tr>
                          <td>
                            <div className="img-container">
                              <img alt="..." src={spotify} style={{height: "100%"}}/>
                            </div>
                            <a>
                              Coming soon...
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.spotifyCloneTags} tagProps={{className: 'react-tagsinput-tag tag-azure' }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            I think Spotify is one of my favorite companies to date. In this project I am using my friend's design and building a replica of Spotify. Features include Sign up/Login, Control the music with all the usual controls such as play, pause, skip, previous, shuffle, repeat etc. Create and customize playlists. I am building this project because I want to improve my Vuejs skills and better understand PHP and MYSQL.
                          </td>
                          { actionsPost }
                        </tr>
                      </tbody>
                    </Table>
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Card
                  textCenter
                  title="IoT Projects"
                  category=""
                  tableFullWidth
                  content={
                    <Table responsive className="table-bigboy">
                      <thead>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="img-container">
                              <img alt="..." src={hardware} />
                            </div>
                            <a href="http://jonthedecepti.com/">
                              jonthedecepti.com
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.jonthedecepticonTags} tagProps={{className: 'react-tagsinput-tag tag-azure' }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>Web Based Dashboard</h6>
                            This project is a fullstack web based dashboard that will display information from various sensors and devices. There will be a section that provides toggles and actions that communicates between various devices.
                          </td>
                          { actionsPost }
                        </tr>
                        <tr>
                          <td>
                            <div className="img-container">
                              <img alt="..." src={magicmirror} />
                            </div>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.magicmirrorTags} tagProps={{className: 'react-tagsinput-tag tag-azure' }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>Magic Mirror² Rebuild</h6>
                            A simple Raspberry Pi project. The reason I started this project is to get more confortable with linux and understand more how electron works. Attempting to create my own javascript module to run on my magic mirror setup.
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  }
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </form>
    );
  }
}

export default PortfolioPage;
