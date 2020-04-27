import React from 'react'
import "./qui_somme_nous.css"

import immg1 from "./culture.jpg"

const n = [
    {title :"Notre visions",
    paragraph:"Au coeur du projet de Simplon : le numérique comme levier d’inclusion, d’insertion et d’emploi, mais également un catalyseur de mixité, de diversité et d’innovation sociales. Simplon met ainsi son énergie au service de l’inclusion de publics spécifiques (personnes en situation de handicap, réfugiées, femmes, jeunes non diplômés, primo-arrivants, etc.) au sein des formations Simplon tout en favorisant autant que possible la mixité de genre, d’âge et d’origines sociale et géographique. Cette approche très élargie de la diversité est au bénéfice des progressions pédagogiques",
    button:"continuer"
    }
      
]


function qui () {
    return(

        <div>
            <h1 className="tit">Qui Sommes Nous ?</h1> 
            <div className="all">
            <div className="vision">
                
        
            {n.map (element => <div className="parag"> 
                                     <p>{element.paragraph}</p> 
                                     <button className="btn_qui">{element.button}</button>
                                    </div> )}
            </div>
            <img className="image" src={immg1} ></img>  
            
        </div>
        </div>
    );
}
export default qui;