/* DOM: Mini proyecto 1

1. Desarrolle la siguiente aplicación, utilice los siguientes elementos HTML para empezar. Obtendrá el mismo código en la carpeta de inicio. Aplique todos los estilos y la funcionalidad utilizando sólo JavaScript.
  i. El color del año cambia cada 1 segundo
  ii. El color de fondo de la fecha y la hora cambia cada dos segundos
  iii. El reto completado tiene fondo verde
  iv. El desafío en curso tiene fondo amarillo
  v. Los próximos retos tienen fondo rojo */

//changing style of document
const wrapper = document.querySelector('.wrapper');
wrapper.style.margin = '0 auto';
wrapper.style.maxWidth = '600px';
wrapper.style.textAlign = 'center';

//changing the text of h1
const h1 = document.querySelector('h1');
h1.textContent = 'Asabeneh Yetayeh challenges in ';

//creating span child on tittle and setting some styles
const spanYear = document.createElement('span');
spanYear.textContent = '2020';
spanYear.style.fontSize = '60px'
h1.appendChild(spanYear);

//random color for '2020'
randomColor = () => {
  const hexValues = 'ABCDEF0123456789';
  let hexColor = '';

  for (i = 0; i < 6; i++){
    const randomNumber = Math.floor(Math.random() * 16);
    hexColor += hexValues[randomNumber];
  }
  return `#${hexColor}`;
}

setInterval(() => {
  const color = randomColor();
  spanYear.style.color = color;
}, 1000);

//underline h2
const h2 = document.querySelector('h2');
h2.style.marginBottom = '25px'
h2.style.textDecoration = 'underline';
h2.style.fontWeight = 'lighter';
h2.style.textAlign = 'center';
h2.style.fontSize = '20px';
h2.style.color = '#330166'

//adding date and changing background color and hour
const spanDate = document.createElement('span');

updateDate = () =>{
  const currentDate = new Date();
  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const optionsHour = {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formatedDate = currentDate.toLocaleDateString('en-US', optionsDate);
  const formatedHour = currentDate.toLocaleTimeString('en-US', optionsHour);
  spanDate.textContent = `${formatedDate} ${formatedHour}`;
}

spanDate.style.textAlign = 'center';
spanDate.style.fontSize = '15px';
spanDate.style.padding = '10px'
spanDate.style.backgroundColor = 'red'
h2.insertAdjacentElement('afterend', spanDate);

setInterval(() => {
  const color = randomColor();
  spanDate.style.backgroundColor = color;
}, 2000);

setInterval(updateDate, 1000);

//ul style
const ul = document.querySelector('ul');
ul.style.paddingInlineStart = '0';

//il style
const li = document.querySelectorAll('li');
li.forEach((element)=>{
  element.style.listStyle = 'none';
  element.style.padding = '20px';
  element.style.border = 'solid white 1px'
  element.style.textAlign = 'start'

  if(element.textContent.includes('Done')){
    element.style.backgroundColor = '#5BBC7A';
  }
  else if(element.textContent.includes('Ongoing')){
    element.style.backgroundColor = '#F7DC5C';
  }
  else{
    element.style.backgroundColor = '#EB695B';
  }
})