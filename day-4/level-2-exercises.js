/* 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
    i. 80-100, A
    ii. 70-79, B
    iii. 60-69, C
    iv. 50-59, D
    v. 0-49, F */
let score = parseInt(prompt('Enter your score', 'Example: 80'));

switch (true){
    case score>=80:
        console.log(`You have an A`);
    break;

    case score>=70:
        console.log(`You have a B`);
    break;

    case score>=60:
        console.log(`You have a C`);
    break;   

    case score>=50:
        console.log(`You have a D`);
    break;

    case score>=0:
        console.log(`You have a F`);
    break;
}

/* 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es:
    i. Septiembre, Octubre o Noviembre, la temporada es Otoño.
    ii. Diciembre, Enero o Febrero, la temporada es Invierno.
    iii. Marzo, Abril o Mayo, la temporada es Primavera
    iv. Junio, Julio o Agosto, la temporada es Verano */
let month = prompt('Enter a month', 'Example: september').toLowerCase();
let october = 'october';
let september = 'september';
let november = 'november';
let december = 'december';
let january = 'january';
let february = 'february';
let march = 'march';
let april = 'april';
let may = 'may';
let june = 'june';
let july = 'july';
let august = 'august';

switch (true){
    case month===october || month===september || month===november:
        console.log(`The season is Autumn`);
    break;
    
    case month===december || month===january || month===february:
        console.log(`The season is Winter`);
    break;
    
    case month===march || month===april || month===may:
        console.log(`The season is Spring`);
    break;   
    
    case month===june || month===july || month===august:
        console.log(`The season is summer`);
    break;
}

// 3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada
let day = prompt('What day is today?', 'Example: monday').toLowerCase();
let monday = 'monday';
let tuesday = 'tuesday';
let wednesday = 'wednesday';
let thursday = 'thursday';
let friday = 'friday';
let saturday = 'saturday';
let sunday = 'sunday';

if (day===monday || day===tuesday || day===wednesday || day===thursday || day===friday){
    console.log(`The ${day} is a working day`);
}
else{
    console.log(`The ${day} is a weekend`);
}

