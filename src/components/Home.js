import React, { Component } from 'react';
import cat_blur from './images/cat_blur.png';

class Home extends Component {
  render(){
    return(
    <div className="home">
      <h1 className="large">Hey, i'm Daniel.</h1>
      <h1>I AM A CAT.</h1>
      <h2>I am also incredibly handsome. This is my site.</h2>
      <img alt="spinning cat head" src={cat_blur} />
    </div>
  )
  }
}

export default Home;
