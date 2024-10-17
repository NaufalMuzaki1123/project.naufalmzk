const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let calculation = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'C') {
      calculation = '';
    } else if (button.textContent === '=') {
      try {
        calculation = eval(calculation);
      } catch (error) {
        calculation = 'Error';
      }
    } else if (button.textContent === 'DEL') {
      calculation = calculation.slice(0, -1); 
    } else {
      calculation += button.textContent;
    }

    display.textContent = calculation === '' ? '0' : calculation; 
  });
});