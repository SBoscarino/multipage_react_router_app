import React, { Component } from 'react';
import cat_blur from './images/cat_blur.png';

class Home extends Component {
  render(){
    return(
    <div className="home">
      <h1>I AM A CAT</h1>
      <h2>and this is my site</h2>
      <div className="test">Hey</div>
      <img alt="spinning cat head" src={cat_blur} />
    </div>
  )
  }
}

export default Home;
