// 1. Comprueba la diferencia de velocidad entre los siguientes bucles: while, for, for of, forEach
const numbers = [1, 2, 3, 4, 5, 6];
let j = 1;
let whileFactor = 0;
let forFactor = 0;
let forOfFactor = 0;
let forEachFactor = 0;
let whiledoubleNumbers = [];
let fordoubleNumbers = [];
let forOfdoubleNumbers = [];
let fourEachdoubleNumbers = [];

console.time('While loop')
while (j <= numbers.length){
    whileFactor = j * 2;
    whiledoubleNumbers.push(whileFactor);
    j++;
}
console.log(whiledoubleNumbers);
console.timeEnd('While loop');

console.time('For loop')
for(let i = 1; i <= numbers.length; i++){
    forFactor = i * 2;
    fordoubleNumbers.push(forFactor);
}
console.log(fordoubleNumbers);
console.timeEnd('For loop');

// For of
console.time('For of loop')
for (let element of numbers){
    forOfFactor = element * 2;
    forOfdoubleNumbers.push(forOfFactor);
}
console.log(forOfdoubleNumbers);
console.timeEnd('For of loop');

// forEach loop
console.time('forEach loop')
numbers.forEach(element => {
    forEachFactor = element * 2;
    fourEachdoubleNumbers.push(forEachFactor);
});
console.log(fourEachdoubleNumbers);
console.timeEnd('forEach loop');