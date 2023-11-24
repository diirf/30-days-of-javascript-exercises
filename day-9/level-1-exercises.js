/* const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
]; */

// 1. Explique la diferencia entre forEach, map, filter, and reduce
/* 'forEach' is used to iterate the elements of an array without changing them, 'map' iterates the elements of an array and modifies them by returning an array of them, 'filter' is used to return elements in an array that meet a condition (true /false), 'reduce' is used to return a value after an operation to accumulate the elements of an array */

// 2. Defina una función callback antes de utilizarla en forEach, map, filter o reduce

// 3. Utiliza forEach para mostrar con console.log cada país del array de países
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand", "Ecuador"];

countries.forEach(country => {
  console.log(country);
});

// 4. Utiliza forEach para mostrar con console.log cada nombre del array de nombres
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

names.forEach(name => console.log(name));

// 5. Utiliza forEach para mostrar con console.log cada número del array de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(number => console.log(number));

// 6. Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países
const countriesUpperCase = countries.map((country) =>{
  return country.toUpperCase();
})

console.log(countriesUpperCase);

// 7. Utilice map para crear un array de longitudes de países a partir del array de países
const countriesLength = countries.map((country) => country.length);

console.log(countriesLength);

// 8. Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números
const squareNumbers = numbers.map((number) => number ** 2);

console.log(squareNumbers);

// 9. Utilice map para cambiar cada nombre a mayúsculas en el array de nombres
const namesUpperCase = names.map((name) => name.toUpperCase());

console.log(namesUpperCase);
 
// 10. Utilice map para asignar el array de productos a sus correspondientes precios
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const priceByProduct = products.map((product) => {
  product.price = product.price.toString().trim() === "" ? 0 : product.price;
  return `${product.product} = ${product.price}`
});

console.log(priceByProduct);

// 11. Utilice filter para filtrar los países que contienen land
const filterCountry = countries.filter((country) => country.toLowerCase().includes('land'));

console.log(filterCountry);

// 12. Utilice filter para filtrar los países que tienen seis caracteres
const filterSixCharactersCountry = countries.filter((country) => country.length === 6);

console.log(filterSixCharactersCountry);

// 13. Utilice filter para filtrar los países que contengan seis letras o más en el array de países
const filterSixMoreCharactersCountry = countries.filter((country) => country.length >= 6);

console.log(filterSixMoreCharactersCountry);

// 14. Utilice filter para filtrar los países que empiezan por "E"
const countriesWithE = ["Finland", "Sweden", "Denmark", "Norway", "IceLand", "Ecuador"]
const filterLetterE = countriesWithE.filter((country) => country.toLowerCase().startsWith('e'));

console.log(filterLetterE);

// 15. Utilice filter para filtrar sólo los precios con valores
const priceProduts = products.filter((element) => element.price > 0);

console.log(priceProduts);

// 16. Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string
function getStringList(array) {
  return array.filter((element) => typeof element === 'string');
}

const result = getStringList(['hello', 555, 'home', 100]);
console.log(result);

// 17. Usa reduce para sumar todos los números del array de números
const addNumbers = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(addNumbers);

// 18. Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
const addCountries = countries.reduce(function(acc, curr, index){
  if (index === countries.length - 1){
    return acc + 'and ' + curr; 
  }
  else{
    return acc + curr + ', ';
  }
}, '');

console.log(`${addCountries} are northern European countries`);

// 19. Explique la diferencia entre some y every
/* 'some' checks if some elements are similar to some given condition, 'each' checks if all elements are similar to some given condition */

// 20. Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres
const lengthNames = names.some((name) => name.length >= 7);

console.log(lengthNames);

// 21. Utilice every para comprobar si todos los países contienen la palabra land
const landCountries = countries.every((country) => country.includes('land'));

console.log(landCountries);

// 22. Explique la diferencia entre find y findIndex
/* 'find' returns the first element that meets a given condition, 'findIndex' returns the position of the first element that meets a given condition */

// 23. Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países
const firstSixLettersCountry = countries.find((country) => country.length === 6);

console.log(firstSixLettersCountry);

// 24. Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países
const positionFirstSixLettersCountry = countries.findIndex((country) => country.length === 6);

console.log(positionFirstSixLettersCountry);

// 25. Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1
const countryPosition = countries.findIndex((country) => country === 'Norway');

console.log(countryPosition);

// 26. Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1
const countryPositionRus = countries.findIndex((country) => country === 'Russia');

console.log(countryPosition);
