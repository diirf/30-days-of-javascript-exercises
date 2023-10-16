// 2.1. Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js
import countries from './countries.js';
import webTechs from './web_techs.js';

// 2.4. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países
let nameOfCountry = prompt('Enter the country name','Example: Ethiopia').toLowerCase();

function wordCapitalLetter(text){
  let firstLetter = text.charAt(0);
  let restLetters = text.slice(1); 
  return firstLetter.toUpperCase() + restLetters.toLowerCase();
}

let countryCapitalized = wordCapitalLetter(nameOfCountry);

countries.includes(countryCapitalized)
? console.log(`You entered: ${countryCapitalized.toUpperCase()}`)
: (
  countries.push(countryCapitalized),
  console.log('The country that you entered is not in the list but now, will be:'),
  console.log(countries)
  );

// 2.5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array
let nameOfWebTech = prompt('Enter the web tech name', 'Example: Sass').toLocaleLowerCase();
let webTechCapitalized  = wordCapitalLetter(nameOfWebTech);

let webTechs2 = webTechs.map((element) => wordCapitalLetter(element));

if (webTechs2.includes(webTechCapitalized)){
  console.log(`${webTechCapitalized} is a CSS preprocessor`);
}
else{
  webTechs.push(webTechCapitalized);
  webTechs2.push(webTechCapitalized);
  console.log('The web tech that you entered is not in the list but now, will be:');
  console.log(webTechs2);
};

// 3.1. Cortar los diez primeros países de la array de países
console.log(`The ten first countries are: ${countries.slice(0,10).join(', ')}`);

// 3.2. Encuentre el país o países de en medio en el array de países
let middleIndex = Math.floor(countries.length/2);

if (countries.length % 2 === 0){
  const middleCountries = countries.slice(middleIndex - 1, middleIndex + 1);
  console.log(`The middle countries are: ${middleCountries}`);
}
else{
  console.log(`The middle country is: ${countries[middleIndex]}`);
}

// 3.3 Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.
const firstCountries = countries.slice(0,middleIndex);
const secondCountries = countries.slice(middleIndex);

if (countries.length % 2 !== 0){
  const newCountry = prompt('Enter a new country', 'Example: Venezuela');
  firstCountries.push(newCountry);
}

console.log(`The first countries are: ${firstCountries}`);
console.log(`The second countries are: ${secondCountries}`);
