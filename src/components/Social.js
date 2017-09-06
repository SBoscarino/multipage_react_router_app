import React, { Component } from 'react';

class Social extends Component {
  render(){
    return(
    <div className="social">

      <div className="sub-header">
        <h1>Some of the best things in life are spinny things, right?</h1>
        <h2>See some things I find exhilarating by clicking on them.</h2>
        <h2>You know you came here for spinnies. You are welcome.</h2>
      </div>
      <div className="warning">WARNING!</div> <div>All icons will open irrevelant tabs to youtube videos! Videos are acceptable for ages 13+ (SFW).</div>
      <div>
      <a target="_blank"  href='https://www.youtube.com/watch?v=5dbG4wqN0rQ'>
        <img alt="dog memes"  src="  http://downloadicons.net/sites/default/files/dog-icon-86451.png" />
      </a>
      <a className="fast" target="_blank"  href='https://www.youtube.com/watch?v=WIKqgE4BwAY'>
        <img alt="chocolate"  src="  https://d30y9cdsu7xlg0.cloudfront.net/png/202529-200.png" />
      </a>
        <a target="_blank"  href='https://www.youtube.com/watch?v=7wmqPW1N5Dk'>
          <img alt="twitter icon"  src="https://maxcdn.icons8.com/Share/icon/p1em/Music//microphone1600.png" />
        </a>
        <a target="_blank"  href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          <img alt="Rick"  src="https://d30y9cdsu7xlg0.cloudfront.net/png/10887-200.png" />
        </a>
        <a target="_blank"  href='https://youtu.be/SFsHSHE-iJQ?t=1m56s'>
          <img alt="mad world"  src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Casette-Tape-icon.png" />
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=Y-dMSstLDqM">
          <img alt="coffee icon"  src="http://icon-icons.com/icons2/591/PNG/512/barista-icons_coffee-to-go_icon-icons.com_55422.png" />
          <a target="_blank"  href='https://www.youtube.com/watch?v=yzC4hFK5P3g'>
            <img alt="ponponpon"  src="https://d30y9cdsu7xlg0.cloudfront.net/png/4059-200.png" />
          </a>
        </a>
        <a target="_blank"  href="https://youtu.be/wjRbbECZeZw?t=23s">
          <img alt="chicken icon"  src=" https://d30y9cdsu7xlg0.cloudfront.net/png/33759-200.png" />
        </a>
      </div>
      <div className="words">
        <p>By the way, if you like all my weird links, you should totally hire me. We'd be great friends. :)</p>
      </div>
    </div>
  )
  }
}

export default Social;
