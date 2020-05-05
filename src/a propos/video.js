import React from "react";
import"./video.css"



function Player(){
    return(
        <ReactPlayer className="myvideo" url="https://www.youtube.com/embed/aArqvxpvdHE?autoplay=1" controls={true} />
    )
}
export default Player;