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

// 2. Defina una función callback antes de utilizarla en forEach, map, filter o reduce

// 3. Utiliza forEach para mostrar con console.log cada país del array de países
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

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
const numbersUpperCase = numbers.map

// 10. Utilice map para asignar el array de productos a sus correspondientes precios

// 11. Utilice filter para filtrar los países que contienen land

// 12. Utilice filter para filtrar los países que tienen seis caracteres

// 13. Utilice filter para filtrar los países que contengan seis letras o más en el array de países

// 14. Utilice filter para filtrar los países que empiezan por "E"

// 15. Utilice filter para filtrar sólo los precios con valores

// 16. Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string

// 17. Usa reduce para sumar todos los números del array de números

// 18. Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa

// 19. Explique la diferencia entre some y every

// 20. Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres

// 21. Utilice every para comprobar si todos los países contienen la palabra land

// 22. Explique la diferencia entre find y findIndex

// 23. Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países

// 24. Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países

// 25. Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1

// 26. Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1