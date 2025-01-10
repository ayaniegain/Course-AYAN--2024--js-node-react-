import React, { useEffect, useState } from "react";

function Colorize() {
  const [color, setRandomColor] = useState("#ffffff");

  // Function to change to a random color
  function changeRandomColor() {
    // Generate a random hex color code
    let color = Math.floor(Math.random() * 16777215).toString(16);
    color = `#${color.padStart(6, '0')}`;
    console.log(color);
    setRandomColor(color);
  }

  // Function to handle color pick from the palette
  function handlePickColor(e) {
    const bgcolor = e.target.style.backgroundColor;
    setRandomColor(bgcolor);
  }


  return (
    <div className="main_container h-[100vh] w-full flex flex-col items-center justify-center gap-10">
      <div
        className={`${color} color_box h-80 w-80 border-gray-950 border-2 rounded-lg`}
        style={{ background: color }}
      ></div>
      <button
        className="h-10 w-36 text-white text-xl bg-red-500"
        onClick={changeRandomColor}
      >
        Random Color
      </button>
      <div className="color_palate text-center">
        <p className="font-medium">Choose Color</p>
        <div className="border-gray-950 border-2 h-16 w-80 flex">
          <p
            className="w-20 border-gray-800 border-[1px] cursor-pointer"
            style={{ backgroundColor: "#00ff00" }}
            onClick={handlePickColor}
          ></p>
          <p
            className="w-20 border-gray-800 border-[1px] cursor-pointer"
            style={{ backgroundColor: "#ffff00" }}
            onClick={handlePickColor}
          ></p>
          <p
            className="w-20 border-gray-800 border-[1px] cursor-pointer"
            style={{ backgroundColor: "#ff7f00" }}
            onClick={handlePickColor}
          ></p>
          <p
            className="w-20 border-gray-800 border-[1px] cursor-pointer"
            style={{ backgroundColor: "#800080" }}
            onClick={handlePickColor}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default Colorize;
