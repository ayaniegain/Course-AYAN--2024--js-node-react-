import React from 'react'

function OneChild({handleClick}) {

  console.log("render Child")
  return (
    <div>OneChild
       <button onClick={handleClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
        Inc
      </button>
    </div>
  )
}

export default  React.memo(OneChild)