'use strict';

   const calculate = (e) => {

      const num1 = document.querySelectorAll('input')[0].value;
      const num2 = document.querySelectorAll('input')[1].value;
      const buttonValue = e.target.innerText;

      const resultPlace = document.querySelectorAll('div')[1];

      if(buttonValue === '+') {
         resultPlace.innerHTML = parseFloat(num1) + parseFloat(num2);
      } else if(buttonValue === '-') {
         resultPlace.innerHTML = parseFloat(num1) - parseFloat(num2);
      } else if(buttonValue === '*') {
         resultPlace.innerHTML = parseFloat(num1) * parseFloat(num2);
      } else if(buttonValue === '/') {
         resultPlace.innerHTML = parseFloat(num1) / parseFloat(num2);
      } else {
         resultPlace.innerHTML = '';
         num1.reset();
         num2.reset();
      }
   }

console.log(calculate);
const buttons = document.querySelectorAll('button');

buttons.forEach((elem) => {

    elem.addEventListener('click', calculate);
     
});