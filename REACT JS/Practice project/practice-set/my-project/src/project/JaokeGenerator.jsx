import React, { useState, useEffect } from 'react';

export default function DadJokeGenerator() {
  const [joke, setJoke] = useState(null);

  async function fetchDadJoke() {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
          Accept: 'application/json', // Specify the header for JSON response
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching the dad joke:", error);
    }
  }

  useEffect(() => {
    fetchDadJoke();
  }, []); // Fetch joke once when the component mounts

  return (
    <div>
      <h2>Dad Joke Generator</h2>
      {joke ? (
        <p>{joke}</p>
      ) : (
        <p>Loading...</p>
      )}
      <button  className=" p-2 bg-red-700 text-white" onClick={fetchDadJoke}>Get Another Joke</button>
    </div>
  );
}
