import React from 'react';
import './contact.css'

let region=[  "Votre région" , "Ariana ","Béja" ,"Ben Arous", "Bizerte", "Gabes","Gafsa", "Jendouba", "Kairouan","Kasserine","Kebili"
,"La Manouba","Le Kef","Mahdia","Médenine","Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine"
,"Tozeur","Tunis","Zaghouan"]
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








    
    <div className="contact">
     <h4> Pour toute question, suggestion, projet, envie, envoyez-nous un message via le formulaire suivant : </h4>
     <form> 
         <label for="fname">Nom</label><br/>
         <input type="text" id="fname" name="firstname" placeholder="Votre nom.."/><br/>
                
        <label for="lname">Prénom</label><br/>
        <input type="text" id="lname" name="lastname" placeholder="Votre prénom.."/><br/>
        <label class="lab"for="birth">Date</label><br/>
        <input type="date"  name="Date"/><br/>
        <label class="lab"for="adress" placeholder="Email">Adresse E-mail</label><br/>
        <input type="text" id="adress" name="adress"/><br/>
        <label for="country">Région</label><br/>
        <div >
         <select className="custom-select">{ region.map((el,i)=>
                    <option className="selected" value={i} >{el}</option>)}
   
  </select></div>
        
        <label className="lab"for="identité">Vous êtes</label><br/>
        <div className="radio">
           <div>
        <input type="checkbox" name="particulier" value="Un particulier"/>
        <label className="lab1" for="particulier">Un particulier</label>
        </div>
        <div>
        <input type="checkbox" name="organisation" value="Une organisation"/>
        <label className="lab1"for="organisation">Une organisation</label>
        </div>
        </div>
          <label for="comment" className="lab" >Message</label><br/>
         <textarea name="Comment" rows="10" cols="60"></textarea><br/>   
         <button class="btn" type="button" onclick="alert('Votre message a été envoyé avec succès')">Envoyer</button>
            </form> 


   
    </div> 
  );
}

export default Contact_form;