import React from "react";
import { useNavigate } from "react-router";

function Contact() {
  let navigate = useNavigate();

  const handleClick = () => {
    // navigate("/about")
    navigate(-1);
  };

  return (
    <>
      <div>Contact</div>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default Contact;
