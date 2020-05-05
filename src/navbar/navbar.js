import React from "react";
import "./navbar.css"


function Navbar (){
    return(
        <div class="topnav">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Team">Team</a>
        <a href="/Contact">Contact</a>
        </div>
    );
}
export default Navbar;