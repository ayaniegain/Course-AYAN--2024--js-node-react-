import React, {  createContext, useState } from 'react'
export const Themecolor=createContext('')

function TmemeColorContext({children}) {


    const [colorpalate, setcolorpalate] = useState('yellow')



  return (
    <Themecolor.Provider value={{colorpalate,setcolorpalate}}>
    {children}
  </Themecolor.Provider>


  )
}

export default TmemeColorContext