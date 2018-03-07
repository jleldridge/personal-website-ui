import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <h2 className="text-info">Education</h2>
                <div className="container">
                    <p className="text-secondary mb-0">August 2008 - December 2013</p>
                    <p>BS in Computer Science - <span className="font-italic">Unversity of North Carolina Greensboro</span></p>
                </div>
            </div>
        );
    }
}

export default Education;