import React from 'react';


const social = [
    {name : "facebook" , source : "https://www.facebook.com/SimplonTunis/%22%7D"},
    {name : "instagram" , source : "https://www.instagram.com/simplontunis/%22%7D"},
    {name : "twitter" , source : "https://twitter.com/SimplonTunis%22%7D"}, 
    {name : "youtube" , source : "www.youtube.com"},
    {name : "linkedin" , source :"https://www.linkedin.com/in/simplon-tunis-735987177/%22%7D"}
  ]
  function SocialMedia(props) {
  
      return(
          <div className="social-media "> 
              <h2 class="social-media-title"> Rejoignez nous </h2>
              <br/> 
              <div className="media">
                  { props.social.map(  el =>
                  <div>
                      <a href={el.source} target="_Blanck" className={el.name}> {el.name} </a>
  
                  </div>
              )}
              </div>
          </div>
  
  
      )
  }
  export default SocialMedia ;