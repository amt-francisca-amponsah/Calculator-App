const buttonNumber = document.querySelectorAll(".numb");

function displayInput(event) {
  console.log(event.target.textContent);
  const display = document.getElementById("show-area");
  console.log(display.value);

  if (display.value.length === 1 && display.value == 0) {
    display.value = event.target.textContent;
  } else {
    display.value += event.target.textContent;
    display.value = display.value.replace('x','*')
  }
}
buttonNumber.forEach((element) =>
  element.addEventListener("click", displayInput)
);

//resetbutton

function resetInput(event) {
  const display = document.getElementById("show-area");
  display.value = 0;
}
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetInput);

//deletebutton

function deleteInput(event) {
  const display = document.getElementById("show-area");
  if (display.value.length === 1) {
    display.value = 0;
  } else {
    display.value = display.value.slice(0, display.value.length - 1);
    display.value = display.value.replace('x','*')
  }
}
const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", deleteInput);

//equal-tobutton

function equalToInput(event) {
  const display = document.getElementById("show-area");
  display.value = display.value.replace('x','*')

    display.value = eval(display.value);
  
}
const equaltoBtn = document.querySelector(".equal-to");
equaltoBtn.addEventListener("click", equalToInput);
