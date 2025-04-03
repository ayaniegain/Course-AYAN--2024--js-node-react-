import React, { useLayoutEffect, useState } from "react";

function UseWindow() {
  const [Windowsize, setWindowsize] = useState({
    height: 0,
    width: 0,
  });

  function handleWindow() {
    setWindowsize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useLayoutEffect(() => {
    handleWindow();

    window.addEventListener("resize", handleWindow);

    return () => {
      window.removeEventListener("resize", handleWindow);
    };
  }, []);

  return Windowsize;
}

export default UseWindow;
