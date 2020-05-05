import React from 'react';
import Carous from './carousel-acc'
import Card from './card/card'
import Qui from './qui_somme_nous/qui_somme_nous'
import Impact from './impact/impact'
import Partners from './partners/partners'



function Acceuil() {
  return (
  <div>
    <Carous/>
    <Card/>
    <Qui/>
    <Impact/>
    <Partners/>
   

  </div>


);
}

export default Acceuil;