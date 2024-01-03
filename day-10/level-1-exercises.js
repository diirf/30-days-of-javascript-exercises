// 1. Crear un set vacío
const emptySet = new Set();

emptySet;

// 2. Crear un set que contenga de 0 a 10 utilizando el bucle
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const setNumbers = new Set();

for (const number of numbers){
    setNumbers.add(number);
}

setNumbers;

// 3. Eliminar un elemento de set
setNumbers.delete(0);

setNumbers;

// 4. Limpia set
const copySetNumbers = setNumbers;
copySetNumbers.clear();

copySetNumbers;

// 5. Crear un set de 5 elementos string a partir de un array
const stringArray = ['home', 'tekila', 'venezuela', 'tree', 'happy'];
const stringSet = new Set(stringArray);

stringSet;

// 6. Crear un map de países y el número de caracteres de un país
const countries = ["Finland", "Sweden", "Norway"];
const setCountries = new Map();

for (const country of countries){
    setCountries.set(country, country.length);
}

setCountries;