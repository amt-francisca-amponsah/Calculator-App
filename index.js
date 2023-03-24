document.body.classList.add('body')
const buttonNumber = document.querySelectorAll(".numb");

function displayInput(event) {
  console.log(event.target.textContent);
  const display = document.getElementById("show-area");
  console.log(display.value);

  if (display.value.length === 1 && display.value == 0) {
    
    if(['x','/','+','-'].includes(event.target.textContent)){
      display.value = 0;
      return ;
    }
    if(event.target.textContent === '.'){
      display.value = '0.';
      return;
    }
    display.value = event.target.textContent;
  } else {
    console.log(event.target.textContent == '.')
    if(['x','/','+','-'].includes(event.target.textContent) && ['*','/','+','-','.'].includes(display.value[display.value.length -1])){
      // display.value += '0.';
      return;
    }
    if(event.target.textContent == '.' && display.value.endsWith('.')){
      // display.value += '0.';
      return;
    }
    if(event.target.textContent === '.' && !Number(display.value[display.value.length -1])){
      display.value += '0.';
      return;
    }
    display.value += event.target.textContent;
    display.value = display.value.replace('x','*')
  }
 
  // String.prototype.convertString = function () {
  //   return Number(this.replace(",", "")).toLocaleString("en-US");
  // }

  // operandOne.innerText = parseInt(show-area).toLocaleString("en");

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


const applyThemeOne =() =>{
const docBody = document.querySelector(".body")
docBody.style.backgroundColor = 'hsl(221, 26%, 31%)'

const showAreaColor = document.getElementById('show-area')
showAreaColor.style.backgroundColor = 'hsl(224, 36%, 15%)'
showAreaColor.style.color = '#ffffff'

const clickNumber = document.querySelector('.numeri')
clickNumber.style.color = '#ffffff'


const h3Element = document.querySelector('.title').querySelector('h3')
h3Element.style.color = '#ffffff'

const btnBackground = document.querySelector('.btn')
btnBackground.style.backgroundColor = 'hsl(224, 36%, 15%)'

const deleteBtnOne = document.querySelector('.delete')
// const css = 'table td:hover{ background-color: #00ff00 }';
deleteBtnOne.style.backgroundColor = 'hsl(225, 21%, 49%)'
deleteBtnOne.style.boxShadow = 'inset 0px -4px 0px hsl(224, 28%, 35%)'
// deleteBtnOne.styleSheet.cssText = css;

const resetBtnOne = document.querySelector('.reset')
resetBtnOne.style.backgroundColor = 'hsl(225, 21%, 49%)'
resetBtnOne.style.boxShadow = 'inset 0px -4px 0px hsl(224, 28%, 35%)'

const equalToBtnOne = document.querySelector('.equal-to')
equalToBtnOne.style.backgroundColor = 'hsl(6, 63%, 50%)'
equalToBtnOne.style.color = '#ffffff'
equalToBtnOne.style.boxShadow = 'inset 0px -4px 0px hsl(6, 70%, 34%)'

}
const toggleNumberOne =document.getElementById('ThemeOne');
toggleNumberOne.addEventListener("click", applyThemeOne)

const toggleRadiusOne =document.querySelector('.toggle-radius-one');
toggleRadiusOne.addEventListener("click", applyThemeOne)

const applyThemeTwo =() =>{
  const docBody = document.querySelector(".body")
  docBody.style.backgroundColor = 'hsl(0, 0%, 90%)'
  
  const showAreaColor = document.getElementById('show-area')
  showAreaColor.style.backgroundColor = 'hsl(0, 0%, 93%)'
  showAreaColor.style.color = '#36362C';
  
  const clickNumber = document.querySelector('.numeri')
  clickNumber.style.color = '#36362C'
  
  const h3Element = document.querySelector('.title').querySelector('h3')
  h3Element.style.color = '#36362C'
  
  const btnBackground = document.querySelector('.btn')
  btnBackground.style.backgroundColor = 'hsl(0, 5%, 81%)'
  
  const deleteBtnTwo = document.querySelector('.delete')
  // const css = 'table td:hover{ background-color: #00ff00 }';
  deleteBtnTwo.style.backgroundColor = 'hsl(184, 42%, 37%)'
  deleteBtnTwo.style.boxShadow = 'inset 0px -4px 0px hsl(185, 58%, 25% )'
  // deleteBtnTwo.styleSheet.cssText = css;
  
  const resetBtnTwo = document.querySelector('.reset')
  resetBtnTwo.style.backgroundColor = 'hsl(184, 42%, 37%)'
  resetBtnTwo.style.boxShadow = 'inset 0px -4px 0px hsl(185, 58%, 25% )'
  
  const equalToBtnTwo = document.querySelector('.equal-to')
  equalToBtnTwo.style.backgroundColor = 'hsl(25, 98%, 40%)'
  equalToBtnTwo.style.color = '#ffffff'
  equalToBtnTwo.style.boxShadow = 'inset 0px -4px 0px hsl(25, 99%, 27%)'
  
  }
  const toggleNumberTwo =document.getElementById('ThemeTwo');
  toggleNumberTwo.addEventListener("click", applyThemeTwo)

  const toggleRadiusTwo =document.querySelector('.toggle-radius-two');
  toggleRadiusTwo.addEventListener("click", applyThemeTwo)

const applyThemeThree =() =>{
  const docBody = document.querySelector(".body");
  docBody.style.backgroundColor = 'hsl(268, 75%, 9%)'

  const showAreaColor = document.getElementById('show-area')
  showAreaColor.style.backgroundColor ='hsl(268, 71%, 12%)'
  showAreaColor.style.color = '#FFE53D';

  const clickNumber = document.querySelector('.numeri')
  clickNumber.style.color = '#FFE53D';

  const h3Element = document.querySelector('.title').querySelector('h3')
  h3Element.style.color = '#FFE53D';

  const btnBackground = document.querySelector('.btn')
  btnBackground.style.backgroundColor = 'hsl(268, 71%, 12%)'


  const deleteBtnThree = document.querySelector('.delete')
  // const css = 'table td:hover{ background-color: #00ff00 }';
  deleteBtnThree.style.backgroundColor = 'hsl(281, 89%, 26%)'
  deleteBtnThree.style.boxShadow = 'inset 0px -4px 0px hsl(285, 91%, 52% )'
  // deleteBtnThree.styleSheet.cssText = css;


  const resetBtnThree = document.querySelector('.reset')
  resetBtnThree.style.backgroundColor = 'hsl(281, 89%, 26%)'
  resetBtnThree.style.boxShadow = 'inset 0px -4px 0px hsl(285, 91%, 52% )'

  const equalToBtnThree = document.querySelector('.equal-to')
  equalToBtnThree.style.backgroundColor = 'hsl(176, 100%, 44%)'
  equalToBtnThree.style.color = '#1A2327'
  equalToBtnThree.style.boxShadow = 'inset 0px -4px 0px hsl(177, 92%, 70%)'  

}

// const applyToggleRadiusThree =() =>{

// }
const toggleNumberThree = document.getElementById('ThemeThree');
toggleNumberThree.addEventListener("click", applyThemeThree)

const toggleRadiusThree =document.querySelector('.toggle-radius-three');
toggleRadiusThree.addEventListener("click", applyThemeThree)

// const toggleRadiusThree = document.querySelector('toggle-radius-three')
// toggleRadiusThree.addEventListener("click", applyToggleRadiusThree)