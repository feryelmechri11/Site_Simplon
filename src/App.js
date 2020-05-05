import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import "./App.css";
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"
import Apropos from "./a propos/apropos.js"
import PageEquipe from "./equipe/pageequipe.js"

function App() {
  return (  
      <div className="App">
        <Router>
          <Navbar/>
          <Route path="/Team" exact component={PageEquipe} />
          <Route path="/About" exact component={Apropos} />
          <Footer/>
        </Router>
      </div>
  );
}

export default App;