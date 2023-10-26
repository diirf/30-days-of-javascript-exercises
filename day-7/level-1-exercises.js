// 1. Declare una función fullName e imprima su nombre completo
function fullName(){
    console.log('Indira Franchi');
}

fullName();

// 2. Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo
function fullName(firstName, lastName){
  return `${firstName} ${lastName}`;
}

console.log(fullName('Indira', 'Franchi'));

// 3. Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
function addNumbers(a, b){
  return a + b;
}

addNumbers(3,2);

// 4. El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo
function areaOfRectangle(length, width){
  return length * width;
}

areaOfRectangle(5, 5);

// 5. El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo
function perimeterOfRectangle(length, width){
  return 2 * (length + width);
}

perimeterOfRectangle(5,3)

// 6. El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma
function volumeOfRectPrism(length, width, height){
  return length * width * height;
}

volumeOfRectPrism(5, 2, 2);

// 7. El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo
function areaOfCircle(radio){
  return Math.PI * radio**2;
}

areaOfCircle(10);

// 8. La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo
function circumOfCircle(radio){
  return 2 * Math.PI * radio;
}

circumOfCircle(8);

// 9. La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia
function density(mass, volume){
  return mass / volume;
}

density(18,2);

// 10. La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed
const velocity = (distance, time) => distance / time;

console.log(velocity(5,2));

// 11. El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia
function weight(mass, gravity){
  return mass * gravity;
}

weight(20,9.80);

// 12. La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F
function convertCelsiusToFahrenheit(c){
  return (c * 9/5) + 32;
}

convertCelsiusToFahrenheit(32);

/* 13. El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación:
    i) Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
    ii) Peso bajo: IMC inferior a 18,5
    iii) Peso normal: IMC de 18,5 a 24,9
    iv) Sobrepeso: IMC de 25 a 29,9
    v)  Obeso: IMC es 30 o más */
let imc;

const calculateIMC = (kgWeight, height) => {
  imc = kgWeight / (height * height);
  
  switch (true){
    case imc < 18.5:
      console.log(`Your imc is ${imc}, you are underweight`);
      break;
    case imc >= 18.5 && imc < 24.9:
      console.log(`Your imc is ${imc}, your weight is normal`);
      break;
    case imc >= 25 && imc <= 29.9:
      console.log(`Your imc is ${imc}, you are overweight`);
      break;
    case imc >= 30:
      console.log(`Your imc is ${imc}, you have obesity`);
      break;
    default:
      console.log(`You have entered unreal values`);
      break;
  } 
}

console.log(calculateIMC(55,1.47));

// 14. Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano
function checkSeason(month){
  switch (month){
    case 'December':
    case 'January':
    case 'February':
      console.log('Winter');
      break;
    case 'March':
    case 'Aprile':
    case 'May':
      console.log('Spring');
      break;
    case 'June':
    case 'July':
    case 'August':
      break;
    case 'September':
    case 'October':
    case 'November':
      console.log('Autumn');
      break;
    default:
      console.log('Invalid month');
  } 
}

checkSeason('December');

/* 15. Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max
console.log(findMax(0, 10, 5));
10;
console.log(findMax(0, -10, -2));
0; */
function findMax(a, b, c){
  if (((b - a) || (b - c)) > 0){
    max = b;
  }
  else if (((c - a) || (c - b)) > 0){
    max = c;
  }
  else{
    max = a;
  }
return max;
}