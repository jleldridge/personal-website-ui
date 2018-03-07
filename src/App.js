import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import myPicture from './assets/me.jpg';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';

class App extends Component {
  render() {
    return (
      <div>
        <nav id="top-navbar" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <img style={{height:'50px',float:'left',marginRight:'10px'}} src={myPicture} alt="logo" />
          <div className="navbar-brand">Jeffrey Eldridge</div>

          <Scrollspy className="navbar-nav" items={['home', 'experience', 'education', 'projects']} currentClassName="active">
            <a className="nav-item nav-link" href="#home">Home</a>
            <a className="nav-item nav-link" href="#experience">Experience</a>
            <a className="nav-item nav-link" href="#education">Education</a>
            <a className="nav-item nav-link" href="#projects">Projects</a>
          </Scrollspy>

        </nav>
        <div className="container" style={{paddingTop:"75px"}}>
          <div style={{marginBottom: "400px", paddingTop: "75px"}} id="home" className="container-fluid"><Home /></div>
          <div style={{marginBottom: "400px", paddingTop: "75px"}} id="experience" className="container-fluid"><Experience /></div>
          <div style={{marginBottom: "400px", paddingTop: "75px"}} id="education" className="container-fluid"><Education /></div>
          <div style={{marginBottom: "200px", paddingTop: "75px"}} id="projects" className="container-fluid"><Projects /></div>
        </div>
      </div>
    );
  }
}

export default App;
