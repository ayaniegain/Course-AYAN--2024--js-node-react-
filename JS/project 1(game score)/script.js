let num1 = +Math.floor(Math.random() * 11);
let num2 = +Math.floor(Math.random() * 11);
let score = 0;

function myValueData() {
  num1 = +Math.floor(Math.random() * 11);
  num2 = +Math.floor(Math.random() * 11);
  document.querySelector(".one").textContent = num1;
  document.querySelector(".two").textContent = num2;
  document.querySelector(".score").textContent = score;
  document.querySelector("input").value = "";
}
myValueData();

function submitValue() {
  let inputValue = +document.querySelector("input").value;
  let multivalue = num1 * num2;

  if (inputValue == multivalue) {
    score = score + 1;
    console.log("win");
    console.log("score", score);
  } else {
    score = score - 1;
    console.log("loss");
    console.log("score", score);
  }
  document.querySelector(".score").textContent = score;

  myValueData();
}
