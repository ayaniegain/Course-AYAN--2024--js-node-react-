import React, { useContext } from 'react'
import Example from './06_form'
import { credContext, themeContext } from '../context/useContextProvider'

function ThemeContextComp() {

  const {theme,setTheme} = useContext(themeContext)
    const { login, setLogin } = useContext(credContext);
  
 

function toggleTheme(){
 theme=="light"? setTheme("dark") : setTheme("light")
 setLogin(false)
}


  return (
    <div className='  h-screen'>
      <button className='h-10 w-20 bg-green-600 fixed text-white top-0' onClick={toggleTheme}>Toggle Theme</button>
      {

        theme=="light"? "":
        <Example />
      }
    </div>
  )
}

export default ThemeContextComp