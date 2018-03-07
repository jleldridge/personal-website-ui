import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <h2 className="text-info">Education</h2>
                <div className="container">
                    <p>BS in Computer Science - <span className="font-italic">Unversity of North Carolina Greensboro</span></p>
                    <p className="text-secondary">August 2008 - December 2013</p>
                </div>
            </div>
        );
    }
}

export default Education;