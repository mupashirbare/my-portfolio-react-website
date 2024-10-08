import React from "react";
import first from "../Image/my first website.png";
import second from "../Image/second websites.png";
import fouth from "../Image/practice.png";
import blogs from "../Image/blogs.webp";
import restruent from "../Image/Restruents.webp"



const Projects = () => {
  return (


    <div className="projects-container" id="project">
        <div className="Skills-form">
      <ul>
        <li>
          <img src={first}alt="HTML5" />
          <h4 className="title">portfolio</h4>
          <p style={{
          marginTop: "-50px",

          }}>this is a previous project i made it.</p>
          <button className="btn-style"  >View</button>
        </li>
        </ul>
    </div>
  

        <div className="Skills-form">
      <ul>
        <li>
          <img src={restruent}alt="HTML5" />
          <h4 className="title">Restruents</h4>
          <p style={{
          marginTop: "-50px",

          }}>this is a previous project i made it.</p>
          <button className="btn-style"  >View</button>
        </li>
        </ul>
    </div>
    <div className="Skills-form">
      <ul>
        <li>
          <img src={fouth}alt="HTML5" />
          <h4 className="title">dev.com</h4>
          <p style={{
          marginTop: "-50px",

          }}>this is a previous project i made it.</p>
          <button className="btn-style"  >View</button>
        </li>
        </ul>
    </div>


      <div className="Skills-form">
      <ul>
        <li>
          <img src={blogs}alt="project" />
          <h4 className="title">Blogs-websites</h4>
          <p style={{
          marginTop: "-50px",

          }}>this is a previous project i made it. </p>
          <button className="btn-style" >View</button>
        </li>
        </ul>
    </div>
    

    
        
      <hr />
    
    </div>
  );
        }
  
  
  
  export default Projects;