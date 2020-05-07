import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import $ from "jquery";

import SmoothScrollAnchor from "./components/SmoothScrollAnchor";

import myPicture from "./assets/me.jpg";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";

class App extends Component {
  componentDidMount() {
    $("#parentCarousel").on("slid.bs.carousel", (e) => {
      $("#navlist").find(".active").removeClass("active");
      $(`#${e.delegateTarget.id}-nav`).addClass("active");
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
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
                <div className="navbar-brand">Luke Eldridge</div>

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
                  <div id="home" className="carousel-item active pr-5 pl-5">
                    <Home />
                  </div>
                  <div id="skills" className="carousel-item pr-5 pl-5">
                    <Skills />
                  </div>
                  <div id="experience" className="carousel-item pr-5 pl-5">
                    <Experience />
                  </div>
                  <div id="education" className="carousel-item pr-5 pl-5">
                    <Education />
                  </div>
                  <div id="projects" className="carousel-item pr-5 pl-5">
                    <Projects />
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
