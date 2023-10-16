// 2. Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let cleanedText = text.replace(/[^\w\s]/gi, '');

const array = cleanedText.split(" ");

console.log(array);
console.log(array.length);

/* 3. En el siguiente carrito de compras agregue, elimine, edite artículos
    i. Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
    ii. Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
    iii. Elimine 'Honey' si es alérgico a la miel (honey)
    iv. Modificar Tea a 'Green Tea' */
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
const yes = 'yes';

if (!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}

if (shoppingCart.indexOf('Tea') !== -1){
    shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
}

const IsAlergic = prompt('Are you alergic to the honey?', 'Example: yes/no');

if (IsAlergic.toLowerCase() === yes){
    shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
}

console.log(`This is your shopping cart: ${shoppingCart}`);

/* 6. Concatene las siguientes dos variables y guardelas en una variable fullStack
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"]
console.log(fullStack); */
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

