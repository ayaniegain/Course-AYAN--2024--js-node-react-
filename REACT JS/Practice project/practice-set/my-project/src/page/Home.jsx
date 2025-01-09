import React, { useContext } from "react";
import pic from "../assets/pic.jpg";
import { useContextFunc } from "../context/Context";


function Home() {
  let {count,setcount} = useContextFunc();




  const handleClick = () => {
    setcount((prev) => prev + 1);
  };

  return (
    <>
      <div className=" md:h-[400px] bg-purple-200 w-full flex md:flex-row flex-col justify-center items-center content-center">
        <div className=" md:w-1/2  flex  flex-col justify-center gap-4 md:items-start md:px-10  ">
          <h1 className="text-xl  md:text-4xl text-center md:text-start pt-2 xl:text-4xl">
            The best phones in the town
          </h1>
          <p className="w-full md:max-w-[550px] text-sm text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            necessitatibus odit at laboriosam quis vitae a ipsum quae incidunt
            vel.
          </p>
          <div className="btn  space-x-4 flex  items-center justify-center align-middle">
            <button className="h-10 w-24  text-white rounded-lg bg-purple-800 hover:bg-white hover:text-black hover:border hover:border-purple-800">
              Buy Now
            </button>
            <button className="h-10 w-24  text-white rounded-lg bg-purple-800 hover:bg-white hover:text-black hover:border hover:border-purple-800">
              Contact Us
            </button>
          </div>
        </div>
        <div className="image-container pt-5">
          <img
            src={pic}
            alt="pic"
            className="md:h-[300px] md:w-[400px] rounded-lg"
          />
        </div>
      </div>
      <div className="my-[20px]">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit at hic
          eveniet aspernatur consequuntur. Eos distinctio sequi, quis ad nulla
          magni voluptates doloremque?
        </h2>
        <p className="bg-yellow-600 max-w-40">Count {count}</p>
        <button
          className="px-6 py-2 bg-blue-700 text-white"
          onClick={handleClick}
        >
          click
        </button>
      </div>
    </>
  );
}

export default Home;
