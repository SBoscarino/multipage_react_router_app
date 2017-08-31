import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Work from './Work.js';

class Layout extends Component {
render(){
  return(
    <div>
      <nav className="navbar">
        <Link to="/Home"><li>Home</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Work"><li>Social</li></Link>
        <Link to="/Find"><li>Find Me</li></Link>
      </nav>
      <div className="items">
      <h1>Meow</h1>
      <hr/>
        {this.props.children}
      </div>
    </div>
  )
}
}
export default Layout;
