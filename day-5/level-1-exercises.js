/* const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"]; */

// 1. Declara un array vacío
const array = [];

// 2. Declara un array com mas de 5 elementos
const elements = Array(6).fill('home');

// 3. Encuentra la longitud de tu array
elementsLength = elements.length;

// 4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array
const otherArray = [1, 2, 3, 4, 5];

firstElement = otherArray[0];
middleElement = otherArray[2];
lastElement = otherArray[otherArray.length -1];

// 5. Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5
const mixedDataTypes = ['tekila', null, ['one', 'two'], 1500, true, 'poodle', -5];

mixedDataTypesLength = mixedDataTypes.length;

// 6. Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Imprima el array usando console.log()
console.log('Companies:', itCompanies);

// 8. Imprima el número de empresas en el array
console.log('Companies length:', itCompanies.length);

// 9. Imprime la primer empresa , la intermedia y la última empresa
const copyOfItCompanies = itCompanies

middleCompany = copyOfItCompanies.slice((copyOfItCompanies.length - 1)/2,4);
firstCompany = copyOfItCompanies.shift();
lastCompany = copyOfItCompanies.pop();

// 10. Imprime cada empresa
for (let i=0; i<= itCompanies.length - 1; i++){
    console.log('Company:', itCompanies[i]);
}

// 11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos
const copyOfCompanies = [];

copyOfCompanies[0] = itCompanies[0].toUpperCase();
copyOfCompanies[1] = itCompanies[1].toUpperCase();
copyOfCompanies[2] = itCompanies[2].toUpperCase();
copyOfCompanies[3] = itCompanies[3].toUpperCase();
copyOfCompanies[4] = itCompanies[4].toUpperCase();
copyOfCompanies[5] = itCompanies[5].toUpperCase();
copyOfCompanies[6] = itCompanies[6].toUpperCase();

console.log(copyOfCompanies);

// 12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI
const orationCompany = ['son grandes empresas de TI']

const finalArray = itCompanies.concat(orationCompany);
finalArray.toString();

// 13. Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let searchCompanyName = prompt('Enter the company name', 'Example: Oracle')

itCompanies.includes(searchCompanyName)
? console.log(`The company ${searchCompanyName} is in the array`)
: console.log(`The company ${searchCompanyName} isn't in the array`);

// 14. Filtre las empresas que tienen más de una 'o' sin el método filter()
const filterItsCompanies = []
for (let i=0; i <= itCompanies.length - 1; i++){
    itCompanies[i].search(/\b\w*o\w*o\w*\b/) !== -1
    ? filterItsCompanies[i] = itCompanies[i] 
    : filterItsCompanies.splice();
}

console.log(filterItsCompanies);

// 15. Ordene el array usando el método sort()
itCompanies.sort();

// 16. Invierte la array usando el método reverse()
itCompanies.reverse();

// 17. Cortar las primeras 3 empresas del array
itCompanies.slice(0,3);

// 18. Cortar las últimas 3 empresas del array
itCompanies.slice(4,7);

// 19. Cortar la empresa o empresas intermedias de TI del array

// 20. Eliminar la primera empresa de TI del array
itCompanies.shift();

// 21. Eliminar la empresa o empresas intermedias de TI del array

// 22. Elimine la última empresa de TI del array
itCompanies.pop();

// 23. Eliminar todas las empresas de TI
itCompanies.splice();