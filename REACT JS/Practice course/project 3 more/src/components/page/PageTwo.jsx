import React from "react";
import UseWindow from "../../custom/UseWindow";

function PageTwo() {
  const Windowsize = UseWindow();

  return (
    <>
      <h2
        style={
          Windowsize.width > 900
            ? { color: "green" }
            : Windowsize.width > 600
            ? { color: "red" }
            : { color: "black" }
        }
      >
        Hello from second page , example  of custom hooks
      </h2>
      <div>
        Windows size Height: {Windowsize.height} and width: {Windowsize.width}
      </div>
    </>
  );
}

export default PageTwo;
