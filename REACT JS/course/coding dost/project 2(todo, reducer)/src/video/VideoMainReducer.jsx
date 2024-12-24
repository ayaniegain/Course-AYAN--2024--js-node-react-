import React, { useReducer } from "react";
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
    name: "mongo db",
    duration: 20,
  },
  {
    id: 4,
    name: "python",
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

    switch (type) {
      case "add":
        return {
          ...state,
          allVideos: [...video, { ...payload, id: video.length ? video[video.length - 1].id + 1 : 1 }],
        };
      case "delete":
        return {
          ...state,
          allVideos: video.filter((vid) => vid.id !== payload),
        };
      case "edit":
        return {
          ...state,
          allVideos: video.map((e) =>
            e.id === payload.id ? { ...e, ...payload, duration: +payload.duration } : e
          ),
        };
      case "eID":
        return {
          ...state,
          editableVideo: video.find((e) => e.id === payload) || editableVideo,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initial);

  console.log(state);

  function handleAddVideo(addvideo) {
    dispatch({ type: "add", payload: addvideo });
  }
 
  function handleDeleteVideo(id) {
    dispatch({ type: "delete", payload: id });
  }

  function handleEditVideoId(editVideoId) {
    dispatch({ type: "eID", payload: editVideoId });
  }

  function handleEditVideo(editvideo) {
    dispatch({ type: "edit", payload: editvideo });
  }

  return (
    <div>
      <Addvideo
        handleAddVideo={handleAddVideo}
        editableVideo={state.editableVideo}
        handleEditVideo={handleEditVideo}
      />
      <VideoList
        video={state.allVideos}
        handleDeleteVideo={handleDeleteVideo}
        handleEditVideoId={handleEditVideoId}
      />
    </div>
  );
}

export default VideoMainReducer;