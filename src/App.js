import React from "react";
import "./App.css";
import Example from "./Acceuil/Navbar";
import Footer from "./footer/footer";
import Acceuil from "./Acceuil/Accueil";
import Apropos from "./a propos/apropos.js";
import PageEquipe from "./equipe/pageequipe.js";
import Contact_form from "./CONTACT/contact/contact"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Example />
        <Route path="/" exact component={Acceuil} />
        <Route path="/equipe" exact component={PageEquipe} />
        <Route path="/Apropos" exact component={Apropos} />
        <Route path="/contact" exact component={Contact_form} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
