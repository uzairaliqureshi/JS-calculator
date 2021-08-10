let screen = document.querySelector(".screen");

let numberOfButtons = document.querySelectorAll(".btn").length;
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    screen.value += this.value;
  });
}

let opr = [, "+", "/", "*", "-"]
let numberOfBtn = document.querySelectorAll(".operator").length;
for (let i = 0; i < numberOfBtn; i++) {
  document.querySelectorAll(".operator")[i].addEventListener("click", function () {
    if (this.value !== screen.value.slice(-1))
      if (!opr.includes(screen.value.slice(-1))) screen.value += this.value
      else if (this.value === '.') screen.value += this.value
      else if (this.value === '-') screen.value += this.value
  });
}

document.getElementById('clearAll').addEventListener('click', () => screen.value = "");

document.getElementById('clear1').addEventListener('click', () =>
  screen.value = screen.value.slice(0, -1));

document.querySelector(".equalOperator").addEventListener('click', () =>
  screen.value = Function('return (' + screen.value + ')')().toFixed(2).replace(".00", ""));

//! for keyboard support
document.addEventListener('keydown', function (event) {
  let oprText = ["+", "/", "*", "(", ")"]
  if (event.key !== screen.value.slice(-1)) {
    if (oprText.includes(event.key) && !opr.includes(screen.value.slice(-1))) screen.value += event.key;
    if (event.key === '-') screen.value += event.key
    if (event.key === '.') screen.value += event.key
  }
  let numText = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]
  if (numText.includes(event.key)) screen.value += event.key;
  if (event.key === "Backspace") screen.value = screen.value.slice(0, -1);
  if (event.key === "Enter") screen.value = Function('return (' + screen.value + ')')().toFixed(2).replace(".00", "");
})