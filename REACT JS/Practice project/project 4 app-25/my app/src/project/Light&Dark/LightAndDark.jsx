import React from 'react'
import { useThemeContext } from '../../context/ToggleThemeContext'

function LightAndDark() {

    let {theme,toggleSwitchTheme}=useThemeContext()

    console.log(theme)
  return (
    <div className={` min-h-screen ${theme?"bg-black":"bg-white"} `}>
    <div className={` ${!theme?"text-black":"text-white"}`}>LightAndDark</div>
    <button className={`p-4 border-amber-500 border-2 ${!theme?"text-black":"text-white"} `} onClick={toggleSwitchTheme}> toggle theme</button>
    </div>
  )
}

export default LightAndDark