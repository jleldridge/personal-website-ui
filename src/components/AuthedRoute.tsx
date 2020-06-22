import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from "../types";

import { Route, Redirect } from "react-router-dom";

type Props = {
  token?: string;
  redirect: string;
  children: any;
  exact?: boolean;
  path: string;
};

class AuthedRoute extends Component<Props> {
  render() {
    return this.props.token ? (
      <Route {...this.props}>{this.props.children}</Route>
    ) : (
      <Redirect to={this.props.redirect} />
    );
  }
}

const mapStateToProps = (state: State) => {
  return { token: state.token };
};

export default connect(mapStateToProps, null)(AuthedRoute);
