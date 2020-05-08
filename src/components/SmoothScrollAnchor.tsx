import React, { Component } from "react";
import $ from "jquery";

type Props = {
  id?: string;
  className?: string;
  href: string;
};

class SmoothScrollAnchor extends Component<Props> {
  constructor(props: Props) {
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

  handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
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
  }
}

export default SmoothScrollAnchor;
