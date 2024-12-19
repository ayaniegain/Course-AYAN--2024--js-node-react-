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

function VideoMain() {
  let [video, setVideo] = useState(allVideos);
  let [editableVideo, setEditableVideo] = useState(null);

  function handleAddVideo(addvideo) {
    if (!addvideo.id) {
      setVideo([...video, { ...addvideo, id: video.length + 1 }]);
    } else if (addvideo) {
      let neweditdVideo = video.map((e) => {
        if (e.id == addvideo.id) {
          return { ...e, ...addvideo, duration: +addvideo.duration };
        }
        return e;
      });
      console.log(neweditdVideo);
      setVideo(neweditdVideo);
    }
  }

  function handleDeleteVideo(id) {
    let filteredVideo = video.filter((vid) => vid.id !== id);

    setVideo(filteredVideo);
  }
  
  function handleEditVideo(editVideoId) {
    setEditableVideo(video.find((e) => e.id == editVideoId));

  }

  return (
    <div>
      <Addvideo
        handleAddVideo={handleAddVideo}
        editableVideo={editableVideo}
      />
      <VideoList
        video={video}
        handleDeleteVideo={handleDeleteVideo}
        handleEditVideo={handleEditVideo}
      />
    </div>
  );
}

export default VideoMain;
