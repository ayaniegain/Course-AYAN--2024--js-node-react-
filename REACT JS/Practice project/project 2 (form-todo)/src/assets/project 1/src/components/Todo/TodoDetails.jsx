import axios from 'axios';
import React from 'react'

function TodoDetails({e}) {
    const handleClick=async(id)=>{

        let result = await axios.get(`https://dummyjson.com/users/${id}`);
        console.log(result.data.email)
        alert(result.data.email)
    }
  return (
         <div>
        <h2 >{e.firstName}</h2>
        <button onClick={()=>handleClick(e.id)}>click</button>
        </div>
  )
}

export default TodoDetails