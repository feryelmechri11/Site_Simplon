import React from "react";
import "./App.css";
import Navbar from "./navbar/navbar"
import Player from "./video/video"
import Pink from "./bacbox/bacbox"
import Card from "./card/card"
import Img_parag from "./img_parag/img_parag"
import Valeur from "./valeur/valeur"






function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Player />
      <Pink />
      <Card />
      <Img_parag />
      <Pink />
      <Valeur />
    </div>
   
  );
}

export default App;