import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Social extends Component {
  render(){
    return(
    <div className="social">

      <div className="sub-header">
        <h2>Hey, baby. How about we get social.</h2>
        <h3>Ooooo, spinny things!</h3>
      </div>
      <div>
        <img src="https://image.flaticon.com/icons/png/512/8/8800.png" />
        <img src="http://www.iconninja.com/files/648/564/864/repository-git-media-hovytech-circle-github-social-icon.svg" />
        <img src="http://icon-icons.com/icons2/591/PNG/512/barista-icons_coffee-to-go_icon-icons.com_55422.png" />
      </div>
    </div>
  )
  }
}

export default Social;