import React, { Component } from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

class AuthedRoute extends Component {
  render() {
    return this.props.token ? (
      <Route {...this.props} />
    ) : (
      <Redirect to={this.props.redirect} />
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, null)(AuthedRoute);
