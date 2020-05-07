import React, { Component } from "react";
import Page from "../components/Page";

class Education extends Component {
  render() {
    return (
      <Page title="Education">
        <p className="text-secondary mb-0">August 2008 - December 2013</p>
        <p className="mb-0 text-success">
          BS in Computer Science -{" "}
          <span className="font-italic">
            Unversity of North Carolina Greensboro
          </span>
        </p>
        <ul>
          <li>
            Acted as an officer and president for the UNCG chapter of the
            Association for Computing Machinery (ACM).
          </li>
          <li>
            Participated in programming contests at Duke University and North
            Carolina A&T University, achieving first place at A&T in Spring
            2012.
          </li>
          <li>
            Received Outstanding Computer Science Undergraduate Award in
            Computer Science department graduation ceremony.
          </li>
        </ul>
      </Page>
    );
  }
}

export default Education;
