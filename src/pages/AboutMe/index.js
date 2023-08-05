import React from "react";
import "./about.css";
export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-top">
        <div className="about-info">
          Hello There ✋,I am,
          <br /> <span className="info-name">Regan Crowley</span>.
          <br /> I have fun working with Front end and backend development. I love to play Chess and I teach chess part time. 
          <br /> With all of my practicing I am able to recognise coding that is off and memorize the structure.
          <br /> I have a Bachelor of IT and a Diploma in software Development.
      
        </div>
        <div className="about-photo">
          <img
            src={require("../../assets/pfp.jpg")}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}