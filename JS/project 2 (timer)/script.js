let givenTime = 1500;
let myInterval;

const timerEl = document.querySelector(".time");

function updateTimer() {
  let minutes = Math.floor(givenTime / 60);
  let seconds = givenTime % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

let handleClick = (val) => {
  if (val == "start") {
    document.querySelector(".start").disabled = true;
    myInterval = setInterval(() => {
      givenTime = givenTime - 1;
      if (givenTime === 0) {
        clearInterval(myInterval);
        alert("Time's up!");
        givenTime = 1500;
        updateTimer();
      }
      updateTimer();
    }, 1000);
  } else if (val == "stop") {
    clearInterval(myInterval);

    document.querySelector(".start").disabled = false;
  } else if (val == "reset") {
    givenTime = 1500;

    clearInterval(myInterval);
    updateTimer();
  }
};
