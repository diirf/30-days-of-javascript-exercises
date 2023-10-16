// 1. Declara un array vacío
const array = [];

// 2. Declara un array com mas de 5 elementos
const elements = Array(6).fill('home');

// 3. Encuentra la longitud de tu array
elementsLength = elements.length;

// 4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array
const otherArray = [1, 2, 3, 4, 5];

firstElement = otherArray[0];
middleElement = otherArray[Math.floor(otherArray.length / 2)];
lastElement = otherArray[otherArray.length - 1];

// 5. Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5
const mixedDataTypes = ['tekila', null, ['one', 'two'], 1500, true, 'poodle', -5];

let mixedDataTypesLength = mixedDataTypes.length;

// 6. Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Imprima el array usando console.log()
console.log('Companies:', itCompanies);

// 8. Imprima el número de empresas en el array
console.log('Companies length:', itCompanies.length);

// 9. Imprime la primer empresa , la intermedia y la última empresa
const copyOfItCompanies = itCompanies.slice();

// Middle company
const middleCompany = copyOfItCompanies[Math.floor(copyOfItCompanies.length / 2)];

// First company
const firstCompany = copyOfItCompanies.shift();

// Last company
const lastCompany = copyOfItCompanies.pop();

// 10. Imprime cada empresa
// Option 1
for (let i=0; i < itCompanies.length; i++){
    console.log('Company:', itCompanies[i]);
};
// Option 2
itCompanies.forEach(element => console.log('Company:', element));

// 11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos
const copyOfCompanies = [];

itCompanies.forEach(element => copyOfCompanies.push(element.toLocaleUpperCase()));
console.log(copyOfCompanies);

// 12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI
const orationCompany = ['son grandes empresas de TI'];
const finalArray = itCompanies.concat(orationCompany);
finalArray.toString();

// 13. Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let searchCompanyName = prompt('Enter the company name', 'Example: Oracle');

// Option 1
itCompanies.includes(searchCompanyName)
? console.log(`The company ${searchCompanyName} is in the array`)
: console.log(`The company ${searchCompanyName} isn't in the array`);
// Option 2
const isInside = itCompanies.includes(searchCompanyName) ? "is" : "isn't";
console.log(`The company ${searchCompanyName} ${isInside} in the array`);

// 14. Filtre las empresas que tienen más de una 'o' sin el método filter()
const filterItsCompanies = [];

for (let i=0; i < itCompanies.length; i++){
    if (itCompanies[i].search(/\b\w*o\w*o\w*\b/) !== -1){
        filterItsCompanies.push(itCompanies[i]);
    }
}

console.log(filterItsCompanies);

// 15. Ordene el array usando el método sort()
itCompanies.sort();

// 16. Invierte la array usando el método reverse()
itCompanies.reverse();

// 17. Cortar las primeras 3 empresas del array
itCompanies.slice(0,3);

// 18. Cortar las últimas 3 empresas del array
itCompanies.slice(itCompanies.length - 3, itCompanies.length);

// 19. Cortar la empresa o empresas intermedias de TI del array
itCompanies.slice(Math.floor((itCompanies.length)/2),Math.floor((itCompanies.length)/2)+1);

// 20. Eliminar la primera empresa de TI del array
itCompanies.shift();

// 21. Eliminar la empresa o empresas intermedias de TI del array
itCompanies.splice(Math.floor((itCompanies.length)/2),1);

// 22. Elimine la última empresa de TI del array
itCompanies.pop();

// 23. Eliminar todas las empresas de TI
itCompanies.splice();