let guessBtn = document.querySelector(".btn-guess");
let resetBtn = document.querySelector(".btn-reset");
let statement = document.querySelector(".statement");
let guessList = document.querySelector(".prev-guess");
let getInputDom = document.querySelector(".input");

let trackInput = [];

const generateRandom = () => {
  return +Math.floor(Math.random() * 101);
};

let random = generateRandom();

function handleClickGuess() {
  getInput = getInputDom.value;

  if (getInput !== "" && !isNaN(getInput) && getInput >= 0 && getInput < 101) {
    trackInput.push(getInput);
    if (+getInput === random) {
      guessBtn.disabled = true;
      getInputDom.disabled = true;
      resetBtn.disabled = false;
      if (!resetBtn.disabled) {
        resetBtn.style.backgroundColor = "green";
        resetBtn.style.color = "white";
      }

      statement.innerHTML = "correct guess 😍";
    } else if (+getInput > random) {
      statement.innerHTML = "you guessed HIGH ! 😒";
    } else if (+getInput < random) {
      statement.innerHTML = "you guessed LOW ! 😒";
    }

    if (trackInput.length > 11) {
      statement.innerHTML = `You LOST !😥 ,The number was ${random} `;

      guessBtn.disabled = true;
      resetBtn.disabled = false;

      if (!resetBtn.disabled) {
        resetBtn.style.backgroundColor = "green";
        resetBtn.style.color = "white";
      }
    } else {
      //   resetBtn.disabled = false;
      guessList.innerHTML = `Your guesses:  ${trackInput.join(",")}`;
    }
    getInputDom.value = "";
  } else {
    statement.innerHTML = "Input should be between 0-100, 😠";
  }
}

function handleClickReset() {
  trackInput = [];
  statement.innerHTML = "";
  guessList.innerHTML = "";

  guessBtn.disabled = false;
  getInputDom.disabled = false;
  resetBtn.disabled = true;

  if (resetBtn.disabled) {
    resetBtn.style.backgroundColor = "#EEEEEE";
    resetBtn.style.color = "black";
    resetBtn.disabled = true;
  }

  getInputDom.value = "";
  random = generateRandom();
}

guessBtn.addEventListener("click", handleClickGuess);
resetBtn.addEventListener("click", handleClickReset);
