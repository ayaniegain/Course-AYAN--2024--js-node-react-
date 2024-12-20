import React from 'react'

function VideoList({video,handleDeleteVideo,handleEditVideoId}) {
  return (  <div 
    style={{ display:"flex",gap:"20px"}}
        
        >
    {video.map((e) => (
      <div
        key={e.id}
        style={{ border: "1px solid red", height: "150px", width: "150px"}}
      >
        <h1>{e.name}</h1>
        <h1>{e.duration}</h1>
        <button onClick={()=>handleDeleteVideo(e.id)}>delete</button>
        <br />
        <button onClick={()=>handleEditVideoId(e.id)}>edit</button>
      </div>
    ))}
  </div> 
  )
}

export default VideoList