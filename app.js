const screen = document.querySelector(".screen");
const numBtn = document.querySelectorAll(".btn").length;
for (let i = 0; i < numBtn; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    screen.value += this.value;
  });
};

const opr = ["+", "/", "*", "-"];
const numberOfBtn = document.querySelectorAll(".operator").length;
for (let i = 0; i < numberOfBtn; i++) {
  document.querySelectorAll(".operator")[i].addEventListener("click", function () {
    if (!screen.value.endsWith(this.value)) {
      if (!opr.includes(screen.value.slice(-1))) {
        screen.value += this.value;
      } else {
        changeOpr(this.value);
      }
    }
  });
};

function dotMinus(argument) {
  if (argument === '.') screen.value += argument;
  if (argument === '-') screen.value += argument;
};
function changeOpr(argument) {
  if (argument === "(" || argument === ")") { screen.value += argument; }
  else if (opr.includes(screen.value.slice(-1)) && argument !== "." && argument !== "-" && !opr.includes(screen.value.slice(-2, -1))) {
    screen.value = screen.value.slice(0, -1);
    screen.value += argument;
  }
  else { dotMinus(argument); }
};

function calculation() {
  try {
    if (!opr.includes(screen.value.slice(-1))) {
      screen.value = Function('return (' + screen.value + ')')().toFixed(2).replace(".00", "");
    } else {
      const sliceBLC = screen.value.slice(0, -1);
      screen.value = Function('return (' + sliceBLC + ')')().toFixed(2).replace(".00", "");
    }
  } catch (error) {
    screen.value = "";
  }
};

document.getElementById('clearAll').addEventListener('click', () => screen.value = "");
document.getElementById('clear1').addEventListener('click', () => screen.value = screen.value.slice(0, -1));
document.querySelector(".equalOperator").addEventListener('click', () => calculation());

// //! for keyboard
document.addEventListener('keydown', function (event) {
  const opr = ["+", "/", "*", "(", ")","-"];
  const opr1 = ["+", "/", "*", "(", ")", ".", "-"];
  if (event.key !== screen.value.slice(-1)) {
    if (opr.includes(event.key) && !opr.includes(screen.value.slice(-1))) screen.value += event.key; 
    else if (opr1.includes(event.key)) changeOpr(event.key);
  };
  const numText = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  if (numText.includes(event.key)) screen.value += event.key;
  if (event.key === "Backspace") screen.value = screen.value.slice(0, -1);
  if (event.key === "Enter") calculation();
});
