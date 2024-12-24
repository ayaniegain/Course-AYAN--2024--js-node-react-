import React, { useState, useEffect } from "react";

function Addvideo({ handleAddVideo, editableVideo, handleEditVideo }) {
  const initial = { name: "", duration: "" };
  let [video, setvideos] = useState(initial);
  let [editbtn, setEditbtn] = useState("add");

  useEffect(() => {
    if (editableVideo) {
      setEditbtn("edit");
      setvideos(editableVideo);
    } else {
      setEditbtn("add");
      setvideos(initial);
    }
  }, [editableVideo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editbtn === "edit") {
      handleEditVideo(video);
      setEditbtn("add");
    } else {
      handleAddVideo(video);
    }

    setvideos(initial);
  };

  let handleChange = (e) => {
    let newVideos = { ...video, [e.target.name]: e.target.value };
    setvideos(newVideos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={video.name}
        onChange={handleChange}
        placeholder="Video Name"
      />
      <br />
      <input
        type="number"
        name="duration"
        value={video.duration}
        onChange={handleChange}
        placeholder="Duration"
      />
      <br />
      <button type="submit">{editbtn}</button>
    </form>
  );
}

export default Addvideo;