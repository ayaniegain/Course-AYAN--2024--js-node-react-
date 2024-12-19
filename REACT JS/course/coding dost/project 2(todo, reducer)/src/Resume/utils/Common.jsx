import React from 'react'
import "./common.css"

function Common({children}){
  return (
    <div>
      <header>

      </header>
      <div className='middle'>

      <div className="left"></div>
      {children}
      <div className="right"></div>
      </div>
      <footer>

      </footer>
    </div>
  )
}

export default Common