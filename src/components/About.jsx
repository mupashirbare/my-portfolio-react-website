import React from 'react'
import musawir from "../Image/mupashir.jpg"

function About() {
    const name = 'mubashir bashiir';
    const university= 'Jamhuria University (JUST)'
  return (
    
    
  <div className="skills-container" id="about">
  <ul>
    <li>
      <img style={{
        borderRadius: '10%',
        width: '330px',
        height: '330px',
        marginTop: '10px',
        marginBottom: '10px',

      }} src={musawir}alt="HTML5" />
      <h2 className='title'>Hi, I'm {name}</h2>
      <p>
        I am a  student who lives in soomalia specially the capital city of soomalia [muqdisho] . 
        My journey into the world of programming began during when i was in high school from 2016 to 2020.
        I find joy in learning new languages and technologies, constantly seeking to expand my knowledge.
        Currently, I am studying the third-level of education at {university}.
      </p>
      <p>
        When I'm not coding, I enjoy Reading novel books, spending time with friends, and exploring new places.
        Coding allows me to combine my creativity with problem-solving skills to build innovative solutions.
        I'm excited about the endless possibilities in the tech industry and look forward to making a positive impact.
      </p>    </li>
    
  </ul>
  </div>
    
  )
}

export default About
