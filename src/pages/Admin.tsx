import React, { Component } from "react";
import { Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import config from "../config.json";
import { storeToken, clearToken, storeHomeContent } from "../redux/actions";
import AuthedRoute from "../components/AuthedRoute";
import { State, HomeContent } from "../types";

type Props = {
  storeHomeContent: (homeContent: HomeContent) => void;
  storeToken: (token: string) => void;
  clearToken: () => void;
  homeSummary: string;
  homeContact: string;
  homeLinkedInURL: string;
  token: string;
  match: { url: string; path: string };
};

type AdminState = {
  username: string;
  password: string;
  homeSummary: string;
  homeContact: string;
  homeLinkedInURL: string;
};

class Admin extends Component<Props, AdminState> {
  constructor(props: Props) {
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

  componentDidMount() {
    const {
      storeHomeContent,
      homeSummary,
      homeContact,
      homeLinkedInURL,
    } = this.props;
    const axiosConfig = {
      headers: { Authorization: `Bearer ${this.props.token}` },
    };
    axios
      .get(config.API_SERVER_URL + "/content/home", axiosConfig)
      .then((response) => {
        storeHomeContent(response.data);
        this.setState({ homeSummary, homeContact, homeLinkedInURL });
      })
      .catch((error) => {
        this.props.clearToken();
        console.log(error);
      });
  }

  handleUsernameChanged(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChanged(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  handleHomeSummaryChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ homeSummary: event.target.value });
  }

  handleHomeContactChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ homeContact: event.target.value });
  }

  handleHomeLinkedInURLChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ homeLinkedInURL: event.target.value });
  }

  handleLogin(event: React.FormEvent<HTMLFormElement>) {
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

  handleUpdateHome(event: React.FormEvent<HTMLFormElement>) {
    const { clearToken } = this.props;
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
      .then(function (response) {})
      .catch(function (error) {
        console.log(error.response);
        if (error.response.status >= 400 && error.response.status < 500) {
          clearToken();
        }
      });
    event.preventDefault();
  }

  render() {
    const { path, url } = this.props.match;
    const loginRedirect = `${path}/login`;
    return (
      <Switch>
        <AuthedRoute exact path={`${path}`} redirect={loginRedirect}>
          <div>
            <Link to={`${path}/home`}>Home</Link>
          </div>
          <div>
            <Link to={`${path}/home`}>Home</Link>
          </div>
          <div>
            <Link to={`${path}/home`}>Home</Link>
          </div>
          <div>
            <Link to={`${path}/home`}>Home</Link>
          </div>
        </AuthedRoute>
        <Route path={`${path}/login`}>
          {this.props.token ? (
            <Redirect to={`${path}/`} />
          ) : (
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
          )}
        </Route>
        <AuthedRoute path={`${path}/home`} redirect={loginRedirect}>
          <div className="jumbotron jumbotron-fluid bg-dark mt-3 pl-5 pr-5 shadow-sm rounded">
            <form onSubmit={this.handleUpdateHome}>
              <div>
                <label className="text-secondary mb-0">Summary:</label>
                <div>
                  <textarea
                    data-type="text"
                    value={this.state.homeSummary}
                    onChange={this.handleHomeSummaryChanged}
                  />
                </div>
              </div>
              <div>
                <label className="text-secondary mb-0">Contact:</label>
                <div>
                  <textarea
                    data-type="text"
                    value={this.state.homeContact}
                    onChange={this.handleHomeContactChanged}
                  />
                </div>
              </div>
              <div>
                <label className="text-secondary mb-0">LinkedIn URL</label>
                <div>
                  <textarea
                    data-type="text"
                    value={this.state.homeLinkedInURL}
                    onChange={this.handleHomeLinkedInURLChanged}
                  />
                </div>
              </div>
              <div>
                <input type="submit" value="Update" />
              </div>
            </form>
            <div>
              <Link to={`${path}`}>Back</Link>
            </div>
          </div>
        </AuthedRoute>
      </Switch>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { homeContent } = state;
  return {
    homeSummary: homeContent && homeContent.summary,
    homeContact: homeContent && homeContent.contact,
    homeLinkedInURL: homeContent && homeContent.linkedInURL,
    token: state.token,
  };
};
const mapDispatchToProps = { storeToken, clearToken, storeHomeContent };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
