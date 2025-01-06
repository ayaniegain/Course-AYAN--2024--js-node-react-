import React, { createContext, useState } from 'react'

let  themeContext=createContext()
let  credContext=createContext()

function MyContext({children}) {

  let [theme,setTheme]=useState("light")
  let [login,setLogin]=useState(false)






  return (
    <themeContext.Provider value={{theme,setTheme}}>
    <credContext.Provider value={{login,setLogin}}>
      {children}
    </credContext.Provider>
    </themeContext.Provider>
  )
}

export  {MyContext,themeContext,credContext}