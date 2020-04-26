import React from "react";
import"./video.css"
import ReactPlayer from "react-player"


function Player(){
    return(
        <ReactPlayer className="myvideo" url="https://www.youtube.com/embed/aArqvxpvdHE?autoplay=1" controls={true} />
    )
}
export default Player;
