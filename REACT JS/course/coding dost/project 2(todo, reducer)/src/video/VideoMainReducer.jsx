import React, { Children, useReducer, useState } from "react";
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
  let initial = {
    allVideos,
    editableVideo: null,
  };

  const reducer = (state, action) => {
    const { allVideos: video, editableVideo } = state;
    const { type, payload } = action;

    if (type == "add") {
      return [...video, { ...payload, id: video.length + 1 }];
    }
    if (type == "delete") {
      return video.filter((vid) => vid.id !== payload);
    }
    if (type == "edit") {
      video.map((e) => {
        if (e.id == payload.id) {
          return { ...e, ...payload, duration: +payload.duration };
        }
        return e;
      });
    }
    if (type == "eID") {
      return video.find((e) => e.id == payload || editableVideo);
    }
  };

  const [state, dispatch] = useReducer(reducer, initial);

  console.log(state)


  function handleAddVideo(addvideo) {
    dispatch({ type: "add", payload: addvideo });
  }

  function handleDeleteVideo(id) {

    dispatch({ type: "delete", payload: id });
  }

  function handleEditVideoId(editVideoId) {
    dispatch({ type: "eID", payload: editVideoId });
  }

  function handleEditVideo(editvieo) {
    dispatch({ type: "edit", payload: editvieo });
  }

  return (
    <div>
      <Addvideo
        handleAddVideo={handleAddVideo}
        editableVideo={state.editableVideo}
        handleEditVideo={handleEditVideo}
      />
      <VideoList
        video={state.allVideos || state}
        handleDeleteVideo={handleDeleteVideo}
        handleEditVideoId={handleEditVideoId}
      />
    </div>
  );
}

export default VideoMainReducer;
