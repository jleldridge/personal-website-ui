import React, { Component } from "react";
import { Link } from "../types";

type Props = {
  projectName: string;
  technologies: string[];
  images?: string[];
  links: Link[];
  children: any;
  id: string;
  style: any;
};

class ProjectBlurb extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const technologies = this.props.technologies
      ? this.props.technologies.map((tech, index) => (
          <p
            key={index}
            className="badge badge-secondary"
            style={{ margin: "5px 5px 5px 0px" }}
          >
            {tech}
          </p>
        ))
      : "";

    const images = this.props.images
      ? this.props.images.map((image, index) => (
          <img
            className="img-fluid"
            key={index}
            style={{ height: "auto", margin: "5px", display: "block" }}
            src={image}
            alt="logo"
          />
        ))
      : "";

    const links = this.props.links
      ? this.props.links.map((link, index) => (
          <a
            key={index}
            style={{ marginRight: "5px" }}
            className="badge badge-primary"
            href={link.href}
            target="_blank"
          >
            {link.name}
          </a>
        ))
      : "";

    if (this.props.images) {
      return (
        <div id={this.props.id} style={this.props.style}>
          <h4>{this.props.projectName}</h4>
          <div>{technologies}</div>
          <div>{links}</div>
          <div className="row">
            <div className="col-sm">
              <div>{images}</div>
            </div>
            <div className="col-sm">{this.props.children}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div id={this.props.id} style={this.props.style}>
          <h4>{this.props.projectName}</h4>
          <div>{technologies}</div>
          <div>{links}</div>
          <div>{images}</div>
          <div>{this.props.children}</div>
        </div>
      );
    }
  }
}

export default ProjectBlurb;
