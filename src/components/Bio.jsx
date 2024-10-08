import React from 'react'
import musawir from "../Image/mupashir.jpg"
import Header from './Header'


function Bio() {
  const name = 'Mubashir bashiir'
  return (
    

    <div className="skills-container" id='Bio'>
      <ul>
        <li>
          <img style={{
            borderRadius: '50%',
            width: '370px',
            height: '350px',
            marginTop: '96px',
            marginBottom: '10px',


          }} src={musawir}alt="HTML5" />
          <h3>Hi i'm <span className='mupashir' > mr.{name}</span></h3>
          <p> I'm a software developer who develops both front-end and back-end.</p>
        </li>

      </ul>
      </div>
  )
}

export default Bio
