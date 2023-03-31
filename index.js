document.body.classList.add("body");
const buttonNumber = document.querySelectorAll(".numb");

//for resizing the numbers that can appear on the display
function resizeInput() {
  const display = document.getElementById("show-area");
  const displayWidth = display.offsetWidth;
  console.log(display.offsetWidth);
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
  // console.log(event.target.textContent);
  const display = document.getElementById("show-area");
  // console.log(display.value);

  if (display.value.length === 1 && display.value == 0) {
    if (["x", "/", "+", ].includes(event.target.textContent)) {
      display.value = 0;
      return;
    }
    if (event.target.textContent === ".") {
      display.value = "0.";
      return;
    }
    display.value = event.target.textContent;
  } else {
    // console.log(event.target.textContent == ".");
    if(
      display.value[display.value.length - 2 ] === "-" && display.value[display.value.length - 1] === "-" 
      && event.target.textContent === "-"
    ){
      return;
    }
    if (
      ["x", "/", "+", ].includes(event.target.textContent) &&
      ["*", "÷", "+", "-", "."].includes(
        display.value[display.value.length - 1]
      )
    ) {
      // display.value += '0.';
      return;
    }

    if (event.target.textContent == "." && display.value.endsWith(".")) {
      // display.value += '0.';
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

    console.log(lastDecimal);

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
    display.value = display.value.replace("x", "*");
    display.value = display.value.replaceAll(",", "");
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
    display.value = display.value.replace("x", "*");
    display.value = display.value.replaceAll(",", "");
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

  display.value = displayValue.replaceAll("x", "*");

  displayValue = displayValue.replaceAll(",", "");

  displayValue = displayValue.replaceAll("÷", "/");

  console.log(displayValue)
  if(displayValue.includes("/0")){
    display.value = "Can't divide by zero"
    setTimeout(() =>{
      display.value = "0"
    }, 3000)
    return;
  }

  display.value = eval(displayValue).toLocaleString();
  resizeInput();
}

const equaltoBtn = document.querySelector(".equal-to");
equaltoBtn.addEventListener("click", equalToInput);

const themeTwoRadius = document.querySelector(".toggle-radius-two");
themeTwoRadius.style.visibility = "hidden";

const themeThreeRadius = document.querySelector(".toggle-radius-three");
themeThreeRadius.style.visibility = "hidden";

const applyThemeOne = () => {
  const docBody = document.querySelector(".body");
  docBody.style.backgroundColor = "hsl(221, 26%, 31%)";

  const showAreaColor = document.getElementById("show-area");
  showAreaColor.style.backgroundColor = "hsl(224, 36%, 15%)";
  showAreaColor.style.color = "#ffffff";

  const clickNumber = document.querySelector(".numeri");
  clickNumber.style.color = "#ffffff";

  const h3Element = document.querySelector(".title").querySelector("h3");
  h3Element.style.color = "#ffffff";

  const btnBackground = document.querySelector(".btn");
  btnBackground.style.backgroundColor = "hsl(224, 36%, 15%)";

  const deleteBtnOne = document.querySelector(".delete");
  deleteBtnOne.style.backgroundColor = "hsl(225, 21%, 49%)";
  deleteBtnOne.style.boxShadow = "inset 0px -4px 0px hsl(224, 28%, 35%)";

  const toggleColor = document.querySelector(".toggle");
  toggleColor.style.backgroundColor = "#242D44";

  deleteBtnOne.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#A2B2E1";
  });
  deleteBtnOne.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(225, 21%, 49%)";
  });
  // deleteBtnOne.styleSheet.cssText = css;

  const resetBtnOne = document.querySelector(".reset");
  resetBtnOne.style.backgroundColor = "hsl(225, 21%, 49%)";
  resetBtnOne.style.boxShadow = "inset 0px -4px 0px hsl(224, 28%, 35%)";
  resetBtnOne.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#A2B2E1";
  });
  resetBtnOne.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(225, 21%, 49%)";
  });

  const equalToBtnOne = document.querySelector(".equal-to");
  equalToBtnOne.style.backgroundColor = "hsl(6, 63%, 50%)";
  equalToBtnOne.style.color = "#ffffff";
  equalToBtnOne.style.boxShadow = "inset 0px -4px 0px hsl(6, 70%, 34%)";

  equalToBtnOne.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#F96B5B";
  });
  equalToBtnOne.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(6, 63%, 50%)";
  });

  const keypad = document.querySelectorAll(".numb");
  keypad.forEach((key) => {
    key.style.backgroundColor = "hsl(45, 7%, 89%)";
    key.style.color = "#434A59";
    key.style.boxShadow = "inset 0px -4px 0px hsl(	35, 11%, 61%)";
    // key.classList.add('numb')

    key.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "hsl(60, 100%, 100%)";
    });

    key.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "hsl(45, 7%, 89%)";
    });
  });

  // document.styleSheets[0].insertRule("button:hover {color:red}")

  const themeOneRadius = document.querySelector(".toggle-radius-one");
  themeOneRadius.style.visibility = "visible";

  const themeTwoRadius = document.querySelector(".toggle-radius-two");
  themeTwoRadius.style.visibility = "hidden";

  const themeThreeRadius = document.querySelector(".toggle-radius-three");
  themeThreeRadius.style.visibility = "hidden";
};
const toggleNumberOne = document.getElementById("ThemeOne");
toggleNumberOne.addEventListener("click", applyThemeOne);

const toggleRadiusOne = document.querySelector(".toggle-radius-one");
toggleRadiusOne.addEventListener("click", applyThemeOne);

const applyThemeTwo = () => {
  const docBody = document.querySelector(".body");
  docBody.style.backgroundColor = "hsl(0, 0%, 90%)";

  const showAreaColor = document.getElementById("show-area");
  showAreaColor.style.backgroundColor = "hsl(0, 0%, 93%)";
  showAreaColor.style.color = "#36362C";

  const clickNumber = document.querySelector(".numeri");
  clickNumber.style.color = "#36362C";

  const h3Element = document.querySelector(".title").querySelector("h3");
  h3Element.style.color = "#36362C";

  const btnBackground = document.querySelector(".btn");
  btnBackground.style.backgroundColor = "hsl(0, 5%, 81%)";

  const deleteBtnTwo = document.querySelector(".delete");
  deleteBtnTwo.style.backgroundColor = "hsl(184, 42%, 37%)";
  deleteBtnTwo.style.boxShadow = "inset 0px -4px 0px hsl(185, 58%, 25% )";
  deleteBtnTwo.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(185, 40%, 56%)";
  });
  deleteBtnTwo.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(184, 42%, 37%)";
  });

  const resetBtnTwo = document.querySelector(".reset");
  resetBtnTwo.style.backgroundColor = "hsl(184, 42%, 37%)";
  resetBtnTwo.style.boxShadow = "inset 0px -4px 0px hsl(185, 58%, 25% )";
  resetBtnTwo.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(185, 40%, 56%)";
  });
  resetBtnTwo.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(184, 42%, 37%)";
  });

  const equalToBtnTwo = document.querySelector(".equal-to");
  equalToBtnTwo.style.backgroundColor = "hsl(25, 98%, 40%)";
  equalToBtnTwo.style.color = "#ffffff";
  equalToBtnTwo.style.boxShadow = "inset 0px -4px 0px hsl(25, 99%, 27%)";
  equalToBtnTwo.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(25, 100%, 61%)";
  });
  equalToBtnTwo.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(25, 98%, 40%)";
  });

  const keypad = document.querySelectorAll(".numb");
  keypad.forEach((key) => {
    key.style.backgroundColor = "hsl(45, 7%, 89%)";
    key.style.color = "#36362C";
    key.style.boxShadow = "inset 0px -4px 0px hsl(	35, 11%, 61%)";

    key.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "hsl(60, 100%, 100%)";
    });

    key.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "hsl(45, 7%, 89%)";
    });

    const toggleColor = document.querySelector(".toggle");
    toggleColor.style.backgroundColor = "#D2CDCD";
  });

  // const toggle = document.querySelector('.toggle')
  // toggle.style.visibility = 'visible'

  const themeOneRadius = document.querySelector(".toggle-radius-one");
  themeOneRadius.style.visibility = "hidden";

  const themeTwoRadius = document.querySelector(".toggle-radius-two");
  themeTwoRadius.style.visibility = "visible";

  const themeThreeRadius = document.querySelector(".toggle-radius-three");
  themeThreeRadius.style.visibility = "hidden";
};
const toggleNumberTwo = document.getElementById("ThemeTwo");
toggleNumberTwo.addEventListener("click", applyThemeTwo);

const toggleRadiusTwo = document.querySelector(".toggle-radius-two");
toggleRadiusTwo.addEventListener("click", applyThemeTwo);

const applyThemeThree = () => {
  const docBody = document.querySelector(".body");
  docBody.style.backgroundColor = "hsl(268, 75%, 9%)";

  const showAreaColor = document.getElementById("show-area");
  showAreaColor.style.backgroundColor = "hsl(268, 71%, 12%)";
  showAreaColor.style.color = "#FFE53D";

  const clickNumber = document.querySelector(".numeri");
  clickNumber.style.color = "#FFE53D";

  const h3Element = document.querySelector(".title").querySelector("h3");
  h3Element.style.color = "#FFE53D";

  const btnBackground = document.querySelector(".btn");
  btnBackground.style.backgroundColor = "hsl(268, 71%, 12%)";

  const deleteBtnThree = document.querySelector(".delete");
  // const css = 'table td:hover{ background-color: #00ff00 }';
  deleteBtnThree.style.backgroundColor = "hsl(	281, 89%, 26%)";
  deleteBtnThree.style.boxShadow = "inset 0px -4px 0px hsl(285, 91%, 52% )";
  deleteBtnThree.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(280, 56%, 44%)";
  });
  deleteBtnThree.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(	281, 89%, 26%)";
  });
  // deleteBtnThree.styleSheet.cssText = css;

  const resetBtnThree = document.querySelector(".reset");
  resetBtnThree.style.backgroundColor = "hsl(	281, 89%, 26%)";
  resetBtnThree.style.boxShadow = "inset 0px -4px 0px hsl(285, 91%, 52% )";
  resetBtnThree.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(280, 56%, 44%)";
  });
  resetBtnThree.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(	281, 89%, 26%)";
  });

  const equalToBtnThree = document.querySelector(".equal-to");
  equalToBtnThree.style.backgroundColor = "hsl(176, 100%, 44%)";
  equalToBtnThree.style.color = "#1A2327";
  equalToBtnThree.style.boxShadow = "inset 0px -4px 0px hsl(177, 92%, 70%)";
  equalToBtnThree.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(176, 68%, 77%)";
  });
  equalToBtnThree.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "hsl(176, 100%, 79%)";
  });

  const toggleColor = document.querySelector(".toggle");
  toggleColor.style.backgroundColor = "#1E0936";

  const keypad = document.querySelectorAll(".numb");
  keypad.forEach((key) => {
    key.style.backgroundColor = "hsl(268, 47%, 21%)";
    key.style.color = "#FFE53D";
    key.style.boxShadow = "inset 0px -4px 0px hsl(290, 70%, 36%)";

    key.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "hsl(268, 54%, 44%)";
    });

    key.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "hsl(268, 47%, 21%)";
    });
  });

  const themeOneRadius = document.querySelector(".toggle-radius-one");
  themeOneRadius.style.visibility = "hidden";

  const themeTwoRadius = document.querySelector(".toggle-radius-two");
  themeTwoRadius.style.visibility = "hidden";

  const themeThreeRadius = document.querySelector(".toggle-radius-three");
  themeThreeRadius.style.visibility = "visible";
};

// const applyToggleRadiusThree =() =>{

// }
const toggleNumberThree = document.getElementById("ThemeThree");
toggleNumberThree.addEventListener("click", applyThemeThree);

const toggleRadiusThree = document.querySelector(".toggle-radius-three");
toggleRadiusThree.addEventListener("click", applyThemeThree);

// const toggleRadiusThree = document.querySelector('toggle-radius-three')
// toggleRadiusThree.addEventListener("click", applyToggleRadiusThree)
