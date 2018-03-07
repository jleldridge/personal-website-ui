import React, { Component } from 'react';
import SmoothScrollAnchor from '../components/SmoothScrollAnchor';

class Experience extends Component {
    render() {
        return (
            <div>
                <h2 className="text-info">Experience</h2>
                <div className="container mb-4">
                    <p className="text-secondary mb-0">January 2014 - PRESENT</p>
                    <p className="mb-0 text-success">Software Developer - <span className="font-italic">Datawatch Corporation</span></p>
                    <ul>
                        <li>
                            Helped design and develop <SmoothScrollAnchor href="#monarch">Monarch Complete </SmoothScrollAnchor>
                            using C#, XAML, WPF, and .NET.
                        </li>
                        <li>
                            Worked on UI and streaming data plugins for <SmoothScrollAnchor href="#panopticon">Datawatch Panopticon </SmoothScrollAnchor>
                            in Stockholm using C#, XAML, WPF, .NET, and Java.
                        </li>
                    </ul>
                </div>
                <div className="container mt-3">
                    <p className="text-secondary mb-0">August 2013 - December 2013</p>
                    <p className="mb-0 text-success">Intern - <span className="font-italic">Datawatch Corporation</span></p>
                    <ul>
                        <li>Performed quality assurance testing for version 12 of Datawatch Monarch.</li>
                        <li>Created continuous integration build scripts for Datawatch Monarch through Atlassian's Bamboo platform.</li>
                    </ul>
                </div>
                <div className="container mt-3">
                    <p className="text-secondary mb-0">January 2012 - April 2013</p>
                    <p className="mb-0 text-success">Computer Science Lab Tutor - <span className="font-italic">University of North Carolina Greensboro</span></p>
                    <ul>
                        <li>Assisted students with understanding computer science lab assignments.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Experience;