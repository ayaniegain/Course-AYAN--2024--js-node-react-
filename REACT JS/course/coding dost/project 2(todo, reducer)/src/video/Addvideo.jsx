import React, { useEffect, useState } from "react";

function Addvideo({ handleAddVideo, editableVideo }) {
  let initial = {
    name: "",
    duration: "",
  };

  let [video, setvideos] = useState(initial);



  useEffect(() => {
    if (editableVideo) {
      setvideos(editableVideo)
    }
  }, [editableVideo]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
   
    handleAddVideo(video);
    setvideos(initial);
  };

  let handleChange = (e) => {
    let nawVideos = { ...video, [e.target.name]: e.target.value };
    setvideos(nawVideos);
  };

  return (
    <div>
      <form style={{ paddingTop: "10px" }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={video.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="duration"
          placeholder="duration"
          value={video.duration}
          onChange={handleChange}
        />
        <br />
        <button type="submit">{!editableVideo?"add":"edit"}</button>
        <br />
      </form>
    </div>
  );
}

export default Addvideo;
