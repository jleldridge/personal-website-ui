import React, { Component } from 'react';

class ProjectBlurb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: props.projectName,
            technologies: props.technologies,
            images: props.images,
            links: props.links,
            summary: props.children,
            id: props.id,
            style: props.style
        };
    }

    render() {
        const technologies = this.state.technologies ? this.state.technologies.map((tech, index) => 
            <p key={index} className="badge badge-secondary" style={{margin: '5px 5px 5px 0px'}}>{tech}</p>
        ) : "";

        const images = this.state.images ? this.state.images.map((image, index) =>
            <img key={index} style={{height:'300px', margin:'5px', display: 'block'}} src={image} alt="logo" />
        ) : "";

        const links = this.state.links ? this.state.links.map((link, index) =>
            <a key={index} style={{marginRight: '5px'}} className="badge badge-primary" href={link.href} target="_blank">{link.name}</a>
        ) : "";

        return (
            <div id={this.state.id} style={this.state.style}>
                <h4>{this.state.projectName}</h4>
                <div>{technologies}</div>
                <div>{links}</div>
                <div>{images}</div>
                <p>{this.state.summary}</p>
            </div>
        );
    }
}

export default ProjectBlurb;