import React from "react";
import "./footer.css"


function Footer() {
  return (
    <div className="footer1">
      <div className="footer-r1">
        <div className="container">
          <div className="row">
            <div class="col">
              <h2>Simplon Tunisie</h2>
              <ul>
                <li>
                  <a href="#">Event</a>
                </li>
                <hr hr />
                <li>
                  <a href="#">Support</a>
                </li>
                <hr hr />
                <li>
                  <a href="#">Career</a>
                </li>
                <hr hr />
                <li>
                  <a href="#">Blog</a>
                </li>
                <hr hr />
              </ul>
            </div>
            <div class="col">
              <h2> Réseaux Sociaux </h2>
              <p>
              RETROUVEZ-NOUS SUR
              </p>{/*
              <div className="social-media">
                <h2 class="social-media-title"> Rejoignez nous </h2>
                <a
                  href="https://www.youtube.com/channel/UCTFYd2sOfjrJH1C421UyYuQ"
                  className="youtube social"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                  <a
                    href="https://www.facebook.com/SimplonTunis/"
                    className="facebook social"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a
                    href="https://twitter.com/SimplonTunis"
                    className="twitter social"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a
                    href="https://www.instagram.com/simplontunis"
                    className="instagram social"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>

              </div>*/}
            </div>

            <div className="col">
              <h2> Newsletter </h2>
              <p>
              Inscrivez-vous à nos communications pour recevoir nos nouveautés !
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
