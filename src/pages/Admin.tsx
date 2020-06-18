import React, { Component } from "react";
import { Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import config from "../config.json";
import { storeToken, clearToken, storeHomeContent } from "../redux/actions";
import AuthedRoute from "../components/AuthedRoute";
import { State } from "../types";

type Props = {
  storeHomeContent: (homeContent: string) => void;
  storeToken: (token: string) => void;
  clearToken: () => void;
  token: string;
  match: { url: string; path: string };
};

type AdminState = {
  username: string;
  password: string;
};

class Admin extends Component<Props, AdminState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    const { storeHomeContent } = this.props;
    const axiosConfig = {
      headers: { Authorization: `Bearer ${this.props.token}` },
    };
  }

  handleUsernameChanged(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChanged(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
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

  handleUpdate(event: React.FormEvent<HTMLFormElement>) {
    const { clearToken } = this.props;
    const axiosConfig = {
      headers: { Authorization: `Bearer ${this.props.token}` },
    };
    axios
      .post(config.API_SERVER_URL + "/admin/update", {}, axiosConfig)
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
          <div className="jumbotron jumbotron-fluid bg-dark mt-3 pl-5 pr-5 shadow-sm rounded">
            <form onSubmit={this.handleUpdate}>
              <div>
                <input type="submit" value="Update" />
              </div>
            </form>
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
      </Switch>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { homeContent } = state;
  return {
    homeContent,
    token: state.token,
  };
};
const mapDispatchToProps = { storeToken, clearToken, storeHomeContent };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
