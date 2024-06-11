const title = document.querySelector('.title');
title.textContent = portfolio.name;

const abilities = document.querySelector('.abilities-wrap');
const textAbilities = document.querySelector('.text-abilities');
const iconAbilities = document.querySelector('.icon-abilities');

let currentAbilityIndex = 0;

function showNextAbility(){
  // removes the animation class to stop any animation in progress
  textAbilities.classList.remove('text-animation');
  
  // checks if the current index has reached the end of the skills list
  if (currentAbilityIndex >= portfolio.abilities.length){
    currentAbilityIndex = 0;
  }

  // current skill and updates the text and icon content
  const ability = portfolio.abilities[currentAbilityIndex];
  iconAbilities.textContent = `${ability[0]}`
  textAbilities.textContent = `${ability[1]
                              .split(' ')
                              .map(word => word[0].toUpperCase() + word.substring(1))
                              .join(' ')}`;
  currentAbilityIndex++;

  // force a reflow to restart the animation
  void textAbilities.offsetWidth;
  textAbilities.classList.add('text-animation');
}

setInterval(showNextAbility, 2000);

const about = document.querySelector('.about-me');

// about me with bold in the challenges
about.innerHTML = `I am ${portfolio.name}. I am ${portfolio.abilities[0][1]}, developer, ${portfolio.abilities[3][1]} and ${portfolio.abilities[4][1]}. I love educating people and creating educational materials. In January 2019, I also created a teaching material <strong>${portfolio.challenges[0]}</strong>. In December 2019, I created <strong>${portfolio.challenges[1]}</strong> challenge and in January 2020 <strong>${portfolio.challenges[2]}</strong> challenge.`;

const challengeElements = document.querySelectorAll('.challenges > div');

// creating challenges values
portfolio.challenges.forEach((challenge, index) => {
  if (index < challengeElements.length){
    challengeElements[index].textContent = challenge.toUpperCase();
  }
});

const tech = document.querySelector('.technologies');

let currentTechIndex = 0;

// list of technologies
function showTechnologies(){
  if (currentTechIndex >= portfolio.technologies.length){
    currentTechIndex = 0;
  }
  
  tech.innerHTML = `The technologies I teach <span class = 'techs'>${portfolio.technologies[currentTechIndex].toUpperCase()}</span>`;

  currentTechIndex++;

  // change color of technologies
  const techSpan = document.querySelector('.techs');

  techSpan.classList.add('techs-animation');
  techSpan.style.color = randomColors();
}

setInterval(showTechnologies, 2500);

// random colors
function randomColors(){
  const hexValue = 'ABCDEF0123456789';
  let color = '#';

  for (let i = 0; i < 6; i++){
    const randomNumber = Math.floor(Math.random() * 16);
    
    color += hexValue[randomNumber]; 
  }

  return color;
}



