import React from 'react'

function Education({education}) {
  console.log(education)
  return (
    <>
    <h2>Education</h2>
  <ul>
    {
      education.map((edu)=><li key={edu.institution}>{edu.institution}</li>)
    }
  </ul>
</>
  )
}

export default Education