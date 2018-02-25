import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import myPicture from './me.jpg';

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
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container">
            {/* <img src={myPicture} className="My-header-picture" alt="logo" /> */}
            <div className="navbar-brand">Jeffrey Eldridge</div>
            <NavMenu items={menuItems} />
          </div>
        </nav>
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/github" component={() => {return <div>Hello Github!</div>}} />
        </div>
      </div>
    );
  }
}

export default App;
