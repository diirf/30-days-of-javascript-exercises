// 16. Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
let challenge = '30 días de JavaScript';
challenge.lastIndexOf('a');

// 17. Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
whySentence = 'No puedes terminar una oración con porque porque porque es una conjunción';
whySentence.indexOf('porque');

// 18. Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
whySentence.lastIndexOf('porque');

// 19. Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
whySentence.search('porque');

// 20. Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
otherChallenge = ' 30 días de Python ';
otherChallenge.trim(' ');

// 21. Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
challenge.startsWith('30 días');

// 22. Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
challenge.endsWith('pt');

// 23. Usa el método match() para encontrar todos los a en 30 días de JavaScript
let pattern = /a/gi;
challenge.match(pattern);

// 24. Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let daysOfChallenge = '30 días de';
daysOfChallenge.concat(' JavaScript');

// 25. Use el método repeat() para imprimir 30 días de JavaScript 2 veces
challenge.repeat(2);