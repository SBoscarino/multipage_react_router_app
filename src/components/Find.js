import React, { Component } from 'react';

class Find extends Component {
  render(){
    return(
    <div>


    //Left side
      <div>
        <h1>Hey, folks. How about we socialize?</h1>
      </div>
      <div>
        <p>Here is a cool place. It is where I am from. You should adopt cats from there.</p>
        <iframe     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13389.515740959312!2d-96.847438!3d32.967403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e75dae634dfb655!2sOperation+Kindness!5e0!3m2!1sen!2sus!4v1504129290731
       &zoom=17&key=AIzaSyBX3Z00EKGNzw9butbHQhUnsv2xIW3Y9GE" width="500" height="400">
        </iframe>
      </div>
      <div className="contactMe">
      <h1>Contact:</h1>
        <ul>
          <li>Phone Number: 000-000-0000</li>
          <li>Address: 1500 YouWish Lane Awesomeville, TX</li>
          <li>Email: DavidIsTheBestCatto@catmail.com</li>
        </ul>

        //right side
        <h1>Skills:</h1>
        <ul>
          <li>Being a jerk</li>
          <li>Pooping</li>
          <li>Scratching things</li>
          <li>Running down the hallway promptly at 3am.</li>
          <li>Cute</li>
        </ul>
      </div>
    </div>
  )
  }
}
export default Find;
