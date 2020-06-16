import React, { Component } from "react";

type Props = {
  title: string;
};

class Page extends Component<Props> {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-light mt-3 pl-5 pr-5 shadow-sm rounded">
        <h1 className="display-5 text-info">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Page;