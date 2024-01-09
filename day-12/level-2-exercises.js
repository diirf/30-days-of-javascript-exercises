// 1. Escriba una función llamada tenMostFrequentWords que obtenga las diez palabras más frecuentes de una cadena?
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(parag, num){
    const regex = /\./g;
    const paragClean = parag.replace(regex, '');
    const arrayParagClean = paragClean.split(' ');

    const countParag = arrayParagClean.reduce((acc, curr) =>{
        acc[curr] = (acc[curr] || 0) + 1;

        return acc;
    }, {});

    const arrayParag = Object.entries(countParag);
    const orderParag = arrayParag.sort((a, b) => b[1] - a[1]);

    let objectParag = {};
    let arrayOfObjects = [];

    for (let i = 0; i < num; i++){
        objectParag = {word: orderParag[i][0], count: orderParag[i][1]};
        arrayOfObjects.push(objectParag);
    }
    
    return arrayOfObjects;
}

tenMostFrequentWords(paragraph, 10);