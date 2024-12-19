import React from 'react'

function Interest({interests}) {

  console.log(interests)
  return (
    <>
      <h2>Interests</h2>
      <ul>
        {
          interests.map((int)=><li key={int}>{int}</li>)
        }
      </ul>
    </>
  )
}

export default Interest