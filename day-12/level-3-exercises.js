// 1. Escribe una función que limpie el texto. Limpia el siguiente texto. Después de la limpieza, cuente tres palabras más frecuentes en la cadena
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(senten){
    const regex = /[%@#&$.,;!?]+/g
    const cleanSentences = senten.replace(regex,"");
    const arraySentences = cleanSentences.split(/\s+/);

    const countWords = arraySentences.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;

        return acc;
    },{});

    const arrayCountWords = Object.entries(countWords);
    const orderWord = arrayCountWords.sort((a,b) => b[1] - a[1]);
    
    let objectWord = {};
    let arrayWord = [];

    for (let i = 0; i < 3; i++){
        objectWord = {word: orderWord[i][0], count: orderWord[i][1]};
        arrayWord.push(objectWord);
    }

    return arrayWord;
}

cleanText(sentence);