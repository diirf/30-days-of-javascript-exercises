/* 1. Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán
userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
' */
function userIdGeneratorByUser(){
    let charactersNumbers = parseInt(prompt('Enter the number of characters to generate', 'Example: 5'));
    let idNumbers = parseInt(prompt('Enter the id number to generate', 'Example: 2'));
    const randomNumbersAscii = () => Math.round((Math.random() * 9) + 48); //0-9
    const randomCapitalLettersAscii = () => Math.round((Math.random() * 25) + 65); //A-Z
    const randomLettersAscii = () => Math.round((Math.random() * 25) + 97); //a-z
  
    const asciiCode = () =>{
      const choice = Math.round((Math.random() * 2));

      switch (choice){
        case 0:
          return randomNumbersAscii();
        case 1:
          return randomCapitalLettersAscii();
        case 2:
          return randomLettersAscii();
      } 
    }

    while (idNumbers){
      let id = '';
      for (let i = 0; i < charactersNumbers; i++) {
        id += String.fromCharCode(asciiCode())   
      }
      console.log(id);
      idNumbers--;
    }
}
  
userIdGeneratorByUser();

/* 2. Escriba una función llamada rgbColorGenerator que genera colores rgb
rgbColorGenerator()
rgb(125,244,255) */
function rgbColorGenerator(){
  const randomNumbers = () => Math.round(Math.random() * 255);
  let rgb = `rgb(${randomNumbers()},${randomNumbers()},${randomNumbers()})`;
  return rgb;
}

// 3. Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array
function arrayOfHexaColors(){
  let colorsNumbers = parseInt(prompt('Enter the number of hexadecimal colors to generate', 'Example: 3'));
  const randomNumbersAscii = () => Math.round((Math.random() * 9)+ 48);
  const randomCapitalLettersAscii = () => Math.round((Math.random() * 5)+ 65);

  const asciiCode = () =>{
    const choice = Math.round((Math.random() * 1)) 
    return choice === 0 ? randomNumbersAscii() : randomCapitalLettersAscii();
  }
    let arrayColors = [];

    while(colorsNumbers){
      let hexColor = '';
      for (i = 0; i < 6; i++){
        hexColor += String.fromCharCode(asciiCode());  
      }
      arrayColors.push(hexColor);
      colorsNumbers--
    }
    return arrayColors;
}

// 4. Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array
function arrayOfRgbColors(){
  let colorsRgbNumbers = parseInt(prompt('Enter the number of rgb colors to generate', 'Example: 2'));
  const randomNumbers = () => Math.round(Math.random() * 255);

  let arrayColors = [];

  while(colorsRgbNumbers){
    let rgb = `rgb(${randomNumbers()},${randomNumbers()},${randomNumbers()})`;
    arrayColors.push(rgb);
    colorsRgbNumbers--
  }
  return arrayColors;
}

arrayOfRgbColors();

// 5. Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb
function convertHexaToRgb(hexColor){
  const lettersHexToNumbers = (hexCharacter) =>{
    switch (hexCharacter){
      case 'A':
        return 10;
      case 'B':
        return 11;
      case 'C':
        return 12;
      case 'D':
        return 13;
      case 'E':
        return 14;
      case 'F':
        return 15;
      default:
        return parseInt(hexCharacter);
    }
  }
  // const lettersHexToNumbers = (hexCharacter) =>{
  //   return parseInt(hexCharacter,16);
  // }

  let R, G, B;
  for (i = 1; i < hexColor.length; i+=2){
    switch (i){
      case 1:
        R = (lettersHexToNumbers(hexColor[i]) * 16) + lettersHexToNumbers(hexColor[i+1]);
        break;
      case 3:
        G = (lettersHexToNumbers(hexColor[i]) * 16) + lettersHexToNumbers(hexColor[i+1]);
        break;
      case 5:
        B = (lettersHexToNumbers(hexColor[i]) * 16) + lettersHexToNumbers(hexColor[i+1]);
    }
  }
  return `rgb(${R},${G},${B})`;
}

convertHexaToRgb('#12AB5F');

// 6. Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa
function convertRgbToHexa(a,b,c){
  
}


/* 7. Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)' */

// 8. Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada

// 9. Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número

// 10. Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no

// 11. Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma

// 12. Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable

// 13. Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada

/* 14. Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found' */

// 15. Escribe una función llamada isPrime, que verifica si un número es un número primo

// 16. Escriba una función que verifique si todos los elementos son únicos en un array

// 17. Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos

// 18. El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida

/* 19. Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos
sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)] */

// 20. Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido