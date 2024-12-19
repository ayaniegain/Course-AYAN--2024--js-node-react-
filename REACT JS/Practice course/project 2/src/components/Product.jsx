import React, { useState } from 'react'

function Product({productDetails}) {
    const [flag, setflag] = useState(false);

    const handleClick=()=>{
        setflag(!flag)

    }

  return (
    <div>

        {flag?
        <>
        {productDetails.map((e,i)=><h2 key={i}>{e.name}</h2>)}
        </>
        
        :'no product found' }
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Product