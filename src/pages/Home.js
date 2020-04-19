import React, { Component } from "react";
import Page from "../components/Page";

class Home extends Component {
  render() {
    return (
      <Page title="Hello!">
        <p className="lead">
          I am Luke Eldridge, a software engineer based out of Portland,
          Oregon. I have used several different languages in my career so far,
          including javascript, C#, golang, objective-c, ruby, and others. I
          have worked professionally on web apps and desktop apps for both MacOS
          and Windows. I pride myself on being able to pick up and learn
          whatever tools I need to solve a problem.
        </p>
        <p className="lead mt-4">
          Contact:{" "}
          <a href="mailto:jleldridge27@gmail.com">jleldridge27@gmail.com</a>
        </p>
        <a
          className="btn btn-primary"
          href="www.linkedin.com/in/lukeeldridge27"
          target="_blank"
        >
          LinkedIn Profile
        </a>
      </Page>
    );
  }
}

export default Home;
