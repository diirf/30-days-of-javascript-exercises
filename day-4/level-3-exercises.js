// 1. Escribe un programa que diga el número de días en un mes
let month = prompt('Enter a month', 'Example: september').toLowerCase();
let october = 'october';
let september = 'september';
let november = 'november';
let december = 'december';
let january = 'january';
let february = 'february';
let march = 'march';
let aprile = 'april';
let may = 'may';
let june = 'june';
let july = 'july';
let august = 'august';
let days;

if (month===january || month===march || month===may || month===july || month===august || month===october || month===december){
    days = 31;
    console.log(`${month} has ${days} days`);
}
else if (month===february){
    days = 28;
    console.log(`${month} has ${days} days`);
}
else{
    days = 30;
    console.log(`${month} has ${days} days`);
}

// 2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto
let monthLeapYear = prompt('Enter a month', 'Example: september').toLowerCase();
let yearLeapYear;
let octoberLeapYear = 'october';
let septemberLeapYear = 'september';
let novemberLeapYear = 'november';
let decemberLeapYear = 'december';
let januaryLeapYear = 'january';
let februaryLeapYear = 'february';
let marchLeapYear = 'march';
let aprileLeapYear = 'april';
let mayLeapYear = 'may';
let juneLeapYear = 'june';
let julyLeapYear = 'july';
let augustLeapYear = 'august';
let daysLeapYear;

if (monthLeapYear === februaryLeapYear){
    yearLeapYear = parseInt(prompt('Enter a year', 'Example:2000'));
}

if (monthLeapYear===januaryLeapYear || monthLeapYear===marchLeapYear || monthLeapYear===mayLeapYear || monthLeapYear===julyLeapYear || monthLeapYear===augustLeapYear || monthLeapYear===octoberLeapYear || monthLeapYear===decemberLeapYear){
    daysLeapYear = 31;
    console.log(`${monthLeapYear} has ${daysLeapYear} days`);
}
else if (monthLeapYear===februaryLeapYear){
    if (yearLeapYear%4===0 || (yearLeapYear%100===0 &               
        yearLeapYear%400===0)){
        daysLeapYear = 29;
        console.log(`${monthLeapYear} has ${daysLeapYear} days because ${yearLeapYear} is a leap year`);
    }
    else{
        daysLeapYear = 28;
        console.log(`${monthLeapYear} has ${daysLeapYear} days`);
    }
}
else{
    daysLeapYear = 30;
    console.log(`${monthLeapYear} has ${daysLeapYear} days`);
}