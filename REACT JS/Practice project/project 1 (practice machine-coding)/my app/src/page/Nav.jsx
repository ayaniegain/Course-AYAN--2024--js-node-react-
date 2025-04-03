import React from 'react'
import { NavLink } from 'react-router'

function Nav() {
  return (
    <div>
         <nav>
            <ul style={{display:"flex",gap:"20px"}}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Nav