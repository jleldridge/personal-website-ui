import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <h2 className="text-info">Skills</h2>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm">
                            <h4>Languages</h4>
                            <ul className="list-unstyled mt-3">
                                <li>C#</li>
                                <li>XAML</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>Java</li>
                            </ul>
                        </div>
                        <div className="col-sm">
                            <h4>Frameworks</h4>
                            <ul className="list-unstyled mt-3">
                                <li>.NET</li>
                                <li>UWP</li>
                                <li>ReactJS</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm">
                            <h4>Tools</h4>
                            <ul className="list-unstyled mt-3">
                                <li>Visual Studio</li>
                                <li>IntelliJ</li>
                                <li>NodeJS</li>
                                <li>NPM</li>
                                <li>Git</li>
                                <li>Mercurial</li>
                            </ul>
                        </div>
                        <div className="col-sm">
                            <h4>Concepts</h4>
                            <ul className="list-unstyled mt-3">
                                <li>MVVM</li>
                                <li>UX Design</li>
                                <li>RESTful Architecture</li>
                                <li>Agile</li>
                                <li>Scrum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;