import React from 'react'
import "./equipe.css"
import mouna from "./mouna.jpeg"
import saif from "./saif.jpg"
import syrine from "./syrine.jpg"


const tab =[
    {statue1:"DIRECTRICE GÉNÉRALE",nom1:"mouna",imgFile:"saif.jpg"},
    {statue2:" FORMATEUR",nom2:"saif"},
    {statue3:"CHEF DE FABRIQUE",nom3:" Auguste Auguste"},
    

]


const Equipe =() => {

    return(
        <div>
            <h1>our amazing team</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
            <section className="pinBox"></section>

            <div className="formateur">

                
                {tab.map ( el => 
                                
                            <div className ="eqp">
                                <div>
                                <img className="photo" src= {syrine}  ></img>
                                    <h1>{el.nom1}</h1>
                                    <h4> {el.statue1} </h4>
                                </div>   
                                <div>
                                    <h1>{el.nom2}</h1>
                                    <h4> {el.statue2} </h4>
                                </div>
                                <div>
                                    <h1>{el.nom3}</h1>
                                    <h4> {el.statue3} </h4>
                                </div>

                            </div>



                )}




            </div>





        </div>
    )

} 
export default Equipe