import React, { Component } from "react";
import SmoothScrollAnchor from "../components/SmoothScrollAnchor";

class Experience extends Component {
  render() {
    return (
      <div>
        <h2 className="text-info">Experience</h2>
        <div className="container mb-4">
          <p className="text-secondary mb-0">May 2018 - March 2020</p>
          <p className="mb-0 text-success">
            Software Engineer - <span className="font-italic">Abstract</span>
          </p>
          <ul>
            <li>
              Helped develop git-based version control for Sketch files with
              Golang.
            </li>
            <li>
              Maintained Abstract’s Sketch plugin by fixing bugs and updating
              code to keep up with Sketch updates.
            </li>
            <li>
              Created code to extract data from Sketch’s file format using
              Golang to support features such as design assets in Abstract.
            </li>
            <li>
              Added server endpoints to support new features for the Abstract
              desktop and web apps using Ruby on Rails and Golang.
            </li>
          </ul>
        </div>
        <div className="container mb-4">
          <p className="text-secondary mb-0">January 2014 - April 2018</p>
          <p className="mb-0 text-success">
            Software Developer -{" "}
            <span className="font-italic">Datawatch Corporation</span>
          </p>
          <ul>
            <li>
              Helped design and develop{" "}
              <SmoothScrollAnchor href="#monarch">
                Monarch Complete{" "}
              </SmoothScrollAnchor>
              using C#, XAML, WPF, and .NET.
            </li>
            <li>
              Worked on UI and streaming data plugins for{" "}
              <SmoothScrollAnchor href="#panopticon">
                Datawatch Panopticon{" "}
              </SmoothScrollAnchor>
              in Stockholm using C#, XAML, WPF, .NET, and Java.
            </li>
          </ul>
        </div>
        <div className="container mt-3">
          <p className="text-secondary mb-0">August 2013 - December 2013</p>
          <p className="mb-0 text-success">
            Intern - <span className="font-italic">Datawatch Corporation</span>
          </p>
          <ul>
            <li>
              Performed quality assurance testing for version 12 of Datawatch
              Monarch.
            </li>
            <li>
              Created continuous integration build scripts for Datawatch Monarch
              through Atlassian's Bamboo platform.
            </li>
          </ul>
        </div>
        <div className="container mt-3">
          <p className="text-secondary mb-0">January 2012 - April 2013</p>
          <p className="mb-0 text-success">
            Computer Science Lab Tutor -{" "}
            <span className="font-italic">
              University of North Carolina Greensboro
            </span>
          </p>
          <ul>
            <li>
              Assisted students with understanding computer science lab
              assignments.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
