/* 1. El siguiente es un array de 10 edades de estudiantes:
```js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
```
    i. Ordene el array y encuentre la edad mínima y máxima
    ii. Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
    iii. Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
    iv. Encuentre el rango de las edades (max menos min)
    v. Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_ */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Ordered array
let orderedAges = ages.sort((a, b) => a - b);
console.log(orderedAges);

//Min value
let minAge = orderedAges[0];

for (let i = 1 ;i < orderedAges.length; i++){
    if (orderedAges[i] < minAge){
        minAge = orderedAges[i];
    } 
}

console.log(`Min value: ${minAge}`);

//Max value
let maxAge = orderedAges[0];

for (let i = 1 ;i < orderedAges.length; i++){
    if (orderedAges[i] > maxAge){
        maxAge = orderedAges[i];
    } 
}

console.log(`Max value: ${maxAge}`);

//Median age
let medianAge;
let medianIndex = Math.floor(ages.length / 2);

if (ages.length % 2 === 0){
    const middle = ages.slice(medianIndex - 1, medianIndex + 1);
    medianAge = (middle[0] + middle[1]) / 2;
}
else{
    medianAge = ages[medianIndex];
}

console.log(`Median value: ${medianAge}`);

//Average age
let acumAges = 0;

ages.forEach(element => {
    acumAges = acumAges+= element;
});

let averageAge = acumAges / ages.length;

console.log(`Average value: ${averageAge}`);

//Range age
let rangeAge = maxAge - minAge;

console.log(`Range value: ${rangeAge}`);

//Abs method
const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);

console.log(`The difference between the minimum and average is: ${minDifference}`);
console.log(`The difference between the maximum and average is: ${maxDifference}`);