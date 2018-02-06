import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Table,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';


import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

// react component that creates an input in which you add words that become like tags
import TagsInput from 'react-tagsinput';

import spotify from 'assets/img/spotifyClone.png';
import personalWebsite from 'assets/img/personalWebsite.png';
import magicmirror from 'assets/img/magicmirror.jpg';
import hardware from 'assets/img/hardware.jpg';
import dapp from 'assets/img/decentralizedInternet.jpg';
import podiumcoin from 'assets/img/podiumcoin.png';
import blog from 'assets/img/blog.png';
import slack from 'assets/img/slack.jpg';

class PortfolioPage extends Component{
  constructor(props){
    super(props);
    this.state = {
        jonlambsondotcomTags: ["MongoDB","Expressjs","React", "Redux", "Passport", "mongoose", "mlab", "node", "Stripe", "sendgrid", "sass", "heroku"],
        podiumcoinTags: ["Firebase","Expressjs","Angularjs", "node", "Stripe", "sass", "Digital Ocean", "Nginx", "Facebook"],
        jonthedecepticonTags: ["node", "javascript", "Raspberry Pi 3", "arduino Uno", "Vuejs", "wit.ai"],
        spotifyCloneTags: ["Vuejs", "PHP", "Mysql", "Sass"],
        magicmirrorTags: ["Raspberry Pi", "electron", "Javascript", "linux"],
        dappTags: ["React", "Geth", "Web3", "Truffle", "TestRPC", "MetaMask", "Solidity", "Ethereum", "webpack"],
        reactBlogTags: ["React", "Redux-form", "Redux", "Sass"],
        socketIoTags: ["Javascript", "Node", "Express", "socket.io"],
    };
  }
  viewPost() {
    return (
      <Tooltip id="view">View Code on Github</Tooltip>
    )
  };
  render(){
    return (
      <form className="ng-untouched ng-pristine ng-valid">
        <div className="portfolio-page-container">
          <div className="about-me-section" style={{marginTop: "-70px"}}>
            <h2>About me...</h2>
            <h4>
              My name is Jon Lambson, I am a Full Stack Web Developer and just getting into IoT Development. I am from Pleasant Grove, Utah. I love being outdoors, flying my drone and recording my hiking, biking and snowboarding/skateboarding adventures. If I'm not outside I am playing the guitar or I am sitting in front of my computer experimenting with new languages and frameworks.
            </h4>
            <h4>
              Recently, I have taken an interest to IoT Development. I really enjoy building projects with Raspberry Pi's and Arduino's!
            </h4>
            <div className="socail-media-container">
              <a href="https://github.com/jonthedecepticon" target="_blank" rel="noopener noreferrer">
                <Button round github>
                  <i className="fa fa-github"></i>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/jon-lambson/" target="_blank" rel="noopener noreferrer">
                <Button round linkedin>
                  <i className="fa fa-linkedin"></i>
                </Button>
              </a>
              <a href="https://www.facebook.com/jon.lambson" target="_blank" rel="noopener noreferrer">
                <Button round facebook>
                  <i className="fa fa-facebook"> </i>
                </Button>
              </a>
              <a href="https://twitter.com/JonLambson" target="_blank" rel="noopener noreferrer">
                <Button round twitter>
                  <i className="fa fa-twitter"></i>
                </Button>
              </a>
            </div>
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
                              <a href="http://jonlambson.com" target="_blank" rel="noopener noreferrer">
                                <img alt="..." src={personalWebsite} style={{height: "100%"}} />
                              </a>
                            </div>
                            <a href="http://jonlambson.com" target="_blank" rel="noopener noreferrer">
                              jonlambson.com
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.jonlambsondotcomTags} tagProps={{className: "react-tagsinput-tag tag-azure" }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>Personal Website</h6>
                            M.E.R.N Stack built from the ground up, and zero boiler plate code. Hosted with Heroku. Two Mongo Databases one for production and one for development. Front end server for React, Back end server for Express API routes. Using Passport for user authentication.
                            If you sign up, you will see a lot more features in the admin dashboard. If you'd rather not sign up, that's okay too because I left the some of the authenticated routes open just for fun and for you to test <a href="/dashboard">Go to admin dashboard</a>. Other routes and features will require a logged in user.
                            Set up Stripe API, which requires "credit" to send out mass amounts of emails using Sendgrid API. The admin dashboard is packed with a bunch of random charts and maps.
                          </td>
                          <td className="td-actions">
                            <OverlayTrigger placement="left" overlay={this.viewPost()}>
                              <Button simple icon bsStyle="info">
                                <a href="https://github.com/jonthedecepticon/jonlambson-dot-com-react" target="_blank" rel="noopener noreferrer">
                                  <i className="fa fa-github-alt" style={{fontSize: "22px"}}></i>
                                </a>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="img-container">
                              <a href="https://websocket-io-chat-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img alt="..." src={slack} style={{height: "100%"}}/>
                              </a>
                            </div>
                            <a href="https://websocket-io-chat-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                              jl-websockets.com
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.socketIoTags} tagProps={{className: "react-tagsinput-tag tag-azure" }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>Slack Chat App</h6>
                            A very simple chat app build with Socket.IO on an express server, designed to look like Slack. Playing around with WebSockets, with the intent to learn more about the functionality and implement socket.io in future IoT projects. Open two seperate tabs of this app and chat with a friend! This app will use WebSockets real time data flow to keep connections open between multiple browsers or tabs. See messages sent in real time and see when someone else's typing a message.
                          </td>
                          <td className="td-actions">
                            <OverlayTrigger placement="left" overlay={this.viewPost()}>
                              <Button simple icon bsStyle="info">
                                <a href="https://github.com/jonthedecepticon/Websocket-chat" target="_blank" rel="noopener noreferrer">
                                  <i className="fa fa-github-alt" style={{fontSize: "22px"}}></i>
                                </a>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="img-container">
                              <a href="https://dapp-jonlambson.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img alt="..." src={dapp} style={{height: "100%"}}/>
                              </a>
                            </div>
                            <a href="https://dapp-jonlambson.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                              dapp-jonlambson.com
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.dappTags} tagProps={{className: "react-tagsinput-tag tag-azure" }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>Decentralized Application</h6>
                            Attempting to keep up with the latest trends and hot new frameworks, I am working on building out a simple decentralized app, where I can develop, compile, test Smart Contracts.
                          </td>
                          <td className="td-actions">
                            <OverlayTrigger placement="left" overlay={this.viewPost()}>
                              <Button simple icon bsStyle="info">
                                <a href="https://github.com/jonthedecepticon/DApp" target="_blank" rel="noopener noreferrer">
                                  <i className="fa fa-github-alt" style={{fontSize: "22px"}}></i>
                                </a>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="img-container">
                              <a href="https://jonlambson-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img alt="..." src={blog} style={{height: "100%"}}/>
                              </a>
                            </div>
                            <a href="https://jonlambson-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                              jonlambson-blog.com
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.reactBlogTags} tagProps={{className: "react-tagsinput-tag tag-azure" }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>Blog</h6>
                            A simple create, read, update, and delete blog using a RESTful API. Built with React and Redux. This project is just to simply understand React and Redux more.
                          </td>
                          <td className="td-actions">
                            <OverlayTrigger placement="left" overlay={this.viewPost()}>
                              <Button simple icon bsStyle="info">
                                <a href="https://github.com/jonthedecepticon/react-blog" target="_blank" rel="noopener noreferrer">
                                  <i className="fa fa-github-alt" style={{fontSize: "22px"}}></i>
                                </a>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="img-container">
                              <a href="http://podiumcoin.com/" target="_blank" rel="noopener noreferrer">
                                <img alt="..." src={podiumcoin} style={{height: "100%"}} />
                              </a>
                            </div>
                            <a href="http://podiumcoin.com/" target="_blank" rel="noopener noreferrer">
                              podiumcoin.com
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.podiumcoinTags} tagProps={{className: "react-tagsinput-tag tag-azure" }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>Voting / Sharing Platform</h6>
                            M.E.A.N Stack built from the ground up and hosted with Digital Ocean. This project was built for Daplie, an admin team member would post an article in 3 categories. Articles would be displayed in order of "trending" or most popular. Sharing on Facebook or voting for an article would increase the articles visibility. All information stored and authentication using Firebase. Stripe was implemented for donation to the article owner, but never put into production. <span className="text-muted">**Daplie is the owner of the Firebase account linked to this project, it may be disconnected at any time.**</span>
                          </td>
                          <td className="td-actions">
                            <OverlayTrigger placement="left" overlay={this.viewPost()}>
                              <Button simple icon bsStyle="info">
                                <a href="https://github.com/jonthedecepticon/dap-trend" target="_blank" rel="noopener noreferrer">
                                  <i className="fa fa-github-alt" style={{fontSize: "22px"}}></i>
                                </a>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="img-container">
                              <img alt="..." src={spotify} style={{height: "100%"}}/>
                            </div>
                            <a className="text-muted">
                              Coming soon...
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.spotifyCloneTags} tagProps={{className: "react-tagsinput-tag tag-azure" }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>Spotify Clone</h6>
                            I think Spotify is one of my favorite companies and products out there. In this project I am using my friend's design and building a replica of Spotify. Features include Sign up/Login, controling the music with all the usual controls such as play, pause, skip, previous, shuffle, repeat etc. Create and customize playlists. I am building this project because I want to improve my Vuejs skills and better understand PHP and MYSQL.
                          </td>
                          <td className="td-actions">
                            <OverlayTrigger placement="left" overlay={this.viewPost()}>
                              <Button simple icon bsStyle="info">
                                <a href="https://github.com/jonthedecepticon/spotify-clone" target="_blank" rel="noopener noreferrer">
                                  <i className="fa fa-github-alt" style={{fontSize: "22px"}}></i>
                                </a>
                              </Button>
                            </OverlayTrigger>
                          </td>
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
                            <a className="text-muted">
                              Coming Soon...
                            </a>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.jonthedecepticonTags} tagProps={{className: "react-tagsinput-tag tag-azure" }}/>
                          </td>
                          <td style={{textAlign: "left"}}>
                            <h6>IoT Dashboard</h6>
                            This project is a fullstack web based dashboard that will display information from various sensors and devices. There will be a section that provides toggles and actions that communicates between various devices.
                          </td>
                          <td className="td-actions">
                            <OverlayTrigger placement="left" overlay={this.viewPost()}>
                              <Button simple icon bsStyle="info">
                                <a href="https://github.com/jonthedecepticon/IoT-Dashboard" target="_blank" rel="noopener noreferrer">
                                  <i className="fa fa-github-alt" style={{fontSize: "22px"}}></i>
                                </a>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="img-container">
                              <img alt="..." src={magicmirror} />
                            </div>
                          </td>
                          <td className="td-name">
                            <TagsInput value={this.state.magicmirrorTags} tagProps={{className: "react-tagsinput-tag tag-azure" }}/>
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
