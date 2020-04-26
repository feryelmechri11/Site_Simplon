import React from "react"
import "./card.css"


const u = [
{title :"Notre mission", paragraph:"Au coeur du projet de Simplon: le numérique comme", button:"suite" },
{title :"Notre visions", paragraph:"Simplon revendique un numérique  d’intérêt général qui concourt", button:"suite" },
{title :"Notre valeur", paragraph:"Nous nous appuyons sur 3 valeurs fortes, qui sont", button:"suite" },
]

function Card () {
    return(
        <div className = "cards">

        {u.map (element => <div className="card"> 
                                <h4>{element.title}</h4> 
                                <p>{element.paragraph}</p> 
                                <button>{element.button}</button>
                            </div> )}
        </div>
    )
}
export default Card;
