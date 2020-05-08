import React from "react";
import "./contact.css";
import iconphone from "./iconephone.png";
import iconemail from "./iconemail.png";
import maploaction from "../map/maplocation.png";
import Map from "../map/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

let region = [
  "Votre région",
  "Ariana ",
  "Béja",
  "Ben Arous",
  "Bizerte",
  "Gabes",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kebili",
  "La Manouba",
  "Le Kef",
  "Mahdia",
  "Médenine",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Tozeur",
  "Tunis",
  "Zaghouan",
];
const social = [
  { name: "facebook", source: "https://www.facebook.com/SimplonTunis/%22%7D" },
  {
    name: "instagram",
    source: "https://www.instagram.com/simplontunis/%22%7D",
  },
  { name: "twitter", source: "https://twitter.com/SimplonTunis%22%7D" },
  { name: "youtube", source: "www.youtube.com" },
  {
    name: "linkedin",
    source: "https://www.linkedin.com/in/simplon-tunis-735987177/%22%7D",
  },
];
function Contact_form() {
  /*function verifMail(champ)
    {
       let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
       if(!regex.test(champ.value))
       {
          //surligne(champ, true);
          return false;
       }
       else
       {
          //surligne(champ, false);
          return true;
       }
    }*/

  return (
    <div className="contact_global">
      <div className="contact">
        {/*<h4> Pour toute question, suggestion, projet, envie, envoyez-nous un message via le formulaire suivant : </h4>*/}
        <form>
          <h6>ECRIVEZ-NOUS</h6>
          <p className="pargaraphe_contact">
            N'hésitez pas à nous contacter, notre équipe veillera à traiter
            votre demande dans les plus brefs délais.
          </p>
          <label for="fname">Nom</label>
          <br />
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Votre nom.."
          />
          <br />

          <label for="lname">Prénom</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Votre prénom.."
          />
          <br />
          <label class="lab" for="birth">
            Date
          </label>
          <br />
          <input type="date" name="Date" />
          <br />
          <label class="lab" for="adress" placeholder="Email">
            Adresse E-mail
          </label>
          <br />
          <input type="text" id="adress" name="adress" />
          <br />
          <label for="country">Région</label>
          <br />
          <div>
            <select className="custom-select">
              {region.map((el, i) => (
                <option className="selected" value={i}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <label className="lab" for="identité">
            Vous êtes
          </label>
          <br />
          <div className="radio">
            <div>
              <input
                type="checkbox"
                name="particulier"
                value="Un particulier"
              />
              <label className="lab1" for="particulier">
                Un particulier
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="organisation"
                value="Une organisation"
              />
              <label className="lab1" for="organisation">
                Une organisation
              </label>
            </div>
          </div>
          <label for="comment" className="lab">
            Message
          </label>
          <br />
          <textarea name="Comment" rows="2" cols="60"></textarea>
          <br />
          <button
            class="btn"
            type="button"
            onclick="alert('Votre message a été envoyé avec succès')"
          >
            Envoyer
          </button>
        </form>
      </div>

      <div className="contact2">
        <h4>Contactez-nous</h4>
        <ul>
          <li>
            <img className="image_contact" src={iconphone} alt="" /> 55 077 406
          </li>
          <li>
            <img className="image_contact" src={iconemail} alt="" /> contact.tn@simplon.co
          </li>
          <li>
            <img className="image_contact" src={maploaction} alt="" />
            <span>Immeuble Le15, 15 Avenue de Carthage 1001 Tunis</span>
          </li>
        </ul>
        <Map />
        <div className="social-container">
          <h3> Abonnez vous sur nos réseaux sociaux </h3>
          <a
            href="https://www.youtube.com/channel/UCTFYd2sOfjrJH1C421UyYuQ"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact_form;
