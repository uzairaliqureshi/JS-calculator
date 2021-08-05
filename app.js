let screen = document.getElementById("screen")

document.getElementById('calculation').addEventListener('click',()=>  
screen.value = Function('return (' + screen.value + ')')())

document.getElementById('clearAll').addEventListener('click',()=>  screen.value="")

document.getElementById('clear1').addEventListener('click',()=> 
screen.value =  screen.value.slice(0, -1))

let numberOfButtons = document.querySelectorAll(".btn").length;
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    screen.value += this.value;
  });
}