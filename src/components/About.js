import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render(){
    return(
    <div>
      <div>
        <h1>I am pretty cool.</h1>
        <h3>Look at all of these cool pictures of me</h3>
      </div>
      <div>
        <img src="http://baconmockup.com/300/300" />
        <img src="http://baconmockup.com/500/300" />
        <img src="http://baconmockup.com/400/300" />
        <img src="http://baconmockup.com/500/300" />
        <img src="http://baconmockup.com/200/300" />
        <img src="http://baconmockup.com/300/300" />
        <img src="http://baconmockup.com/200/300" />
        <div>I have the look</div>
        <img src="http://baconmockup.com/300/300" />
        <img src="http://baconmockup.com/500/300" />
        <img src="http://baconmockup.com/400/300" />
      </div>
    </div>
  )
  }
}

export default About;
