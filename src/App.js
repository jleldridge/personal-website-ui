import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import myPicture from './me.jpg';
import './App.css';

import NavMenu from './pages/NavMenu.js'
import Resume from './pages/Resume.js';
import Projects from './pages/Projects.js';
import Home from './pages/Home.js';

class App extends Component {
  render() {
    var menuItems = [
      { name: 'Home', href: '/' },
      { name: 'Resume', href: '/resume' },
      { name: 'Projects', href: '/projects' },
      { name: 'GitHub', href: '/github' }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={myPicture} className="My-header-picture" alt="logo" />
          <h1 className="App-title">Jeffrey Eldridge</h1>
          <NavMenu items={menuItems} />
        </header>
        <div className="App-body">
          <Route exact path="/" component={Home}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/github" component={() => {return <div>Hello Github!</div>}} />
        </div>
      </div>
    );
  }
}

export default App;
