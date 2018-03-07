import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <h2 className="text-info">Experience</h2>
                <div className="container">
                    <p className="text-secondary mb-0">January 2014 - PRESENT</p>
                    <p>Software Developer - <span className="font-italic">Datawatch Corporation</span></p>
                </div>
                <div className="container mt-3">
                    <p className="text-secondary mb-0">August 2013 - December 2013</p>
                    <p>Intern - <span className="font-italic">Datawatch Corporation</span></p>
                </div>
                <div className="container mt-3">
                    <p className="text-secondary mb-0">January 2012 - April 2013</p>
                    <p>Computer Science Lab Tutor - <span className="font-italic">University of North Carolina Greensboro</span></p>
                </div>
            </div>
        );
    }
}

export default Experience;