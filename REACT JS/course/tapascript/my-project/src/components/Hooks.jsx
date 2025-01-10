import React, { useEffect, useState } from "react";

function Hooks() {
  let [randomNo, setrandomNo] = useState(Math.floor(Math.random() * 5) + 1);
  let [greeting, setGreeting] = useState("Hi");

  useEffect(() => {
    if (randomNo === 1) {
      setGreeting("hello");
    } else if (randomNo === 2) {
      setGreeting("how are you?");
    } else if (randomNo === 3) {
      setGreeting("tell me why?");
    } else if (randomNo === 4) {
      setGreeting("want to leave!");
    } else if (randomNo === 5) {
      setGreeting("bye...👍");
    }
  }, [randomNo]);

  useEffect(() => {
    console.log("random no is-- ");

    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <>
      <div className="pt-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-green-800 text-2xl font-bold mb-4">
          Random Greeting
        </p>
        <h1 className="text-blue-600 text-4xl">{greeting}</h1>
      </div>
    </>
  );
}

export default Hooks;
