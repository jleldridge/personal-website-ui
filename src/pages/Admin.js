import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";
import store from "../Store";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChanged(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  handleLogin(event) {
    axios
      .post("http://localhost:9000/admin/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(function (response) {
        store.dispatch({ type: "USER_TOKEN", token: response.data.token });
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
        </Route>
      </Switch>
    );
  }
}

export default withRouter(Admin);
