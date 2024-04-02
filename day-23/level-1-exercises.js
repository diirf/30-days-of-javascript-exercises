// 1. Generar números y marcar pares, impares y primos con tres colores diferentes

//creating tittle and subtitle
const h1 = document.querySelector('h1');
h1.textContent = 'Number Generator';
h1.style.textAlign = 'center';
h1.style.color = '#5BBC7A';
h1.style.fontSize = '25px';
h1.style.margin = '0 0 5px 0';

const h2 = document.querySelector('h2');
h2.textContent = '30DaysOfJavaScript:DOM Day 2';
h2.style.textAlign = 'center';
h2.style.fontSize = '16px';
h2.style.fontWeight = 'normal'
h2.style.margin = '0 0 27px 0';

//creating input and button
const mainContainer = document.createElement('div');
mainContainer.style.margin = '0 auto';
mainContainer.style.maxWidth = '524px';
h2.insertAdjacentElement('afterend', mainContainer);

const inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.style.justifyContent = 'center';
inputContainer.style.columnGap = '13px';
inputContainer.style.margin = '0 0 18px 0';
mainContainer.appendChild(inputContainer);

const input = document.createElement('input');
input.style.minHeight = '24px';
input.style.borderColor = '#91D2A5';
input.style.borderStyle = 'solid';
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Generate more numbers');
input.setAttribute('size', '50px');
input.setAttribute('required', 'true');
inputContainer.appendChild(input);

const button = document.createElement('button');
button.textContent = 'Generate numbers';
button.style.color = 'white';
button.style.backgroundColor = '#5BBC7A';
button.style.border = 'none';
button.style.minHeight = '30px';
button.setAttribute('type', 'button');
inputContainer.appendChild(button);

//calculate if a number is prime
function isPrimeNumber(number){
  if (number < 2){
    return false;
  }
  
  for (let i = 2; i < number; i++){
    const quotient = Math.floor(number / i);

    if (number % i === 0){
      return false;
    }
    else if (quotient <= i){
      return true;
    }
  }
  return true;
}

//calculate if a number is even
function isEvenNumber(number){
  return (number % 2) === 0;
}

//styles box numbers
const containerNumbers = document.querySelector('.numbers');
containerNumbers.style.display = 'flex';
containerNumbers.style.flexWrap = 'wrap';
containerNumbers.style.textAlign = 'center';
containerNumbers.style.maxWidth = '630px';
containerNumbers.style.margin = '0 auto';

//box numbers
const CreatingNumbers = () => {
  for (let i = 0; i < +input.value; i++){
    const spanNum = document.createElement('span');
    const divNum = document.createElement('div');
    
    spanNum.textContent = i;
    spanNum.style.fontSize = '26px';
    spanNum.style.color = 'white';
    
    divNum.style.width = '62px';
    divNum.style.height = '30px';
    divNum.style.margin = '1.5px';
    
    if (isPrimeNumber(i)){
      divNum.style.backgroundColor = '#FD5E53';
    }
    else if (isEvenNumber(i)){
      divNum.style.backgroundColor = '#21BF73';
    }
    else{
      divNum.style.backgroundColor = '#FDDB3A';
    }

    divNum.appendChild(spanNum);
    containerNumbers.appendChild(divNum);
  }
}

//creating error message
const errorMsg = document.createElement('p');
errorMsg.style.margin = '0 0 5px 0';
errorMsg.style.color = 'red';
errorMsg.style.fontSize = '14px';
mainContainer.insertAdjacentElement('afterbegin', errorMsg);

//creating events
button.addEventListener('click', (e) => {
  if (!input.value){
    errorMsg.textContent = 'Enter number value on the input field to generate numbers';
  }
  else if(isNaN(input.value)){
    errorMsg.textContent = 'Input value must be a number';
  }
  else{
    containerNumbers.innerHTML = '';
    CreatingNumbers();
    errorMsg.textContent = '';
  }
})