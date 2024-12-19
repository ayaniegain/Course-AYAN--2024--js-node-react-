import React from 'react'

import resume from "../utils/data.js"
import Interest from '../components/Interest.jsx'
import Extracurricular from '../components/Extracurricular.jsx'
import Experience from '../components/Experience.jsx'
import Education from '../components/Education.jsx'
import Skills from '../components/Skills.jsx'
import Common from '../utils/Common.jsx'

const {experience,education,skills,interests,extracurricular}= resume

function Main() {
  return (
    <Common>
      <div className="container">

      <h2>Resume <br /> Emily</h2>
      <hr />
      <Interest interests={interests}/>
      <Skills skills={skills}/>
      <Education education={education}/>
      <Experience experience={experience}/>
      <Extracurricular extracurricular={extracurricular}/>
      </div>


    </Common>
  )
}

export default Main