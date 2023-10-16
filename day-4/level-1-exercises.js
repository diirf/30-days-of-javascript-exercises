// 1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
let age = parseInt(prompt('Enter your age', 'Example: 30'));
let legalAge = 18;
let differenceAge = legalAge - age;

if (age >= legalAge){
    console.log(`You have ${age} years, the enough age for drive`);
}
else {
    console.log(`You have ${age} years, you must to wait ${differenceAge} years for yours ${legalAge} and you'll can drive`);
}

// 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
let myAge = parseInt(prompt('What is my age?', 'Example: 25'));
let yourAge = parseInt(prompt('What is your age?', 'Example: 30'));
let differenceAges = yourAge - myAge;

if (differenceAges > 0){
    console.log(`You're ${differenceAges} years older than me`);
}
else if (differenceAges < 0){
    console.log(`I'm ${Math.abs(differenceAges)} years older than you`);
}
else{
    console.log(`You're the same age that me`);
}

/* 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
    i. Usando if else
    ii. Operador ternario */
let a = parseInt(prompt('Enter the a value', 'Example: 4'));
let b = parseInt(prompt('Enter the b value', 'Example: 3'));

//i.
if (a > b){
    console.log(`${a} is greater than ${b}`);
}
else if (a < b){
    console.log(`${a} is less than ${b}`);
}
else{
    console.log(`${a} is equal than ${b}`);
}

//ii.
a > b
? console.log(`${a} is greater than ${b}`)
: console.log(`${a} is less than ${b}`);

// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?
let num = parseInt(prompt(
    'Enter a number for check if is odd', 'Example: 2'));

if (num%2===0){
    console.log(`${num} is even`);
}
else {
    console.log(`${num} is odd`);
}


