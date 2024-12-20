import React, { Children, useState } from "react";
import VideoList from "./VideoList";
import Addvideo from "./Addvideo";

let allVideos = [
  {
    id: 1,
    name: "react js",
    duration: 120,
  },
  {
    id: 2,
    name: "node js",
    duration: 180,
  },
  {
    id: 3,
    name: "mongo db ",
    duration: 20,
  },
  {
    id: 4,
    name: "python ",
    duration: 100,
  },
];

function VideoMainReducer() {
  let [video, setVideo] = useState(allVideos);
  let [editableVideo, setEditableVideo] = useState(null);

  function handleAddVideo(addvideo) {
    setVideo([...video, { ...addvideo, id: video.length + 1 }]);
   
  }

  function handleDeleteVideo(id) {
    let filteredVideo = video.filter((vid) => vid.id !== id);

    setVideo(filteredVideo);
  }
  
  function handleEditVideoId(editVideoId) {
    setEditableVideo(video.find((e) => e.id == editVideoId));

  }

  function handleEditVideo(editvieo){

    console.log(editvieo)

    let neweditdVideo = video.map((e) => {
      if (e.id == editvieo.id) {
        return { ...e, ...editvieo, duration: +editvieo.duration };
      }
      return e;
    });
    console.log(neweditdVideo);
    setVideo(neweditdVideo);

    
  }

  return (
    <div>
      <Addvideo
        handleAddVideo={handleAddVideo}
        editableVideo={editableVideo}
        handleEditVideo={handleEditVideo}
      />
      <VideoList
        video={video}
        handleDeleteVideo={handleDeleteVideo}
        handleEditVideoId={handleEditVideoId}
      />
    </div>
  );
}

export default VideoMainReducer;
