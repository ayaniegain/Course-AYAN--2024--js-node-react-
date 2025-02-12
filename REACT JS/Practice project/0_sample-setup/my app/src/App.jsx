import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
   
    setCount((prev)=>prev+1)
  
    return () => {
      console.log("clean up !")
    }
  }, [])
  

  return (
  <>
  <h1 className="text-3xl font-bold underline">
    Hello world! {count}
    <button onClick={hand}>click</button>
  </h1>
  </>
  )
}

export default App
