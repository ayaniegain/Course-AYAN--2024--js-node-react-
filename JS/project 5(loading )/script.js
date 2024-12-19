let x = 0;

function updateFunc() {
  document.querySelector(".counter").innerText = `${x} %`;
  document.querySelector(".loading-bar-front").style.width = x + "%";

  x++;

  if (x < 101) {
    setTimeout(updateFunc, 20);
  }
}

updateFunc();
