// 1. Develop a small application which calculate a weight of an object in a certain planet
const body = document.querySelector('body');
body.style.backgroundImage = "url('./images/galaxy.gif')";

//align tittle
const tittle = document.querySelector('h1');
tittle.style.color = '#FFF';
tittle.style.textAlign = 'center';
tittle.style.marginBottom = '53px';

//creating container for planets configuration
const configurationContainer = document.createElement('div');
configurationContainer.style.display = 'flex';
configurationContainer.style.justifyContent = 'center';
configurationContainer.style.alignItems = 'center';
configurationContainer.style.columnGap = '12px';
configurationContainer.style.marginBottom = '22px';
tittle.insertAdjacentElement('afterend', configurationContainer);

//input settings
const input = document.querySelector('#mass');
input.style.height = '30px';
input.style.width = '162px';
input.style.color = '#9A9A9D';
input.style.border = 'none';
input.style.padding = '0 0 0 8px';
configurationContainer.appendChild(input);

//select settings
const select = document.querySelector('select');
select.style.height = '31px';
select.style.width = '120px';
select.style.color = '#9A9A9D';
select.style.borderRadius = '5px';
configurationContainer.appendChild(select);

//button settings
const button = document.querySelector('button');
button.style.height = '31px';
button.style.width = '115px';
button.style.backgroundColor = '#6B6B6B';
button.style.color = '#FFF';
button.style.border = 'none';
button.style.borderRadius = '5px';
configurationContainer.appendChild(button);

//planets container settings: image and description
const planetsContainer = document.querySelector('.flex-container');
planetsContainer.style.backgroundColor = 'rgb(243 231 231 / 15%)';
planetsContainer.style.display = 'flex';
planetsContainer.style.justifyContent = 'center';
planetsContainer.style.alignItems = 'center';
planetsContainer.style.columnGap = '35px';
planetsContainer.style.width = '800px';
planetsContainer.style.height = '400px';
planetsContainer.style.margin = '0 auto';

//image container settings
const planetsImagesContainer = document.querySelector('.image');
planetsImagesContainer.style.width = '300px';

//image settings
const planetImage = document.querySelector('.planet-image');
planetImage.style.width = '100%';

//description settings
const planetDescription = document.querySelector('.description');
planetDescription.style.backgroundColor = 'rgb(254 249 249 / 15%)';
planetDescription.style.display = 'flex';
planetDescription.style.flexWrap = 'wrap';
planetDescription.style.justifyContent = 'center';

//creating planets name selection
planetsInfo.planets.forEach(planet =>{
  const option = document.createElement('option');
  option.textContent = planet.name;
  option.setAttribute('value', planet.name);
  option.style.backgroundColor = 'rgb(170 158 158)';
  option.style.color = '#FFF';
  select.appendChild(option);
})

const firstOption = document.querySelector('option');
firstOption.style.backgroundColor = 'rgb(170 158 158)';
firstOption.style.color = '#FFF';

//creating error message
const errorMsg = document.createElement('p');
errorMsg.style.width = '450px';
errorMsg.style.height = '52px';
errorMsg.style.color = '#FFF';
errorMsg.style.margin = '0';
errorMsg.style.display = 'flex';
errorMsg.style.justifyContent = 'center';
errorMsg.style.alignItems = 'center';
errorMsg.style.fontSize = '20px';
errorMsg.style.backgroundColor = 'rgb(254 249 249 / 15%)';

//creating description message
const descriptionMsg = document.createElement('p');
descriptionMsg.textContent = 'The weight of the object on ';
descriptionMsg.style.color = '#FFF';
descriptionMsg.style.textAlign = 'center';
descriptionMsg.style.fontSize = '20px';
descriptionMsg.style.marginBottom = 0;

const planetChoosed = document.createElement('span');
planetChoosed.style.fontWeight = 'bold';
descriptionMsg.appendChild(planetChoosed);

//creating weight value
const weightValue = document.createElement('p');
weightValue.style.display = 'flex';
weightValue.style.justifyContent = 'center';
weightValue.style.alignItems = 'center';
weightValue.style.color = '#FFF';
weightValue.style.textAlign = 'center';
weightValue.style.fontSize = '20px';
weightValue.style.fontWeight = 'bold';
weightValue.style.borderRadius = '100%';
weightValue.style.backgroundColor = 'rgb(254 249 249 / 25%)';
weightValue.style.width = '100px';
weightValue.style.height = '100px';
weightValue.style.margin = '20px 0';

button.addEventListener('click', (e) => {
  planetsContainer.innerHTML = '';
  planetsContainer.appendChild(errorMsg);
  planetsContainer.style.width = '800px';
  planetsContainer.style.height = '100px';

  if (!input.value || isNaN(input.value)){
    errorMsg.textContent = 'Mass is required';
  }
  else if (select.value === 'none'){
    errorMsg.textContent = 'You did not choose a planet yet';
  }
  else{
    planetsContainer.innerHTML = '';
    planetsContainer.style.width = '800px';
    planetsContainer.style.height = '400px';
    planetsContainer.appendChild(planetsImagesContainer);
    planetsContainer.appendChild(planetDescription);

    planetDescription.appendChild(descriptionMsg);    
    planetDescription.style.width = '350px';
    planetDescription.appendChild(weightValue);

    planetChoosed.textContent = select.value.toUpperCase();    

    //filtering selected planet
    const planet = planetsInfo.planets.filter((planet) =>{
      return select.value === planet.name
    })

    //object weight computed
    weightValue.textContent = `${(parseFloat(input.value) * 
                              planet[0].gravity).toFixed(2)} N`;
    
    //planet image selected
    planetImage.src = planet[0].img;
  }
})