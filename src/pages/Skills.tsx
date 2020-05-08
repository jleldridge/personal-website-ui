import React, { Component } from "react";
import Page from "../components/Page";

class Skills extends Component {
  render() {
    return (
      <Page title="Skills">
        <div className="row">
          <div className="col-sm">
            <h4>Languages</h4>
            <ul className="list-unstyled mt-3">
              <li>C#</li>
              <li>XAML</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java</li>
              <li>Ruby</li>
              <li>Golang</li>
              <li>Objective-C</li>
            </ul>
          </div>
          <div className="col-sm">
            <h4>Frameworks</h4>
            <ul className="list-unstyled mt-3">
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Electron</li>
              <li>Redux</li>
              <li>Ruby on Rails</li>
              <li>.NET</li>
              <li>WPF</li>
              <li>UWP</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm">
            <h4>Tools</h4>
            <ul className="list-unstyled mt-3">
              <li>Visual Studio</li>
              <li>IntelliJ</li>
              <li>NPM</li>
              <li>Git</li>
              <li>Mercurial</li>
              <li>Jira</li>
              <li>Yarn</li>
            </ul>
          </div>
          <div className="col-sm">
            <h4>Concepts</h4>
            <ul className="list-unstyled mt-3">
              <li>MVVM</li>
              <li>UX Design</li>
              <li>RESTful Architecture</li>
              <li>Agile</li>
              <li>Scrum</li>
              <li>Kanban</li>
            </ul>
          </div>
        </div>
      </Page>
    );
  }
}

export default Skills;
