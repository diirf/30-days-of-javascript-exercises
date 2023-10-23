// 1. Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios (fe3jo1gl124g, xkqci4utda1lmbelpkm03rba)
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const charactersLength = characters.length; 
let i = 0;
let id = '';

do{
  id += characters[Math.floor(Math.random() * charactersLength)];
  i++;
}
while(i < Math.floor(Math.random() * charactersLength));

console.log(id);

// 2. Escribe un script que genere un número hexadecimal aleatorio ('#ee33df')
const hexCharacters = '0123456789ABCDEF';
const hexLength = hexCharacters.length;
let j = 0;
let hexNum = '';

while (j <= 5){
  hexNum += hexCharacters[Math.floor(Math.random() * hexLength)];
  j++;
}

console.log(hexNum);

// 3. Escribe un script que genere un número de color rgb aleatorio (rgb(240,180,80))
const randomNumber = () => {return Math.floor(Math.random() * 255)};

console.log(`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`);

// 4. Usando el array countries anterior, crea un array como el siguiente (["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"])
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany', 'Hungary','Ireland', 'Iceland', 'Japan','Kenya'];
const countriesCapital = [];

for (let country of countries){
  country = country.toUpperCase();
  countriesCapital.push(country);
}

console.log(countriesCapital);

// 5. Usando el array countries anterior, crea un array para saber la longitud de cada país ([7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5])
const countriesLength = [];

for (let country of countries){
  country = country.length;
  countriesLength.push(country);
}

console.log(countriesLength);

/* 6. Utiliza el array countries para crear la siguiente array de arrays 
([['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]]) */
const countriesWithKeys = [];

for (let country of countries){
  const key = country.slice(0,3).toUpperCase();
  const length = country.length;
  countriesWithKeys.push([country, key, length]);
} 

console.log(countriesWithKeys);

// 7. En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo como array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land' (['Finland','Ireland', 'Iceland'])
const countriesLand = [];
let regex = /land$/;

for (let i = 0; i < countries.length; i++){
  if (countries[i].search(regex) !== -1){
    countriesLand.push(countries[i]);
  }
}
if (countriesLand.length > 0){
  console.log(countriesLand);
}
else{
  console.log(`Any of the countries finish with 'land'`);
}

// 8. En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia' (['Albania', 'Bolivia','Ethiopia'])
const countriesIa = [];
let regex2 = /ia$/;

for (let i = 0; i < countries.length; i++){
  if (countries[i].search(regex2) !== -1){
    countriesIa.push(countries[i]);
  }
}
if (countriesIa.length > 0){
  console.log(countriesIa);
}
else{
  console.log(`Any of the countries finish with 'ia'`);
}

// 9. Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres (Ethiopia)
let max = countries[0];

for (let i = 1; i < countries.length; i++){
  if (countries[i].length > max.length){
    max = countries[i];
  }
}

console.log(`This is the country with most letters: ${max}`);

// 10. Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres (['Japan', 'Kenya'])
const countryWithFiveLetters = [];

for (let country of countries){
  if (country.length === 5){
    countryWithFiveLetters.push(country);
  }
}

console.log(countryWithFiveLetters);

// 11. Encuentra la palabra más larga en el array webTechs
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
let maxx = webTechs[0];

for (let tech of webTechs){
  if (tech.length > maxx.length){
    maxx = tech;
  }
}

console.log(`This is the web tech with most letters: ${maxx}`);

/* 12. Utiliza el array de webTechs para crear el siguiente array de arrays:
([["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]) */
const arrayArrayWebTechs = [];
let lengthOfLetters;

for (let tech of webTechs){
  lengthOfLetters = tech.length;
  arrayArrayWebTechs.push(`${tech}, ${lengthOfLetters}`);
}

console.log(arrayArrayWebTechs);

// 13. Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = '';

for (let mern of mernStack){
  acronym += mern.slice(0,1).toUpperCase();
}

console.log(acronym);

// 14. Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos
for (let tech of webTechs){
  console.log(tech);
}

// 15. Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse()
let fruits = ['banana', 'orange', 'mango', 'lemon'];
const fruitsLength = fruits.length;

for (let i = fruits.length-1; i >= 0; i--){
  fruits.push(fruits[i]);
}
fruits = fruits.slice(fruitsLength)
console.log(fruits);

/* 16. Imprime todos los elementos del array como se muestra a continuación:
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB */
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let i = 0; i < fullStack.length; i++){
  for (let j = 0; j < fullStack[i].length; j++){
    console.log(fullStack[i][j])
  }
}

