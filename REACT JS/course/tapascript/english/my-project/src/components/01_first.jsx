import React from "react";

function First() {
  const pets = [
    {
      name: "Buddy",
      type: "Dog",
      description:
        "A loyal Golden Retriever who loves to play fetch and is great with kids.",
      skills: ["Fetching", "Obedience", "Agility"],
      img: "https://example.com/images/buddy.jpg",
    },
    {
      name: "Whiskers",
      type: "Cat",
      description:
        "A curious and independent Persian cat with a soft, fluffy coat.",
      skills: ["Climbing", "Purring", "Hunting"],
      img: "https://example.com/images/whiskers.jpg",
    },
    {
      name: "Fluffy",
      type: "Rabbit",
      description:
        "A gentle Holland Lop rabbit that loves to munch on carrots and snuggle.",
      skills: ["Hopping", "Chewing", "Snuggling"],
      img: "https://example.com/images/fluffy.jpg",
    },
    {
      name: "Spike",
      type: "Hedgehog",
      description:
        "An adorable African pygmy hedgehog who enjoys burrowing and exploring.",
      skills: ["Burrowing", "Exploring", "Rolling"],
      img: "https://example.com/images/spike.jpg",
    },
    {
      name: "Goldie",
      type: "Fish",
      description:
        "A vibrant goldfish that adds life and color to any aquarium.",
      skills: ["Swimming", "Eating", "Gliding"],
      img: "https://example.com/images/goldie.jpg",
    },
  ];

  let topic = "React";
  let age = 34;
  const likes = ["JSX", "React", "Redux"];
  const bool = true;

  return (
    <div id="someId">
      {/* <h2>the topic is {topic}</h2>
      <h2>age is {age}</h2>
      <h2>Likes {likes.join(",")}</h2>
      <p>{String(bool)}</p>
      <div>{likes.map((like,i)=> <h3 key={i}>{like}</h3>)}</div> */}
      <div>
        <h2 className="text-3xl text-orange-700">my pets</h2>
        <ul>
          {pets.map((item) => (
            <li key={item.name} className="ml-4">
              {" "}
              <h1>{item.name}</h1>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default First;
//   let jsx=<h2>hello world</h2>
//   return React.createElement("h1",null,"JSX is AWESOME")
// }
