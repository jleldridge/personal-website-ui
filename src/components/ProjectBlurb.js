import React, { Component } from 'react';

class ProjectBlurb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: props.projectName,
            technologies: props.technologies,
            images: props.images,
            links: props.links,
            summary: props.children
        };
    }

    render() {
        const technologies = this.state.technologies ? this.state.technologies.map((tech) => 
            <p className="badge badge-secondary" style={{margin: '5px 5px 5px 0px'}}>{tech}</p>
        ) : "";

        const images = this.state.images ? this.state.images.map((image) =>
            <img style={{height:'300px', margin:'5px', display: 'block'}} src={image} alt="logo" />
        ) : "";

        const links = this.state.links ? this.state.links.map((link) =>
            <a style={{margin: '5px'}} className="btn btn-primary" href={link.href} target="_blank">{link.name}</a>
        ) : "";

        return (
            <div className="container">
                <h3>{this.state.projectName}</h3>
                <div>{technologies}</div>
                <div>{links}</div>
                <div>{images}</div>
                <p>{this.state.summary}</p>
            </div>
        );
    }
}

export default ProjectBlurb;