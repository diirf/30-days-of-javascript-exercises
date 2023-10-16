// 1. Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];

  export default countries;

// 4. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países
let nameOfCountry = prompt('Enter the country name','Example: Ethiopia');
let newCountry;

countries.includes(nameOfCountry)
? console.log(`You entered: ${nameOfCountry.toUpperCase()}`)
: (
  countries.push(nameOfCountry),
  newCountry = countries[countries.length - 1].charAt(0).toUpperCase() + countries[countries.length - 1].slice(1),
  console.log('The country that you entered is not in the list but now, will be:'),
  console.log(countries)
  );



    