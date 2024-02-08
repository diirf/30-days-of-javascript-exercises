// 1. Crear un archivo index.html y poner cuatro elementos p: obtenga el primer párrafo utilizando document.querySelector(tagname) y el nombre de la etiqueta
const firstParagraph = document.querySelector('p');

console.log(firstParagraph);

// 2. Obtener cada uno de los párrafos usando document.querySelector('#id') mediante su id
const firsstParagraph = document.querySelector('#first-paragraph');
const secondParagraph = document.querySelector('#second-paragraph');
const thirdParagraph = document.querySelector('#third-paragraph');
const fourthParagraph = document.querySelector('#fourth-paragraph');

console.log(firsstParagraph, secondParagraph, thirdParagraph, fourthParagraph);

// 3. Obtener todos los p como nodeList usando document.querySelectorAll(tagname) por su nombre de etiqueta
const allParagraphs = document.querySelectorAll('p');

console.log(allParagraphs);

// 4. Recorrer nodeList y obtener el contenido del texto de cada párrafo
const allContent = [];

allParagraphs.forEach(paragraph => allContent.push(paragraph.textContent));

console.log(allContent);

// 5. Establecer un textContent para el párrafo del cuarto párrafo
const changeFourthParagraph = allParagraphs[3].textContent = 'Now, this paragraph is changed';

console.log(changeFourthParagraph);

// 6. Establezca los atributos id y class para todos los párrafos utilizando diferentes métodos de establecimiento de atributos
const newClassFirstParagraph = allParagraphs[0].id = 'new-id';
const newClassSecondParagraph = allParagraphs[1].setAttribute('class', 'other-class');
const newClassThirdParagraph = thirdParagraph.classList.add('another-class');
const newClassFourthParagraph = fourthParagraph.setAttribute('id', 'second-id');