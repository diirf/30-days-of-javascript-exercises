// 1. La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation
const solveLinEquation = (a = 0, b = 0, c = 0, x = 0) => {
  if (b !== 0){
    let y = (- c - (a * x)) / b;
    return y;
  }
return 0;
}

solveLinEquation(5,3,2,6);

/* 2. La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation
console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0} */
function solveQuadratic(a = 0, b = 0, c = 0){
  if (a !== 0){
    let x1 = (- 1 * b + Math.sqrt((b**2) - (4 * a * c))) / (2 * a);
    let x2 = (- 1 * b - Math.sqrt((b**2) - (4 * a * c))) / (2 * a);

    return x1 === x2 ? [x1] : [x1, x2];  
  }
  return [0];
}

solveQuadratic(1, 4, 4);

// 3. Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array
function printArray(array){
  for (let element of array){
    console.log(element);
  }
}

printArray([1,2,3,4,5]);

/* 4. Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date
showDateTime()
08/01/2020 04:08 */
function showDateTime(){
  const newDate = new Date('2020-01-08T04:08:00');
  let year = newDate.getFullYear();
  let month = String(newDate.getMonth() + 1).padStart(2,'0');
  let date = String(newDate.getDate()).padStart(2,'0');
  let hours = String(newDate.getHours()).padStart(2,'0');
  let minutes = String(newDate.getMinutes()).padStart(2,'0');
 
     
  return `${date}/${month}/${year} ${hours}:${minutes}`;
 }
 
 showDateTime();

/* 5. Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
swapValues(3, 4); // x => 4, y=>3
swapValues(4, 5); // x = 5, y = 4 */
function swapValues(a = 0, b = 0){
  let valueA = b;
  let valueB = a;
  
  return `x = ${valueA}, y = ${valueB}`  
}

swapValues(3,5);

/* 6. Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()) 
console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A'] */
function reverseArray(array){
  const revArray = [];

  for (let i = array.length - 1; i >= 0; i--){
    revArray.push(array[i]);
  }

  return revArray;
}

reverseArray([1,2,3,4]);

// 7. Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray
function capitalizeArray(array){
  const capitalizedarray = [];

  for (let element of array){
    capitalizedarray.push(element.toUpperCase());
  }

  return capitalizedarray;
}

capitalizeArray(['Hola', 'como', 'ESTAS', 'tU']);

// 8. Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento
const addItem = (...item) => {
  const itemArray = [];

  itemArray.push(...item);

  return itemArray;
}

addItem(5);

// 9. Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index
const removeItem = (array, index) =>{
  if (index <= array.length - 1){
    if (array[index + 1] !== undefined){
      array.splice(index, 1);
      console.log(array);
    }
    else{
      array.pop();
      console.log(array);
    }
  }
  else{
    console.log('Enter a valid index');
  }
}

removeItem(['a', 'b', 'c', 'd'], 4);

// 10. Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango
function sumOfNumbers(a){
let sum = 0;
  if (a > 0){
    for (i = 0; i <= a; i++){
      sum += i;
    }
  }
  else{
    for (i = 0; i >= a; i--){
      sum += i;
    }
  }
  return sum;
}

// 11. Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango
function sumOfOdds(a){
  let sum = 0;
    if (a > 0){
      for (i = 0; i <= a; i++){
        if (i % 2 !== 0){
          sum += i;
        }
      }
    }
    else{
      for (i = 0; i >= a; i--){
        if (i % 2 !== 0){
          sum += i;
        }
      }
    }
  return sum;
}

sumOfOdds(2);

// 12. Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango
function sumOfEven(a){
  let sum = 0;
    if (a > 0){
      for (i = 0; i <= a; i++){
        if (i % 2 === 0){
          sum += i;
        }
      }
    }
    else{
      for (i = 0; i >= a; i--){
        if (i % 2 === 0){
          sum += i;
        }
      }
    }
  return sum;
}

sumOfEven(2);

/* 13. Declare una función llamada evensAndOdds. Toma un entero positivo como parámetro y cuenta el número de pares e impares
evensAndOdds(100);
El número de impares son 50
El número de pares es 51 */
function evensAndOdds(a){
  let countEven = [];
  let countOdd = [];
  let lengthEven;
  let lengthOdd;
      
    if (a > 0){
      for (i = 0; i <= a; i++){
        if (i % 2 === 0){
          countEven.push(i);
          lengthEven = countEven.length - 1;
        }
        else{   
          countOdd.push(i);
          lengthOdd = countOdd.length;
        }
      }
      return `The even numbers are: ${lengthEven} and the odd numbers are: ${lengthOdd}`
    }
    else{
      console.log('Enter a positive number');
    }
  }

evensAndOdds(100);

/* 14. Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos
sum(1, 2, 3); // -> 6
sum(1, 2, 3, 4); // -> 10 */
const sum = (...arg) =>{
  let accum = 0;

  for (i = 0; i < arg.length; i++){
    accum += arg[i]; 
  }
  return accum;
}

sum(1, 2, 3);

// 15. Escriba una función randomUserIp que genere una ip de usuario aleatoria
function randomUserIp(){
  const randomNumbers = () => Math.round(Math.random()*255);
  return `${randomNumbers()}.${randomNumbers()}.${randomNumbers()}.${randomNumbers()}`  
}

randomUserIp();

// 16. Escriba una función randomMacAddress que genere una dirección mac aleatoria
function randomMacAddress(){
  const hexPattern = '0123456789ABCDEF';
  const randomHex = () => hexPattern[Math.round(Math.random()*15)];
  
  return `${randomHex()}${randomHex()}-${randomHex()}${randomHex()}-${randomHex()}${randomHex()}-${randomHex()}${randomHex()}-${randomHex()}${randomHex()}-${randomHex()}${randomHex()}`;
}

randomMacAddress();

/* 17. Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal
console.log(randomHexaNumberGenerator());
'#ee33df' */
function randomHexaNumberGenerator(){
  const pattern = '0123456789ABCDEF';
  const randomHexx = () => pattern[Math.round(Math.random()*15)];

  return `#${randomHexx()}${randomHexx()}${randomHexx()}${randomHexx()}${randomHexx()}${randomHexx()}`;
}

randomHexaNumberGenerator()

/* 18. Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id
console.log(userIdGenerator());
41XTDbE */
function userIdGenerator(){
  const randomNumbersAscii = () => Math.round((Math.random() * 9) + 48);
  const randomCapitalLettersAscii = () => Math.round((Math.random() * 25) + 65);
  const randomLettersAscii = () => Math.round((Math.random() * 25) + 97);

  const asciiCode = () =>{
    const choice = Math.round((Math.random() * 2));
    switch (choice){
      case 0:
        return randomNumbersAscii();
      case 1:
        return randomCapitalLettersAscii();
      case 2:
        return randomLettersAscii();
    } 
  }

  let id = '';
  for (let i = 0; i < 7; i++) {
    id += String.fromCharCode(asciiCode());    
  }
  return id;
}

userIdGenerator();