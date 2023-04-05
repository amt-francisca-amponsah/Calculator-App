function replaceTimes(operation) {
  return operation.replaceAll("x", "*");
}

function replaceComma(operation) {
  return operation.replaceAll(",", "");
}

document.body.classList.add("body");
const buttonNumber = document.querySelectorAll(".numb");

//for resizing the numbers that can appear on the display
function resizeInput() {
  const display = document.getElementById("show-area");
  const displayWidth = display.offsetWidth;
  const length = display.value.length;
  if (length < 17) {
    display.style.fontSize = "56px";
  }
  if (displayWidth >= 540) {
    if (length > 51) {
      display.style.fontSize = "10px";
    } else if (length > 34) {
      display.style.fontSize = "19px";
    } else if (length > 17) {
      display.style.fontSize = "28px";
    }
  } else {
    if (length > 51) {
      display.style.fontSize = "10px";
    } else if (length > 34) {
      display.style.fontSize = "19px";
    } else if (length > 10) {
      display.style.fontSize = "24px";
    }
  }
}

//for the display
function displayInput(event) {
  const display = document.getElementById("show-area");

  if (display.value.length === 1 && display.value == 0) {
    if (["x", "/", "+"].includes(event.target.textContent)) {
      display.value = 0;
      return;
    }

    if (event.target.textContent === ".") {
      display.value = "0.";
      return;
    }
    display.value = event.target.textContent;
  } else {
    if (
      display.value.length === 1 &&
      display.value == "-" &&
      event.target.textContent === "-"
    ) {
      return;
    }
    if (
      display.value[display.value.length - 2] === "-" &&
      display.value[display.value.length - 1] === "-" &&
      event.target.textContent === "-"
    ) {
      return;
    }
    if (
      ["x", "/", "+"].includes(event.target.textContent) &&
      ["*", "÷", "+", "-", "."].includes(
        display.value[display.value.length - 1]
      )
    ) {
      return;
    }

    if (event.target.textContent == "." && display.value.endsWith(".")) {
      return;
    }
    if (
      event.target.textContent === "." &&
      !Number(display.value[display.value.length - 1])
    ) {
      display.value += "0.";
      return;
    }
    const lastDecimal = display.value.slice(display.value.lastIndexOf("."));

    if (
      lastDecimal.length >= 4 &&
      !lastDecimal.includes("+") &&
      !lastDecimal.includes("-") &&
      !lastDecimal.includes("x") &&
      !lastDecimal.includes("/") &&
      !["x", "/", "+", "-"].includes(event.target.textContent)
    ) {
      return;
    }

    display.value += event.target.textContent;
    display.value = replaceTimes(display.value);
    display.value = replaceComma(display.value);
    display.value = display.value.replaceAll("/", "÷");

    display.value = display.value.replace(/\d+/g, (num) =>
      parseInt(num.slice(0, 15)).toLocaleString()
    );
    resizeInput();
  }
}
buttonNumber.forEach((element) =>
  element.addEventListener("click", displayInput)
);

//resetbutton

function resetInput(event) {
  const display = document.getElementById("show-area");
  display.value = 0;
  resizeInput();
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
    display.value = replaceTimes(display.value);
    display.value = replaceComma(display.value);
    display.value = display.value.replace(/\d+/g, (num) =>
      parseInt(num).toLocaleString()
    );
  }
}
const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", deleteInput);

//equal-tobutton

function equalToInput(event) {
  const display = document.getElementById("show-area");

  let displayValue = display.value;

  displayValue = displayValue.replaceAll("--", "+");

  displayValue = displayValue.replaceAll("++", "+");

  if (["x", "÷", "+", "-"].includes(displayValue[displayValue.length - 1])) {
    displayValue = displayValue.substring(0, displayValue.length - 1);
  }

  display.value = replaceTimes(displayValue);

  displayValue = replaceComma(displayValue);

  displayValue = displayValue.replaceAll("÷", "/");

  if (displayValue.includes("/0")) {
    display.value = "Can't divide by zero";
    setTimeout(() => {
      display.value = "0";
    }, 3000);
    return;
  }

  display.value = eval(displayValue).toLocaleString();
  resizeInput();
}

const equaltoBtn = document.querySelector(".equal-to");
equaltoBtn.addEventListener("click", equalToInput);

const themeTwoRadius = document.querySelector(".toggle-radius-two");
themeTwoRadius.classList.add("hidden");

const themeThreeRadius = document.querySelector(".toggle-radius-three");
themeThreeRadius.classList.add("hidden");

const applyThemeOne = () => {
  const body = document.querySelector(".body");
  body.classList.add("theme-one-body");
  body.classList.remove("theme-two-body", "theme-three-body");

  const showArea = document.getElementById("show-area");
  showArea.classList.add("theme-one-show-area");
  showArea.classList.remove("theme-two-show-area", "theme-three-show-area");

  const btnBackground = document.querySelector(".btn");
  btnBackground.classList.add("theme-one-btn");
  btnBackground.classList.remove("theme-two-btn", "theme-three-btn");

  const numberBackground = document.querySelectorAll(".numb");
  numberBackground.forEach((number) => {
    number.classList.add("theme-one-button");
    number.classList.remove("theme-two-button", "theme-three-button");
  });

  const resetButton = document.querySelector(".reset");
  resetButton.classList.add("theme-one-reset-delete");
  resetButton.classList.remove(
    "theme-two-reset-delete",
    "theme-three-reset-delete"
  );

  const deleteButton = document.querySelector(".delete");
  deleteButton.classList.add("theme-one-reset-delete");
  deleteButton.classList.remove(
    "theme-two-reset-delete",
    "theme-three-reset-delete"
  );

  const equaltoButton = document.querySelector(".equal-to");
  equaltoButton.classList.add("theme-one-equal-to");
  equaltoButton.classList.remove("theme-two-equal-to", "theme-three-equal-to");

  const numeriColor = document.querySelector(".numeri");
  numeriColor.classList.add("theme-one-numeri");
  numeriColor.classList.remove("theme-two-numeri", "theme-three-numeri");

  const titleh3Color = document.querySelector(".title").querySelector("h3");
  titleh3Color.classList.add("theme-one-title-h3");
  titleh3Color.classList.remove("theme-two-title-h3", "theme-three-title-h3");

  const toggleColor = document.querySelector(".toggle");
  toggleColor.classList.add("theme-one-toggle");
  toggleColor.classList.remove("theme-two-toggle", "theme-three-toggle");

  const themeOneRadius = document.querySelector(".toggle-radius-one");
  themeOneRadius.classList.add("visible");
  themeOneRadius.classList.remove("hidden");

  const themeTwoRadius = document.querySelector(".toggle-radius-two");
  themeTwoRadius.classList.add("hidden");
  themeTwoRadius.classList.remove("visible");

  const themeThreeRadius = document.querySelector(".toggle-radius-three");
  themeThreeRadius.classList.add("hidden");
  themeThreeRadius.classList.remove("visible");
};
const toggleNumberOne = document.getElementById("ThemeOne");
toggleNumberOne.addEventListener("click", applyThemeOne);

const toggleRadiusOne = document.querySelector(".toggle-radius-one");
toggleRadiusOne.addEventListener("click", applyThemeOne);

const applyThemeTwo = () => {
  const body = document.querySelector(".body");
  body.classList.add("theme-two-body");
  body.classList.remove("theme-one-body", "theme-three-body");

  const showArea = document.getElementById("show-area");
  showArea.classList.add("theme-two-show-area");
  showArea.classList.remove("theme-one-show-area", "theme-three-show-area");

  const btnBackground = document.querySelector(".btn");
  btnBackground.classList.add("theme-two-btn");
  btnBackground.classList.remove("theme-one-btn", "theme-three-btn");

  const numberBackground = document.querySelectorAll(".numb");
  numberBackground.forEach((number) => {
    number.classList.add("theme-two-button");
    number.classList.remove("theme-one-button", "theme-three-button");
  });

  const resetButton = document.querySelector(".reset");
  resetButton.classList.add("theme-two-reset-delete");
  resetButton.classList.remove(
    "theme-one-reset-delete",
    "theme-three-reset-delete"
  );

  const deleteButton = document.querySelector(".delete");
  deleteButton.classList.add("theme-two-reset-delete");
  deleteButton.classList.remove(
    "theme-one-reset-delete",
    "theme-three-reset-delete"
  );

  const equaltoButton = document.querySelector(".equal-to");
  equaltoButton.classList.add("theme-two-equal-to");
  equaltoButton.classList.remove("theme-one-equal-to", "theme-three-equal-to");

  const numeriColor = document.querySelector(".numeri");
  numeriColor.classList.add("theme-two-numeri");
  numeriColor.classList.remove("theme-one-numeri", "theme-three-numeri");

  const titleh3Color = document.querySelector(".title").querySelector("h3");
  titleh3Color.classList.add("theme-two-title-h3");
  titleh3Color.classList.remove("theme-one-title-h3", "theme-three-title-h3");

  const toggleColor = document.querySelector(".toggle");
  toggleColor.classList.add("theme-two-toggle");
  toggleColor.classList.remove("theme-one-toggle", "theme-three-toggle");

  const themeOneRadius = document.querySelector(".toggle-radius-one");
  themeOneRadius.classList.add("hidden");
  themeOneRadius.classList.remove("visible");

  const themeTwoRadius = document.querySelector(".toggle-radius-two");
  themeTwoRadius.classList.add("visible");
  themeTwoRadius.classList.remove("hidden");

  const themeThreeRadius = document.querySelector(".toggle-radius-three");
  themeThreeRadius.classList.add("hidden");
  themeThreeRadius.classList.remove("visible");
};

const toggleNumberTwo = document.getElementById("ThemeTwo");
toggleNumberTwo.addEventListener("click", applyThemeTwo);

const toggleRadiusTwo = document.querySelector(".toggle-radius-two");
toggleRadiusTwo.addEventListener("click", applyThemeTwo);

const applyThemeThree = () => {
  const body = document.querySelector(".body");
  body.classList.add("theme-three-body");
  body.classList.remove("theme-one-body", "theme-two-body");

  const showArea = document.getElementById("show-area");
  showArea.classList.add("theme-three-show-area");
  showArea.classList.remove("theme-one-show-area", "theme-two-show-area");

  const btnBackground = document.querySelector(".btn");
  btnBackground.classList.add("theme-three-btn");
  btnBackground.classList.remove("theme-one-btn", "theme-two-btn");

  const numberBackground = document.querySelectorAll(".numb");
  numberBackground.forEach((number) => {
    number.classList.add("theme-three-button");
    number.classList.remove("theme-one-button", "theme-two-button");
  });

  const resetButton = document.querySelector(".reset");
  resetButton.classList.add("theme-three-reset-delete");
  resetButton.classList.remove(
    "theme-one-reset-delete",
    "theme-two-reset-delete"
  );

  const deleteButton = document.querySelector(".delete");
  deleteButton.classList.add("theme-three-reset-delete");
  deleteButton.classList.remove(
    "theme-one-reset-delete",
    "theme-two-reset-delete"
  );

  const equaltoButton = document.querySelector(".equal-to");
  equaltoButton.classList.add("theme-three-equal-to");
  equaltoButton.classList.remove("theme-one-equal-to", "theme-two-equal-to");

  const numeriColor = document.querySelector(".numeri");
  numeriColor.classList.add("theme-three-numeri");
  numeriColor.classList.remove("theme-one-numeri", "theme-two-numeri");

  const titleh3Color = document.querySelector(".title").querySelector("h3");
  titleh3Color.classList.add("theme-three-title-h3");
  titleh3Color.classList.remove("theme-one-title-h3", "theme-two-title-h3");

  const toggleColor = document.querySelector(".toggle");
  toggleColor.classList.add("theme-three-toggle");
  toggleColor.classList.remove("theme-one-toggle", "theme-two-toggle");

  const themeOneRadius = document.querySelector(".toggle-radius-one");
  themeOneRadius.classList.add("hidden");
  themeOneRadius.classList.remove("visible");

  const themeTwoRadius = document.querySelector(".toggle-radius-two");
  themeTwoRadius.classList.add("hidden");
  themeTwoRadius.classList.remove("visible");

  const themeThreeRadius = document.querySelector(".toggle-radius-three");
  themeThreeRadius.classList.add("visible");
  themeThreeRadius.classList.remove("hidden");
};

const toggleNumberThree = document.getElementById("ThemeThree");
toggleNumberThree.addEventListener("click", applyThemeThree);

const toggleRadiusThree = document.querySelector(".toggle-radius-three");
toggleRadiusThree.addEventListener("click", applyThemeThree);
