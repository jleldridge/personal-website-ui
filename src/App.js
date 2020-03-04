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
  }
  // var offset = $(hash).offset();

  // if (offset) {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $(hash).offset().top
  //     },
  //     300,
  //     function() {}
  //   );
  // }
}
window.onhashchange = hashChange;

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
              <SmoothScrollAnchor className="nav-item nav-link" href="#home">
                Home
              </SmoothScrollAnchor>
              <SmoothScrollAnchor className="nav-item nav-link" href="#skills">
                Skills
              </SmoothScrollAnchor>
              <SmoothScrollAnchor
                className="nav-item nav-link"
                href="#experience"
              >
                Experience
              </SmoothScrollAnchor>
              <SmoothScrollAnchor
                className="nav-item nav-link"
                href="#education"
              >
                Education
              </SmoothScrollAnchor>
              <SmoothScrollAnchor
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
          <a
            class="carousel-control-prev"
            href="#parentCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#parentCarousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
