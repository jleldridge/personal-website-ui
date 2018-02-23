import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import myPicture from './me.jpg';
import './App.css';

import NavMenu from './NavMenu.js'
import Resume from './resume/Resume.js';
import Projects from './Projects.js'

class App extends Component {
  render() {
    var menuItems = [
      { name: 'Resume', href: '/resume' },
      { name: 'Projects', href: '/projects' },
      { name: 'GitHub', href: '/github' }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={myPicture} className="My-header-picture" alt="logo" />
          <h1 className="App-title">Jeffrey Eldridge</h1>
        </header>
        <NavMenu items={menuItems} />
        <div className="App-body">
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/github" component={() => window.location = 'https://github.com/jleldridge'} />
        </div>
      </div>
    );
  }
}

export default App;
