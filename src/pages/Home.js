import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid bg-dark">
                <h1 className="display-3 text-info">Hello!</h1>
                <p className="lead">
                    I am Jeffrey Eldridge, a software developer based out of Portland, Oregon.
                    My career focus so far has been on the C#, WPF, XAML, .NET software stack, 
                    but I try to pick up new tools in my spare time. I am particularly interested
                    in JavaScript, which is what I tend to use for personal projects, but I have
                    also used Python, Java, C, and C++ to some degree for either school, work,
                    or personal projects.
                </p>
            </div>
        );
    }
}

export default Home;