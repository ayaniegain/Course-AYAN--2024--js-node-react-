let img = document.getElementById("img_dice");

img.src = "https://www.random.org/dice/dice5.png";

let diceTrack = [];
let count = 0;

const handleClick = () => {
  let randomDice = Math.floor(Math.random() * (7 - 1) + 1);

  //   console.log(randomDice)

  diceTrack.push(randomDice);

  img.classList.add("rotate");

  img.src = `https://www.random.org/dice/dice${randomDice}.png`;

  img.addEventListener("animationend", () => img.classList.remove("rotate"));

  if (randomDice === 6) {
    document.getElementById("track").innerHTML = "YOU WON 😍";
    document.getElementById("roll").disabled = true;
    document.getElementById("reset").disabled = false;

    count = count + 1;

    console.log(count);

    if (randomDice === 6 && count === 2) {
      document.getElementById("track").innerHTML = "YOU ARE AWESOME 😍 😍";
      count = 0;

      return;
    }

    return;
  } else if (randomDice === 1) {
    document.getElementById("track").innerHTML = "YOU LOSS 😥";
    document.getElementById("roll").disabled = true;
    document.getElementById("reset").disabled = false;
    return;
  }

  //   console.log(randomDice);

  let storeValue = document.getElementById("track");
  let sectionTag = document.createElement("section");
  let pTag = document.createElement("p");
  pTag.innerHTML = `Rolling ${diceTrack.length} :`;

  let imgTag = document.createElement("img");

  diceTrack.map((e) => {
    imgTag.setAttribute("src", `https://www.random.org/dice/dice${e}.png`);
  });

  sectionTag.appendChild(pTag);
  sectionTag.appendChild(imgTag);
  storeValue.appendChild(sectionTag);

  //   console.log(diceTrack);
};

const reset = () => {
  img.src = "https://www.random.org/dice/dice5.png";

  diceTrack.length = 0;
  document.getElementById("track").innerHTML = "";

  document.getElementById("roll").disabled = false;
  document.getElementById("reset").disabled = true;

  // console.log(diceTrack)
};
