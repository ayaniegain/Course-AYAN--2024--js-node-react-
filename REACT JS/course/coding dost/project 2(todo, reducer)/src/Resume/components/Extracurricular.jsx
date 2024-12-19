import React from 'react'

function Extracurricular({extracurricular}) {
  console.log(extracurricular)
  return (
    <>
      <h2>Extracurricular</h2>
      <ul>
        {
          extracurricular.map((etc)=><li key={etc.activity}>{etc.activity}</li>)
        }
      </ul>
    </>
  )
}

export default Extracurricular