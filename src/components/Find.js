import React, { Component } from 'react';

class Find extends Component {
  render(){
    return(
    <div className="find">


      <div className="sub-header">
        <h2>I knew you liked me. When would you like to meet?</h2>
      </div>

      <div className="contact-area">
        <div className="map">
          <p>Here is a cool place. It is where I am from. You should adopt cats from there.</p>
          <p>Also, Best Thai (shown on map) is REALLY GOOD.</p>
          <iframe title="map" height="400px"   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13389.515740959312!2d-96.847438!3d32.967403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e75dae634dfb655!2sOperation+Kindness!5e0!3m2!1sen!2sus!4v1504129290731
         &zoom=17&key=AIzaSyBX3Z00EKGNzw9butbHQhUnsv2xIW3Y9GE">
          </iframe>
        </div>
        <div className="contact-me">
        <div className="contact">
          <h1>Contact:</h1>
          <ul>
            <li>Phone Number: 000-000-0000</li>
            <li>Address: 1500 YouWish Lane Awesomeville, TX</li>
            <li>Email: DanielIsTheBestCatto@catmail.com</li>
          </ul>
        </div>
        <div className="skillz">
          <h1>Skills:</h1>
          <ul>
            <li>Being a jerk</li>
            <li>Pooping</li>
            <li>Scratching things</li>
            <li>Running down the hallway promptly at 3am</li>
            <li>Very cute</li>
            <li>Great with getting in the way at the most pivotal of moments</li>
            <li>Professional keyboard warmer</li>
            <li>So, so fresh</li>
          </ul>
        </div>
        </div>
      </div>

    </div>
  )
  }
}
export default Find;
