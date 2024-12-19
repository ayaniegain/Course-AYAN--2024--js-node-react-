import React from 'react'

function Skills({skills}) {

  console.log(skills)
  return (
    <>
        <h2>Skills</h2>
      <ul>
        {
          skills.map((skill)=><li key={skill}>{skill}</li>)
        }
      </ul>
    </>
  )
}

export default Skills