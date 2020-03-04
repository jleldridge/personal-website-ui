import React, { Component } from "react";
import $ from "jquery";

import SmoothScrollAnchor from "./components/SmoothScrollAnchor";

import myPicture from "./assets/me.jpg";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

class App extends Component {
  render() {
    return (
      <div className="bg-dark">
        <nav
          id="top-navbar"
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{ backgroundColor: "#563D7C" }}
        >
          <img
            style={{ height: "50px", float: "left", marginRight: "10px" }}
            src={myPicture}
            alt="logo"
          />
          <div className="navbar-brand">Jeffrey Eldridge</div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navlist"
            aria-controls="navlist"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navlist" className="collapse navbar-collapse">
            <div className="navbar-nav">
              <SmoothScrollAnchor
                id="home-nav"
                className="nav-item nav-link"
                href="#home"
              >
                Home
              </SmoothScrollAnchor>
              <SmoothScrollAnchor
                id="skills-nav"
                className="nav-item nav-link"
                href="#skills"
              >
                Skills
              </SmoothScrollAnchor>
              <SmoothScrollAnchor
                id="experience-nav"
                className="nav-item nav-link"
                href="#experience"
              >
                Experience
              </SmoothScrollAnchor>
              <SmoothScrollAnchor
                id="education-nav"
                className="nav-item nav-link"
                href="#education"
              >
                Education
              </SmoothScrollAnchor>
              <SmoothScrollAnchor
                id="projects-nav"
                className="nav-item nav-link"
                href="#projects"
              >
                Projects
              </SmoothScrollAnchor>
            </div>
          </div>
        </nav>
        <div
          className="carousel slide"
          style={{ paddingTop: "75px" }}
          data-interval={false}
          id="parentCarousel"
        >
          <div className="carousel-inner">
            <div id="home" className="carousel-item active">
              <Home />
            </div>
            <div id="skills" className="carousel-item">
              <Skills />
            </div>
            <div id="experience" className="carousel-item">
              <Experience />
            </div>
            <div id="education" className="carousel-item">
              <Education />
            </div>
            <div id="projects" className="carousel-item">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
