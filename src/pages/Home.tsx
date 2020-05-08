import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Page from "../components/Page";
import config from "../config.json";
import { State, HomeContent } from "../types";
import { storeHomeContent } from "../redux/actions";

type Props = {
  storeHomeContent: (homeContent: HomeContent) => void;
  token?: string;
  summary?: string;
  contact?: string;
  linkedInURL?: string;
};

class Home extends Component<Props> {
  componentDidMount() {
    const { storeHomeContent } = this.props;
    const axiosConfig = {
      headers: { Authorization: `Bearer ${this.props.token}` },
    };
    axios
      .get(config.API_SERVER_URL + "/content/home", axiosConfig)
      .then(function (response) {
        storeHomeContent(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      // <Page title="Hello!">
      //   <p className="lead">
      // I am Luke Eldridge, a software engineer based out of Portland, Oregon.
      // I have used several different languages in my career so far, including
      // javascript, C#, golang, objective-c, ruby, and others. I have worked
      // professionally on web apps and desktop apps for both MacOS and
      // Windows. I pride myself on being able to pick up and learn whatever
      // tools I need to solve a problem.
      //   </p>
      //   <p className="lead mt-4">
      //     Contact:{" "}
      //     <a href="mailto:jleldridge27@gmail.com">jleldridge27@gmail.com</a>
      //   </p>
      //   <a
      //     className="btn btn-primary"
      //     href="https://www.linkedin.com/in/lukeeldridge27"
      //     target="_blank"
      //   >
      //     LinkedIn Profile
      //   </a>
      // </Page>
      <Page title="Hello!">
        <p className="lead">{this.props.summary}</p>
        <p className="lead mt-4">
          Contact:{" "}
          <a href={`mailto:${this.props.contact}`}>{this.props.contact}</a>
        </p>
        <a
          className="btn btn-primary"
          href={this.props.linkedInURL}
          target="_blank"
        >
          LinkedIn Profile
        </a>
      </Page>
    );
  }
}

const mapStateToProps = (state: State) => {
  const content = state.homeContent;
  return {
    summary: content && content.summary,
    contact: content && content.contact,
    linkedInURL: content && content.linkedInURL,
  };
};

const mapDispatchToProps = { storeHomeContent };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
