import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
render(){
  return(
    <div className="layout">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Social">Social</Link>
        <Link to="/Find">Find Me</Link>
      </nav>
      <div className="items">
        <h1 className="main-header">Meow</h1>
        <hr/>
        {this.props.children}
      </div>
    </div>
  )
}
}
export default Layout;
