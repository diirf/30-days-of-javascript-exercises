// 1. Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
// for loop
for (let i = 0; i < 11; i++){
  console.log(i);
}

// while loop
let j = 0;

while (j < 11){
  console.log(j);
  j++;
}

// do while loop
let k = 0;

do{
  console.log(k);
  k++;
}
while (k < 11);

// 2. Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
// for loop
for (let l = 10; l >= 0; l--){
  console.log(l);
}

// while loop
let m = 10;

while (m >= 0){
  console.log(m);
  m--;
}

// do while loop
let n = 10;

do{
  console.log(n);
  n--;
}
while (n >= 0);

// 3. Itera de 0 a n usando el bucle for
let num = parseInt(prompt('Enter the number to where you want to iterate', 'Example: 5'));

for (let i = 0; i <= num; i++){
  console.log(i);
}

/*
for (let i = 0; i <= (Math.ceil(Math.random() * i)); i++){
  console.log(i);
} */

/* 4. Escribe un bucle que haga el siguiente patrón usando console.log():
#
##
###
####
#####
######
####### */
let f = 0;

do {
  console.log('#\n##\n###\n####\n#####\n######\n#######');
  f++;
}
while (f === 0);

/* 5. Usa un bucle para imprimir el siguiente patrón:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */
let a = 0;

while (a <= 10){
  console.log(`${a} x ${a} = ${a*a}`);
  a++;
}

/* 6. Usando un bucle imprime el siguiente patrón:
i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */
 let b = 0;

 while (b <= 10){
   console.log(`${b}\t${b**2}\t${b**3}`);
   b++;
 }

 // 7. Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
 for (let i = 0; i <= 100; i++){
  if (i % 2 === 0){
    console.log(i);
  }
 }

// 8. Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for (let i = 0; i <= 100; i++){
  if (i % 2 === 0){
    continue;
  }
  else{
    console.log(i);
  }
 }
 
// 9. Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
for (let i = 0; i <= 100; i++){
  if (i <= 1){
    continue;
  }
  else if (i % 2 === 0){
    continue;
  }
  else{
    console.log(i);
  }
 }
 
// 10. Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números (La suma de todos los números de 0 a 100 es 5050)
let add = 0;

for (let i = 0; i <= 100; i++){
  add += i;
}

// 11. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares (La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500)
let addEven = 0;
let addOdd = 0;
let i = 0;

while (i <= 100){
  if (i % 2 === 0){
    addEven += i;
  }
  else{
    addOdd += i; 
  }
i++
}

console.log(`The sum of all pairs is: ${addEven}`);
console.log(`The sum of all the odd ones is: ${addOdd}`);

// 12. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array ([2550, 2500])
let addEven2 = 0;
let addOdd2 = 0;
let p = 0;
let addsArray = [];

while (p <= 100){
  if (p % 2 === 0){
    addEven2 += p;
  }
  else{
    addOdd2 += p; 
  }
p++
}

addsArray.push(addEven2);
addsArray.push(addOdd2);
console.log(addsArray);

// 13. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
let randomArray = [];

for (let i = 0; i < 5; i++){
  randomArray.push(Math.floor(Math.random() * i * 10));
}

console.log(randomArray);

// 14. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
let randomArray2 = [];

for (let i = 0; i < 5; i++){
  randomArray2.push(Math.floor(Math.random() * i * 10));

  if (randomArray2[i] === randomArray2[i+1]){
    randomArray2.push(Math.floor(Math.random() * i * 10));
  }
}

console.log(randomArray2);

// 15. Desarrolla un pequeño script que genera un id aleatorio de seis caracteres: (5j2khz)
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length; 
let id = "";

for (i = 0; i < 6; i++){
  id += characters[Math.floor(Math.random() * charactersLength)];
}

console.log(id);