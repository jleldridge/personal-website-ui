import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import myPicture from './assets/me.jpg';
import Projects from './pages/Projects.js';
import Home from './pages/Home.js';

class App extends Component {
  render() {
    return (
      <div>
        <nav id="top-navbar" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <img style={{height:'50px',float:'left',marginRight:'10px'}} src={myPicture} alt="logo" />
          <div className="navbar-brand">Jeffrey Eldridge</div>
          <Scrollspy className="navbar-nav" items={['home', 'projects']} currentClassName="active">
            <a className="nav-item nav-link" href="#home">Home</a>
            <a className="nav-item nav-link" href="#projects">Projects</a>
          </Scrollspy>
        </nav>
        <div className="container" style={{paddingTop:"75px"}}>
          <div id="home" className="container-fluid"><Home /></div>
          <div id="projects" className="container-fluid"><Projects /></div>
        </div>
      </div>
    );
  }
}

export default App;
