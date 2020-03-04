import React, { Component } from "react";

class Page extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-light mt-3 pl-5 pr-5 shadow-sm rounded">
        <h1 className="display-3 text-info">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
