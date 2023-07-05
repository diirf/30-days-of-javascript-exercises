// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.

let firstName = 'Indira', lastName = 'Franchi', country = 'Venezuela',
city = 'Valencia', isMarried = true, year = 1992
typeof(isMarried)
typeof(firstName)
typeof(year)

// 2. Verifique si typeof '10' es igual a 10

typeof('10') === 10

// 3. Verifique si parseInt('9.8') es igual a 10

parseInt('9.8') === 10

/* 4. Verifique cualquier valor booleano true o false:
    i. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero
    ii. Escriba tres declaraciones de JavaScript que proporcionen un valor falso */

5+3 > 2+1
12/3 === 2+2 && 5*5 > 5*2
true === true

undefined === null
5**5 > 20**50
false === true

/* 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log():
    i. 4 > 3
    ii. 4 >= 3
    iii. 4 < 3
    iv. 4 <= 3
    v. 4 == 4
    vi. 4 === 4
    vii. 4 != 4
    viii. 4 !== 4
    ix. 4 != '4'
    x. 4 == '4'
    xi. 4 === '4'
    xii. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa */

//true
console.log(4>3)

//true
console.log(4>=3)

//false
console.log(4<3)

//false
console.log(4<=3)

//true
console.log(4==4)

//true
console.log(4===4)

//false
console.log(4!=4)

//false
console.log(4!==4)

//false
console.log(4!='4')

//true
console.log(4=='4')

//false
console.log(4==='4')

let word1 = 'Python'
let word2 = 'jargon'
let lengthWords = word1.length < word2.length
console.log(lengthWords)

/* 6. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log():
    i. 4 > 3 && 10 < 12
    ii. 4 > 3 && 10 > 12
    iii. 4 > 3 || 10 < 12
    iv. 4 > 3 || 10 > 12
    v. !(4 > 3)
    vi. !(4 < 3)
    vii. !(false)
    viii. !(4 > 3 && 10 < 12)
    ix. !(4 > 3 && 10 > 12)
    x. !(4 === '4')
    xi. No hay 'on' tanto en dragon como en python */

//true
console.log(4 > 3 && 10 < 12)

//false
console.log(4 > 3 && 10 > 12)

//true
console.log(4 > 3 || 10 < 12)

//true
console.log(4 > 3 || 10 > 12)

//false
console.log(!(4 > 3))

//true
console.log(!(4 < 3))

//true
console.log(!(false))

//false
console.log(!(4 > 3 && 10 < 12))

//true
console.log(!(4 > 3 && 10 > 12))

//true
console.log(!(4 === '4'))

//No hay 'on' tanto en dragon como en python
//false
!('dragon'.includes('on') && 'python'.includes('on'))