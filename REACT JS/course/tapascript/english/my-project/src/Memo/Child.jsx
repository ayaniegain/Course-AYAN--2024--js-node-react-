import React from "react";

function Child({ header }) {
  console.log("child rendering");
  return (
    <div>
      <br />
      <h2>{header}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam
        odit dignissimos eveniet architecto soluta tempore beatae temporibus
        quas suscipit.
      </p>
    </div>
  );
}

export default React.memo(Child);
