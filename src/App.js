import React, { Component } from "react";
import $ from "jquery";

import SmoothScrollAnchor from "./components/SmoothScrollAnchor";

import myPicture from "./assets/me.jpg";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

function hashChange(e) {
  e.preventDefault();
  var hash = window.location.hash;
  if (!hash) hash = "#home";
  const carousel = $("#parentCarousel");
  switch (hash) {
    case "#home":
      carousel.carousel(0);
      break;
    case "#skills":
      carousel.carousel(1);
      break;
    case "#experience":
      carousel.carousel(2);
      break;
    case "#education":
      carousel.carousel(3);
      break;
    case "#projects":
      carousel.carousel(4);
      break;
  }
  // change active menu link
  $("#navlist")
    .find(".active")
    .removeClass("active");
  $(`${hash}-nav`).addClass("active");
}
window.onhashchange = hashChange;

class App extends Component {
  handleAnchorClick(e) {
    e.preventDefault();
    var hash = this.state.href;
    var offset = $(hash).offset();
    if (offset) {
      $("html, body").animate(
        {
          scrollTop: offset.top
        },
        300,
        function() {
          window.location.hash = hash;
        }
      );
    }
  }

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
            <div
              style={{ paddingBottom: "400px", paddingTop: "75px" }}
              id="home"
              className="carousel-item active"
            >
              <Home />
            </div>
            <div
              style={{ paddingBottom: "400px", paddingTop: "75px" }}
              id="skills"
              className="carousel-item"
            >
              <Skills />
            </div>
            <div
              style={{ paddingBottom: "400px", paddingTop: "75px" }}
              id="experience"
              className="carousel-item"
            >
              <Experience />
            </div>
            <div
              style={{ paddingBottom: "400px", paddingTop: "75px" }}
              id="education"
              className="carousel-item"
            >
              <Education />
            </div>
            <div
              style={{ paddingBottom: "200px", paddingTop: "75px" }}
              id="projects"
              className="carousel-item"
            >
              <Projects />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
