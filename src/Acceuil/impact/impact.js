import React from 'react'
import "./impact.css"
import immg0 from "./example.jpg"
import immg1 from "./culture.jpg"
const u = [
    {title :"Qui Sommes nous ?",
    paragraph:"Au coeur du projet de Simplon : le numérique comme levier d’inclusion, d’insertion et d’emploi, mais également un catalyseur de mixité, de diversité et d’innovation sociales. Simplon met ainsi son énergie au service de l’inclusion de publics spécifiques (personnes en situation de handicap, réfugiées, femmes, jeunes non diplômés, primo-arrivants, etc.) au sein des formations Simplon tout en favorisant autant que possible la mixité de genre, d’âge et d’origines sociale et géographique. Cette approche très élargie de la diversité est au bénéfice des progressions pédagogiques",
    button:"continuer"
    }
      
]


function Impact () {
    return(
        <div>
        <h1 className="title">Impact</h1> 
        <div className="img_text">
            <img className="image" src={immg0} ></img>
            <div className="mission">
                
                {u.map (element => <div className=""> 
                                     <p>{element.paragraph}</p> 
                                     <button >{element.button}</button>
                                    </div> )}
            
                  
            </div>
            
        </div>

        </div>

        
    )
}
export default Impact;