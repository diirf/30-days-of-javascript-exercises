/* 1. Usando console.log() imprima la siguiente declaración:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. */

let JonhHolmes = "The quote\
 'There is no exercise better for the heart\
 than reaching down and lifting people up.'\
 by John Holmes\
 teaches us to help one another."
console.log(JonhHolmes)

/* 2. Usando console.log() imprima la siguiente cita de la Madre Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." */

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// 3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual

let stringNumber = '10'
let number = parseInt(stringNumber)
typeof(number) === typeof(10)

// 4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10

let stringFloatNumber = '9.8'
let floatNumber = parseFloat(stringFloatNumber)
let roundFloatNumber = Math.round(floatNumber)
roundFloatNumber === 10

// 5. Verifique si 'on' se encuentra tanto en Python como en la jerga

let word = 'Python'
let word2 = 'jerga'
word.includes('on')
word2.includes('on')

// 6. Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración

let sentence = 'Espero que este curso no esté lleno de jerga'
sentence.includes('jargon')

// 7. Genere un número aleatorio entre 0 y 100 inclusive

let randomNumber = Math.random()
let randomNumberZeroOneHundred = randomNumber * 100
let randomNumberZeroOneHundredToCeil = Math.ceil(randomNumberZeroOneHundred)
console.log(randomNumberZeroOneHundredToCeil)

// 8. Genere un número aleatorio entre 50 y 100 inclusive

let randomNumber2 = Math.random()
let randomNumber2FiftyOneHundred = (randomNumber2 * 100) / 2
let randomNumber2FiftyOneHundredToCeil = 
Math.ceil(randomNumber2FiftyOneHundred) + 50
console.log(randomNumber2FiftyOneHundredToCeil)

// 9. Genere un número aleatorio entre 0 y 255 inclusive

let randomNumber3 = Math.random()
let randomNumber3ZeroTwoHundredFiftyFive = randomNumber3 * 255
let randomNumber3ZeroTwoHundredFiftyFiveToCeil = 
Math.ceil(randomNumber3ZeroTwoHundredFiftyFive)
console.log(randomNumber3ZeroTwoHundredFiftyFiveToCeil)

// 10. Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio

let numberOfCharacters = Math.random()
let maxNumberOfCharacters = numberOfCharacters * 9
let maxNumberOfCharactersToCeil = Math.ceil(maxNumberOfCharacters)
let wordd = 'JavaScript'
console.log(wordd[maxNumberOfCharactersToCeil])

/* 11. Use console.log() y caracteres de escape para imprimir el siguiente patrón:
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')

// 12. Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

let sentence2 = 'No puedes terminar una oración con porque porque porque es una conjunción'
sentence2.substr(35, 20)




