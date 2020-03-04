import React, { Component } from "react";
import $ from "jquery";

class SmoothScrollAnchor extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <a
        id={this.props.id}
        onClick={this.handleClick}
        className={this.props.className}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    );
  }

  handleClick(e) {
    e.preventDefault();
    var hash = this.props.href;
    const carousel = $("#parentCarousel");
    switch (hash) {
      case "#home":
        carousel.carousel(0);
        break;
      case "#skills":
        carousel.carousel(1);
        break;
      case "#experience":
        carousel.carousel(2);
        break;
      case "#education":
        carousel.carousel(3);
        break;
      case "#projects":
        carousel.carousel(4);
        break;
    }
    setTimeout(() => {
      window.location.hash = hash;
    }, 500);
  }
}

export default SmoothScrollAnchor;
