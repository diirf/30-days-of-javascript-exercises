// 1. Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, humanBodyTemp, waterBoilingTemp
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// 2. Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
let [fin, est, sw, den, nor] = countries;

console.log(fin, est, sw, den, nor);

// 3.Desestructurar el objeto rectángulo por sus propiedades o keys
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
  };

let {width, height, area, perimeter} = rectangle;

console.log(width, height, area, perimeter);