// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h)
let base;
let height;
const FACTOR_TRIANGLE = 0.5;

base = prompt('Enter the triangle base', 'Example: 10');
height = prompt('Enter the triangle height', 'Example: 20');

let area = FACTOR_TRIANGLE * parseInt(base) * parseInt(height);

console.log(`The area of the triangle is: ${area}`);

// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
let sideA;
let sideB;
let sideC;

sideA = prompt('Enter side A of the triangle', 'Example: 5');
sideB = prompt('Enter side B of the triangle', 'Example: 4');
sideC = prompt('Enter side C of the triangle', 'Example: 3');

let perimeterTriangle = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);

console.log(`The perimeter of the triangle is: ${perimeter}`);

// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho) y el perímetro del rectángulo (perímetro = 2 x (largo + ancho)
let length;
let width;
const FACTOR_RECTANGLE = 2;

length = prompt('Enter the rectangle length', 'Example: 10');
width = prompt('Enter the rectangle width', 'Example: 8');

let areaRectangle = parseInt(length) * parseInt(width);
let perimeterRectangle = 
FACTOR_RECTANGLE * (parseInt(length) + parseInt(width));

console.log(`The rectangle area is: ${areaRectangle} and the rectangle perimeter is: ${perimeterRectangle}`);

// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
const FACTOR_CIRCLE = 2;
const PI = 3.14;
let radius;

radius = prompt('Enter the circle radius', 'Example: 5');

let areaCircle = PI * parseInt(radius)**2;
let circumference = FACTOR_CIRCLE * PI * parseInt(radius);

console.log(`The circle area is: ${areaCircle} and the circle circumference is: ${circumference}`);

/* 5. Calcule la pendiente, la intersección X y la intersección Y de
y = 2x -2 */
let intersectionX = 0 + 2/2;
let intersectionY = 2 * 0 - 2;
const SLOPE = 2;

// 6. La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
let pointX1;
let pointX2;
let pointY1;
let pointY2;

pointX1 = prompt('Enter the point X1', 'Example: 2');
pointY1 = prompt('Enter the point Y1', 'Example: 2');
pointX2 = prompt('Enter the point X2', 'Example: 6');
pointY2 = prompt('Enter the point Y2','Example: 10');

let slope = (parseInt(pointY2) - parseInt(pointY1))
/ (parseInt(pointX2) - parseInt(pointX1));

console.log(`The pending is: ${slope}`);

// 7. Compare la pendiente de las dos preguntas anteriores
slope === SLOPE;

// 8. Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0
let x;
let y;

x = parseInt(prompt('Enter the value of x', 'Example: 5'));

y = x**2 + 6 * x + 9;

let y_a = (-6 + Math.sqrt(6**2 -4*1*9))/(2*1);
let y_b = (-6 - Math.sqrt(6**2 -4*1*9))/(2*1);

console.log(`The value of y is: ${y}`);
console.log(`The values of x for y = 0 are: ${y_a} and ${y_b}`);

// 9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
let workHours;
let hourlyFee;
let salary;

workHours = prompt('Enter your semanal working hours', 'Example: 40');
hourlyFee = prompt('Enter your hourly fee', 'Example: 28');

salary = parseInt(workHours) * parseInt(hourlyFee);

console.log(`Your semanal salary is: ${salary}`);

// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto
let name;

name = prompt('Introduce your name', 'Example: Alexander');

name.length > 7
? console.log(`Your name is long`)
: console.log(`Your name is short`);

/* 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado: 
    Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.. */
let nameCompared;
let lastNameCompared;

nameCompared = prompt('Introduce your name', 'Example: Asabeneh');
lastNameCompared = prompt('Introduce your last name', 'Example: Yetayeh');

nameCompared.length > lastNameCompared.length
? console.log(`Your name, ${nameCompared}, is longer than your last name, ${lastNameCompared}`)
: console.log(`Your last name, ${lastNameCompared}, is longer than your name, ${nameCompared}`);

// 12. Declare dos variables myAge y yourAge y asignarles los valores iniciales y diga cuántos años hay de diferencia y quién es mayor.
let myAge;
let yourAge;

yourAge = prompt('Enter your age:', 'Example: 25');
myAge = prompt('Enter my age:', 'Example: 250');

let ageDifference = yourAge - myAge;

ageDifference > 0
? console.log(`You're ${ageDifference} years greather than me`)
: console.log(`I'm ${Math.abs(ageDifference)} years greather than you`);

// 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
let yearOfBirth;
const LEGAL_AGE = 18;

let currentYear = new Date().getFullYear();

yearOfBirth = prompt('What is your year of birth?', 'Example: 1995');

let age = currentYear - parseInt(yearOfBirth);
let yearsForDrive = LEGAL_AGE - age;

age > LEGAL_AGE
? console.log(`You have ${age} years. You can drive.`)
: console.log(`Your have ${age} years, You can drive in ${yearsForDrive} years`);

// 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
let years = parseInt(prompt('Enter the life number years', 'Example: 100'));
yearsToDays = years * 365;
daysToMinutes = yearsToDays * 1440;
minutesToSeconds = daysToMinutes * 60;

console.log(`You have live ${minutesToSeconds} seconds`);

/* 15. Cree un formato de hora legible por humanos usando el objeto Date
    i. YYYY-MM-DD HH:mm
    ii. DD-MM-YYYY HH:mm
    iii. DD/MM/YYYY HH:mm */
let current_date = new Date();
let year = current_date.getFullYear();
let month = current_date.getMonth()+1;
let day = current_date.getDate();
let hours = current_date.getHours();
let minutes = current_date.getMinutes();

console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
console.log(`${day}-${month}-${year} ${hours}:${minutes}`);
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);