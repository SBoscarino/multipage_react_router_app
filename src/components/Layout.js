import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Layout extends Component {
render(){
  return(
    <div className="layout">
      <nav className="navbar">
        <NavLink activeClassName="selected" exact to="/">Home</NavLink>
        <NavLink activeClassName="selected" to="/About">About</NavLink>
        <NavLink activeClassName="selected" to="/Social">Social</NavLink>
        <NavLink activeClassName="selected" to="/Find">Find Me</NavLink>
      </nav>
      <div className="items">
        {this.props.children}
      </div>
    </div>
  )
}
}
export default Layout;
