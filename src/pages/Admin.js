import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import path from "path";
import axios from "axios";
import config from "../config.json";
import { storeToken } from "../redux/actions";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      homeSummary: "",
      homeContact: "",
      homeLinkedInURL: "",
    };

    this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handleHomeSummaryChanged = this.handleHomeSummaryChanged.bind(this);
    this.handleHomeContactChanged = this.handleHomeContactChanged.bind(this);
    this.handleHomeLinkedInURLChanged = this.handleHomeLinkedInURLChanged.bind(
      this
    );

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUpdateHome = this.handleUpdateHome.bind(this);
  }

  handleUsernameChanged(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  handleHomeSummaryChanged(event) {
    this.setState({ homeSummary: event.target.value });
  }

  handleHomeContactChanged(event) {
    this.setState({ homeContact: event.target.value });
  }

  handleHomeLinkedInURLChanged(event) {
    this.setState({ homeLinkedInURL: event.target.value });
  }

  handleLogin(event) {
    const { storeToken } = this.props;
    axios
      .post(config.API_SERVER_URL + "/admin/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(function (response) {
        storeToken(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  handleUpdateHome(event) {
    const axiosConfig = {
      headers: { Authorization: `Bearer ${this.props.token}` },
    };
    axios
      .post(
        config.API_SERVER_URL + "/content/home",
        {
          summary: this.state.homeSummary,
          contact: this.state.homeContact,
          linkedInURL: this.state.homeLinkedInURL,
        },
        axiosConfig
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    const { path, url } = this.props.match;
    return (
      <Switch>
        <Route exact path={`${path}/`}>
          Hello Admin!
        </Route>
        <Route path={`${path}/login`}>
          <form onSubmit={this.handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChanged}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChanged}
              />
            </div>
            <div>
              <input type="submit" value="Log In" />
            </div>
          </form>
          <Link to={`${url}/home`}>Home</Link>
        </Route>
        <Route path={`${path}/home`}>
          <form onSubmit={this.handleUpdateHome}>
            <div>
              <label>Summary:</label>
              <input
                type="text"
                value={this.state.homeSummary}
                onChange={this.handleHomeSummaryChanged}
              />
            </div>
            <div>
              <label>Contact:</label>
              <input
                type="text"
                value={this.state.homeContact}
                onChange={this.handleHomeContactChanged}
              />
            </div>
            <div>
              <label>LinkedIn URL</label>
              <input
                type="text"
                value={this.state.homeLinkedInURL}
                onChange={this.handleHomeLinkedInURLChanged}
              />
            </div>
            <div>
              <input type="submit" value="Update" />
            </div>
          </form>
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.token };
};
const mapDispatchToProps = { storeToken };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));
