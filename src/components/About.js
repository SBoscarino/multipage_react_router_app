import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render(){
    return(
    <div className="about">
      <div className="sub-header">
        <h2>I am pretty cool.</h2>
        <h3>Look at all of these cool pictures of me</h3>
      </div>
      <div className="image-list">
        <div><img src="http://baconmockup.com/300/300" /></div>
        <div><img src="http://fillmurray.com/300/300" /></div>
        <div><img src="http://placekitten.com/g/300/300" /></div>
        <div><img src="http://fillmurray.com/300/300" /></div>
        <div><img src="http://placekitten.com/g/300/300" /></div>
        <div><img src="http://baconmockup.com/300/300" /></div>
        <div><img src="http://baconmockup.com/300/300" /></div>
        <div><p>I have the look</p></div>
        <div><img src="http://baconmockup.com/300/300" /></div>
        <div><img src="http://fillmurray.com/300/300" /></div>
        <div><img src="http://baconmockup.com/300/300" /></div>
      </div>
    </div>
  )
  }
}

export default About;
