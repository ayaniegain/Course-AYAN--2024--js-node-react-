import React from 'react'

type personProps={

    person:{
        fname:string,
        lname:string
    }[]

}

function PersonList({person}:personProps) {

  

  return (
    <div>
        {
            person.map((per,index)=> (
                    <div key={index}>
                <h2>{per.fname} {per.lname}</h2>
                    </div>
            ))
        }
    </div>
  )
}

export default PersonList