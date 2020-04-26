import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (

    <div class="social-container">
      <h3> Abonnez vous sur nos réseaux sociaux </h3>
      <a href="https://www.youtube.com/channel/UCTFYd2sOfjrJH1C421UyYuQ"
  className="youtube social">
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

  );
}