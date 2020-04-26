import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

  





function Footer() {
    return (

<div className="footer1"> 
    <div className="footer-r1">
        <div className="container">
            <div className="row">

            <div class="col">
                <h2>Simplon Tunisie</h2>
                <ul>
                <li><a href="#">Event</a></li>
                <hr hr/>
                <li><a href="#">Support</a></li>
                <hr hr/>
                <li><a href="#">Career</a></li>
                <hr hr/>
                <li><a href="#">Blog</a></li>
                <hr hr/>
            </ul>
            </div>
            <div class="col">
                <h2> Follow us</h2>
                <p> Please Follow us on our Social Media in order to keep update. </p>
                <div className="social-media "> 
            <h2 class="social-media-title"> Rejoignez nous </h2>
            <a href="https://www.youtube.com/channel/UCTFYd2sOfjrJH1C421UyYuQ" className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
<a href="https://www.facebook.com/SimplonTunis/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/SimplonTunis" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/simplontunis"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
</a>
            </div>
            </div>
           

            <div class="col">
              
                <h2> Our Newletter </h2>
                <p> SIMPLON.CO, société par actions simplifiée est active depuis 6 ans.
                    Son effectif est compris entre 100 et 199 salariés.
                </p>
                <button class="button button3">newsletter </button>
        </div>
        </div>
            </div>
            </div>
            </div>
        
            
            

);
}

export default Footer;