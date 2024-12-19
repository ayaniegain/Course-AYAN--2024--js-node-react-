import React from 'react'

function Experience({experience}) {

  console.log(experience)
  return (
    <>
    <h2>Experience</h2>
  <ul>
    {
      experience.map((exp)=><li key={exp.role}>{exp.role}</li>)
    }
  </ul>
</>
  )
}

export default Experience