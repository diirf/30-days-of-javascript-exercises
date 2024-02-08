// 1. Cambiar el estilo de cada párrafo mediante JavaScript (ej, color, fondo, borde, tamaño de la fuente, familia de la fuente)
const selectAll = document.querySelectorAll('p');

selectAll[0].style.fontSize = '50px';

selectAll[1].style.color = 'DarkSlateGray';
selectAll[1].style.background = 'DarkSeaGreen';

selectAll[2].style.borderStyle = 'solid';
selectAll[2].style.borderColor = 'DeepPink';
selectAll[2].style.borderWidth = 'thick';

selectAll[3].style.fontFamily = 'cursive';

// 2. Seleccione todos los párrafos y haga un bucle a través de cada uno de los elementos y dé al primer y tercer párrafo un color verde, y al segundo y cuarto párrafo un color rojo
selectAll.forEach((paragraphs, index) =>{
    if (index % 2 === 0){
        paragraphs.style.color = 'red';
    }
    else{
        paragraphs.style.color = 'green';
    }
})

// 3. Establecer textContent, id y class a cada párrafo
selectAll.forEach((paragraphs) => {
    paragraphs.textContent = 'Changing the text content';
    paragraphs.classList.add('class-level-2');
    paragraphs.setAttribute('id', 'id-level-2');
})