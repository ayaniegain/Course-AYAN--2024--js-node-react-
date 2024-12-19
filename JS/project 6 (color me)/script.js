function handleClick() {
  let getNumber = getValue();

  if (getNumber <= 9 && getNumber > 0) {
    let allDivElem = document.querySelectorAll("div");

    allDivElem.forEach((e) => {
      e.style.backgroundColor = "white";
    });

    let selectField = document.querySelectorAll("div")[getNumber - 1];

    if (selectField) {
      selectField.style.backgroundColor = "green";
    }

    document.querySelector("input").value = "";
  } else {
    alert("number should be 1-9");
    document.querySelector("input").value = "";
  }
}

function getValue() {
  return Number(document.querySelector("input").value);
}
