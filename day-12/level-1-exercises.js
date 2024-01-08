// 1. Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'
const text = 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'
const regexp = /\d+/g;

const arrayIncomes = text.match(regexp);
let totalIncomes = 0;

for (const income of arrayIncomes){
    totalIncomes += +income; 
}

console.log(`Earn ${totalIncomes} euros per month`);

// 2. La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos números y encuentra la distancia entre las dos partes más lejanas.
points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];

function distance(array){
    const newArray = [...array];
    const sortedArray = newArray.sort((a,b) => a - b).map((element) => parseInt(element));

    const distanceValue = sortedArray[sortedArray.length - 1] - sortedArray[0];
    return distanceValue;
}

distance(points);

// 3. Escribir un patrón que identifique si una cadena es una variable JavaScript válida
const regexpJS = /^[a-zA-Z_][\w]*$/g;

function validJSname(name){
    const trueJSVariable = regexpJS.test(name);

    if (trueJSVariable){
        return `The name '${name}' is a valid name`;
    }
    
    return `The name '${name}' is not a valid name`;
}

validJSname('firstname');
validJSname('1first_name');
validJSname('first_name');
validJSname('first-name');
validJSname('-first');
validJSname('first2');
validJSname('firts_');
validJSname('a.');
