import React from "react";
import css from "../Image/css.jpg";
import html from "../Image/html.jpg";
import java from "../Image/java.jpg";
import database from "../Image/database.jpg";
import program from "../Image/python.jpg";
import design from "../Image/graphic design.jpg";





const Skills = () => {
    return (
      <div className="projects-container" id="skills">
        <div className="Skills-form">
        <ul>
          <li>
            <img src={java}alt="HTML5" />
            <p>JAVA</p>
          </li>
          </ul>

          </div>
          <div className="Skills-form">
        <ul>
          <li>
            <img src={css}alt="HTML5" />
            <p>CSS</p>
          </li>
          </ul>

          </div>
          <div className="Skills-form">
        <ul>
          <li>
            <img src={html}alt="HTML5" />
            <p>HTML5</p>
          </li>
          </ul>

          </div>
          <div className="Skills-form">
        <ul>
          <li>
            <img src={database}alt="HTML5" />
            <p>DATABASE</p>
          </li>
          </ul>

          </div>
          <div className="Skills-form">
        <ul>
          <li>
            <img src={design}alt="HTML5" />
            <p>graphic design</p>
          </li>
          </ul>

          </div>
          <div className="Skills-form">
        <ul>
          <li>
            <img src={program}alt="HTML5" />
            <p>Python</p>
          </li>
          </ul>

          </div>
          </div>
          
        
  
    );
  }
  
  export default Skills;