import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Layout extends Component {
render(){
  return(
    <div className="layout">
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Social">Social</NavLink>
        <NavLink to="/Find">Find Me</NavLink>
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
