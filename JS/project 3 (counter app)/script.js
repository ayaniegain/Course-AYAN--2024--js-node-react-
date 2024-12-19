let input = document.querySelector(".getInput");
let count=+document.querySelector(".count").innerText

function handleClick(e) {
    if (e==='inc') {
        count= Number(input.value) + count;

        document.querySelector(".count").innerText=count
    }
    if (e==='dec') {
        count= count-Number(input.value) ;
        document.querySelector(".count").innerText=count
    }
    if (e==='res') {
        count=0
        document.querySelector(".count").innerText=count
  }
}

