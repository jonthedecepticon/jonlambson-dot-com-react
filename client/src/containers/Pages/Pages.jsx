import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import $ from 'jquery';

import Footer from 'components/Footer/Footer.jsx';
import PagesHeader from 'components/Header/PagesHeader.jsx';

import bgImageBackup1 from 'assets/img/full-screen-image-1.jpg';
import bgImageBackup2 from 'assets/img/full-screen-image-2.jpg';
import bgImageBackup3 from 'assets/img/full-screen-image-3.jpg';
import bgImageBackup4 from 'assets/img/full-screen-image-4.jpg';

// dynamically create pages routes
import pagesRoutes from 'routes/pages.jsx';

function getRandomNum() {
  return Math.floor(Math.random() * 427);
}

let bgImage = `https://source.unsplash.com/collection/182565/${getRandomNum()}`;

$.get(bgImage)
    .done(function() {
      //Nothing to be done
    })
    .fail(function() {
      let one = bgImageBackup1;
      let two = bgImageBackup2;
      let three = bgImageBackup3;
      let four = bgImageBackup4;
      let items = [one, two, three, four]
      bgImage = items[Math.floor(Math.random()*items.length)];
    })

class Pages extends Component{
  getPageClass(){
    var pageClass = "";
    switch (this.props.location.pathname) {
      case "/pages/login-page":
        pageClass = " login-page";
      break;
      case "/pages/register-page":
        pageClass = " register-page";
      break;
      case "/pages/home-page":
        // HACK: FIX CSS
        pageClass = " lock-page home-page";
      break;
      case "/pages/contact-page":
        // HACK: FIX CSS
        pageClass = " lock-page contact-page";
      break;
      case "/pages/portfolio-page":
        // HACK: FIX CSS
        pageClass = " lock-page portfolio-page";
      break;
      case "/pages/resume-page":
        pageClass = " lock-page resume-page";
      break;
      default:
        pageClass = "";
      break;
    }
    return pageClass;
  }
  componentWillMount(){
    if(document.documentElement.className.indexOf('nav-open') !== -1){
      document.documentElement.classList.toggle('nav-open');
    }
  }
  render(){
    return (
      <div>
        <PagesHeader />
        <div className="wrapper wrapper-full-page">
          <div className={"full-page"+this.getPageClass()} data-color="black" data-image={bgImage}>
            <div className="content">
              <Switch>
                {
                  pagesRoutes.map((prop,key) => {
                    return (
                      <Route path={prop.path} component={prop.component}  key={key}/>
                    );
                  })
                }
              </Switch>
            </div>
            <Footer transparent/>
            <div className="full-page-background" style={{backgroundImage: "url("+bgImage+")"}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pages;
