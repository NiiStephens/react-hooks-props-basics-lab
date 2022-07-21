import React from "react";
import Links from "./Links"

function About(props) {
  

    //Conditional Rendering Has To Be Employed To Show the Presences of the <p> tag
    
    let presenceBio = (
      <div id="about">
      <h2>About Me</h2>
      <p>{props.bio} <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" /></p>
      {/* add your <Links /> component here */}
      <Links github = {props.links.github} linkedin = {props.links.linkedin} />
    </div>

    );

    let absentBio = (
      <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github = {props.links.github} linkedin = {props.links.linkedin} />
    </div>
    )

    //Statement to Render the passing of the p tag
    const validateBio = props.bio
    if (validateBio){
      return presenceBio
    }
    else{
      return absentBio
    }
    }
    

export default About;
