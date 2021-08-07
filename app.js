let screen = document.querySelector(".screen");

document.querySelector(".equalOperator").addEventListener('click', () =>
  screen.value = Function('return (' + screen.value + ')')().toFixed(2).replace(".00", ""));

document.getElementById('clearAll').addEventListener('click', () => screen.value = "");

document.getElementById('clear1').addEventListener('click', () =>
  screen.value = screen.value.slice(0, -1));

let numberOfButtons = document.querySelectorAll(".btn").length;
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    screen.value += this.value;
  });
}

//! for keyboard

document.addEventListener('keydown', function (event) {
  let arrText = ["(", ")", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+"]
  if (arrText.includes(event.key)) screen.value += event.key;
  if (event.key === "Backspace") screen.value = screen.value.slice(0, -1);
  if (event.key === "Enter") screen.value = Function('return (' + screen.value + ')')().toFixed(2).replace(".00", "");
})
