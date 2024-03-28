// 1. Compruebe los requisitos de este proyecto a partir de ambas imágenes (jpg y gif). Todos los datos y el CSS se han implementado utilizando únicamente JavaScript. Los datos se encuentran en la carpeta de inicio del proyecto*3. El botón desplegable se ha creado utilizando el details* elemento HTML

//changing style of document
const wrapper = document.querySelector('.wrapper');
wrapper.style.margin = '0 auto';
wrapper.style.maxWidth = '600px';
wrapper.style.textAlign = 'center';

//changing the text of h1
const h1 = document.querySelector('h1');
h1.textContent = `${asabenehChallenges2020.challengeTitle} in `;

//creating span child on tittle and setting some styles
const spanYear = document.createElement('span');
spanYear.textContent = asabenehChallenges2020.challengeYear;
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
h2.textContent = asabenehChallenges2020.challengeSubtitle;
h2.style.marginBottom = '25px'
h2.style.textDecoration = 'underline';
h2.style.fontWeight = 'lighter';
h2.style.textAlign = 'center';
h2.style.fontSize = '20px';
h2.style.color = '#330166';

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

updateDate();

spanDate.style.textAlign = 'center';
spanDate.style.fontSize = '15px';
spanDate.style.padding = '5px 15px';
spanDate.style.backgroundColor = 'red';
h2.insertAdjacentElement('afterend', spanDate);

setInterval(() => {
  const color = randomColor();
  spanDate.style.backgroundColor = color;
}, 2000);

setInterval(updateDate, 1000);

//creating ul
const ul = document.createElement('ul');
ul.style.padding = '0px';
spanDate.insertAdjacentElement('afterend', ul);

//creating li
for (let i = 0; i < asabenehChallenges2020.challenges.length; i++){
  const li = document.createElement('li');
  const spanCoursesName = document.createElement('span');
  spanCoursesName.textContent = asabenehChallenges2020.challenges[i].name;

  //decorating first and second titles only
  if ((i === 0) || (i === 1)){
    spanCoursesName.style.textDecoration = 'underline';
    spanCoursesName.style.color = '#330166';
  }

  //some styles of li
  li.style.listStyle = 'none';
  li.style.marginTop = '2px';
  li.style.padding = '20px';
  li.style.border = 'solid white 1px';
  li.style.textAlign = 'start';
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';
  li.insertAdjacentElement('beforeend', spanCoursesName);
  ul.appendChild(li);

  //creating details tag
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.textContent = asabenehChallenges2020
                          .challenges[i].name.split('30 Days Of ')[1];
  details.style.cursor = 'pointer';
  details.appendChild(summary);
  li.insertAdjacentElement('beforeend', details);

  //creating details content
  asabenehChallenges2020.challenges[i].topics.forEach(topic => {
    const paragraph = document.createElement('p');
    paragraph.textContent = topic;
    paragraph.style.margin = '5px';
    details.appendChild(paragraph);
  });

  const spanStatus = document.createElement('span');
  spanStatus.textContent = asabenehChallenges2020.challenges[i].status;
  li.insertAdjacentElement('beforeend', spanStatus);

  //colors for each status
  if(spanStatus.textContent.includes('Done')){
    li.style.backgroundColor = '#5BBC7A';
  }
  else if(spanStatus.textContent.includes('Ongoing')){
    li.style.backgroundColor = '#F7DC5C';
  }
  else{
    li.style.backgroundColor = '#EB695B';
  }
}

//creating h3
const fullNameCreator = document.createElement('h3');
fullNameCreator.textContent = `${asabenehChallenges2020.author.firstName} 
                  ${asabenehChallenges2020.author.lastName}`;
fullNameCreator.style.fontSize = '30px';
fullNameCreator.style.marginBottom = '5px';
ul.insertAdjacentElement('afterend', fullNameCreator);

//creating social networks icons
const socialsContainer = document.createElement('div');
socialsContainer.style.display = 'flex';
socialsContainer.style.justifyContent = 'center';
fullNameCreator.insertAdjacentElement('afterend', socialsContainer);

asabenehChallenges2020.author.socialLinks.forEach(socialLink =>{
  const icon = socialLink.fontawesomeIcon;

  if (icon){
    const iconWrapper = document.createElement('a');
    iconWrapper.innerHTML = icon;
    iconWrapper.setAttribute('href', socialLink.url);
    iconWrapper.style.textDecoration = 'none';
    iconWrapper.style.color = 'black';
    iconWrapper.style.fontSize = '25px';
    iconWrapper.style.padding = '3px';
    socialsContainer.appendChild(iconWrapper);
  }
});

//creating bio
const bio = document.createElement('p');
bio.textContent = asabenehChallenges2020.author.bio;
bio.style.marginTop = '20px';
bio.style.fontSize = '15px'
socialsContainer.insertAdjacentElement('afterend', bio);

//creating titles, skills and qualifications
const allContainer = document.createElement('div');
allContainer.style.display = 'flex';
allContainer.style.justifyContent = 'center';
allContainer.style.textAlign = 'left';
allContainer.style.fontSize = '14px';
allContainer.style.columnGap = '40px';
allContainer.style.marginTop = '40px'
bio.insertAdjacentElement('afterend', allContainer);

const titlesContainer = document.createElement('div');
const nameTitle = document.createElement('p');
nameTitle.textContent = 'Titles';
nameTitle.style.margin = '0px';
nameTitle.style.marginBottom = '5px';
nameTitle.style.fontSize = '16px';
nameTitle.style.fontWeight = 'bold';
titlesContainer.appendChild(nameTitle);

asabenehChallenges2020.author.titles.forEach(title => {
  const titles = document.createElement('p');
  titles.textContent += `${title[0]} ${title[1]}`;
  titles.style.margin = '0px';
  titles.style.marginBottom = '3px';
  titlesContainer.appendChild(titles);
})
allContainer.appendChild(titlesContainer);

const skillsContainer = document.createElement('div');
const nameSkills = document.createElement('p');
nameSkills.textContent = 'Skills';
nameSkills.style.margin = '0px';
nameSkills.style.marginBottom = '5px';
nameSkills.style.fontSize = '16px';
nameSkills.style.fontWeight = 'bold';
skillsContainer.appendChild(nameSkills);

asabenehChallenges2020.author.skills.forEach(skill => {
  const skills = document.createElement('p');
  skills.textContent += `${skill[0]} ${skill[1]}`;
  skills.style.margin = '0px';
  skills.style.marginBottom = '3px';
  skillsContainer.appendChild(skills);
})
allContainer.appendChild(skillsContainer);

const qualifContainer = document.createElement('div');
const nameQualif = document.createElement('p');
nameQualif.textContent = 'Qualifications';
nameQualif.style.margin = '0px';
nameQualif.style.marginBottom = '5px';
nameQualif.style.fontSize = '16px';
nameQualif.style.fontWeight = 'bold';
qualifContainer.appendChild(nameQualif);

asabenehChallenges2020.author.qualifications.forEach(qual => {
  const qualif = document.createElement('p');
  qualif.textContent += `${qual[0]} ${qual[1]}`;
  qualif.style.margin = '0px';
  qualif.style.marginBottom = '3px';
  qualifContainer.appendChild(qualif);
})
allContainer.appendChild(qualifContainer);

//creating keywords
const keywordsTittle = document.createElement('p');
keywordsTittle.textContent = 'Keywords';
keywordsTittle.style.margin = '20px 0px 5px 25px';
keywordsTittle.style.fontSize = '16px';
keywordsTittle.style.fontWeight = 'bold';
keywordsTittle.style.textAlign = 'left';
allContainer.insertAdjacentElement('afterend', keywordsTittle);

const keywordWrapper = document.createElement('div');
keywordWrapper.style.display = 'flex';
keywordWrapper.style.justifyContent = 'end';
keywordWrapper.style.marginBottom = '30px';
keywordsTittle.insertAdjacentElement('afterend', keywordWrapper);

const keywordsContainer = document.createElement('div');
keywordsContainer.style.maxWidth = '530px';
keywordsContainer.style.display = 'flex';
keywordsContainer.style.justifyContent = 'space-around';
keywordsContainer.style.flexWrap = 'wrap';
keywordsContainer.style.rowGap = '5px';
keywordWrapper.appendChild(keywordsContainer);

asabenehChallenges2020.keywords.forEach(keyword => {
  const key = document.createElement('span');
  key.textContent = `# ${keyword}`;
  key.style.backgroundColor = randomColor();
  key.style.minWidth = '50px';
  key.style.padding = '5px';
  key.style.borderRadius = '20px';
  key.style.fontSize = '12px';
  key.style.fontWeight = 'bold';
  keywordsContainer.appendChild(key);
})