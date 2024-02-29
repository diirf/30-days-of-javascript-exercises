/* 1. Crear un div contenedor en el documento HTML y crear 100 a 100 números dinámicamente y anexar al div contenedor
  i. El fondo de los números pares es verde
  ii. El fondo de los números impares es amarillo
  iii. El fondo de los números primos es rojo */

//body styles
document.body.style.textAlign = 'center';

//tittle styles
const tittle = document.querySelector('h1');
const subtittle = document.querySelector('h2');
tittle.style.marginBottom = '0px';
subtittle.style.marginTop = '0px';
subtittle.style.fontSize = '19px';
subtittle.style.textDecoration = 'underline';
subtittle.style.fontWeight = 'lighter';
subtittle.style.color = '#330166'

//container styles
const container = document.querySelector('.numbers');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.textAlign = 'center';
container.style.maxWidth = '630px';
container.style.margin = '0 auto';

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

//box numbers
const CreatingNumbers = () => {
  for (let i = 0; i <= 101; i++){
    const spanNum = document.createElement('span');
    const divNum = document.createElement('div');
    
    spanNum.textContent = i;
    spanNum.style.fontSize = '40px';
    spanNum.style.color = 'white';
    
    divNum.style.width = '102px';
    divNum.style.height = '54px';
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
    container.appendChild(divNum);
  }
}

CreatingNumbers();