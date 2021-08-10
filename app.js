let screen = document.querySelector(".screen");

let numberOfButtons = document.querySelectorAll(".btn").length;
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    screen.value += this.value;
  });
}

let opText = [, "+", "/", "*"]
let numberOfBtn = document.querySelectorAll(".operator").length;
for (let i = 0; i < numberOfBtn; i++) {
  document.querySelectorAll(".operator")[i].addEventListener("click", function () {
    if (this.value !== screen.value.slice(-1))
    if (!opText.includes(screen.value.slice(-1))) screen.value += this.value
    else if (this.value === '.') screen.value += this.value
    else if (this.value === '-') screen.value += this.value
  });
}

document.getElementById('clearAll').addEventListener('click', () => screen.value = "");

document.getElementById('clear1').addEventListener('click', () =>
  screen.value = screen.value.slice(0, -1));

document.querySelector(".equalOperator").addEventListener('click', () =>
  screen.value = Function('return (' + screen.value + ')')().toFixed(2).replace(".00", ""));

//! keyboard support

document.addEventListener('keydown', function (event) {
  let numText = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]
  let oprText = ["-", "+", "/", "*", "(", ")", "."]
  if (numText.includes(event.key)) screen.value += event.key;
  if (oprText.includes(event.key) && event.key !== screen.value.slice(-1)) screen.value += event.key;
  if (event.key === "Backspace") screen.value = screen.value.slice(0, -1);
  if (event.key === "Enter") screen.value = Function('return (' + screen.value + ')')().toFixed(2).replace(".00", "");
})