import React, { Component } from 'react';

import SmoothScrollAnchor from './components/SmoothScrollAnchor';

import myPicture from './assets/me.jpg';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';

class App extends Component {
  render() {
    return (
      <div className="bg-dark">
        <nav id="top-navbar" className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "#563D7C"}}>
          <img style={{height:'50px',float:'left',marginRight:'10px'}} src={myPicture} alt="logo" />
          <div className="navbar-brand">Jeffrey Eldridge</div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navlist" aria-controls="navlist" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navlist" className="collapse navbar-collapse">
            <div className="navbar-nav">
              <SmoothScrollAnchor href="#home">Home</SmoothScrollAnchor>
              <SmoothScrollAnchor href="#experience">Experience</SmoothScrollAnchor>
              <SmoothScrollAnchor href="#education">Education</SmoothScrollAnchor>
              <SmoothScrollAnchor href="#projects">Projects</SmoothScrollAnchor>
            </div>
          </div>

        </nav>
        <div className="container bg-dark text-white" style={{paddingTop:"75px"}}>
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
