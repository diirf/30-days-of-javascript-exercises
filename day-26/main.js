const TOTAL_COUNTRIES = countries.length;
let activeButton = 'anyWord';
let filterLenght;

function showCountries(countries){
  allCountriesContainer.innerHTML = '';
  
  countries.forEach((country) => {
    const spanCountry = document.createElement('span');
    const countryContainer = document.createElement('div');
  
    const name = country;
    spanCountry.textContent = name;
    spanCountry.style.fontSize = '12px';
    spanCountry.style.fontWeight = 'bold';
    spanCountry.style.textTransform = 'uppercase';
    spanCountry.style.color = 'white';
    spanCountry.style.textAlign = 'center';
    
    countryContainer.style.display = 'flex';
    countryContainer.style.justifyContent = 'center';
    countryContainer.style.alignItems = 'center';
    countryContainer.style.width = '97px';
    countryContainer.style.height = '104px';
    countryContainer.style.margin = '3px';
    countryContainer.style.borderStyle = 'none';
    countryContainer.style.borderRadius = '5px';
    countryContainer.style.borderColor = '#fafafa';
    countryContainer.style.borderWidth = '2.5px';
    countryContainer.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.42), rgb(33 64 122 / 54%)), url('./images/map.jpg')";
    countryContainer.style.backgroundSize = 'cover';
    countryContainer.style.backgroundPosition = 'center';
  
    countryContainer.appendChild(spanCountry);
    allCountriesContainer.appendChild(countryContainer);
  })
}

function filterByStartWith(searchString){
  const filteredCountries = countries.filter((country) => {        
    return country.toLowerCase().startsWith(searchString);
  })
    
  filterLenght = filteredCountries.length;
  console.log(filterLenght);
  showCountries(filteredCountries);
}

function filterByAnyWord(searchString){
  const filteredCountries = countries.filter((country) => {        
    return country.toLowerCase().includes(searchString);
  })
    
  filterLenght = filteredCountries.length;
  console.log(filterLenght);
  showCountries(filteredCountries);
}

const body = document.querySelector('body');
body.style.margin = '0';

const header = document.querySelector('header');
header.style.width = '100%';
header.style.height = '380px';
header.style.alignContent = 'center';
header.style.textAlign = 'center';
header.style.top = '0';
header.style.left = '0';
header.style.backgroundImage = "radial-gradient(#00000026, rgb(42 33 122 / 75%)), url('./images/globe.jpg')";
header.style.backgroundSize = 'cover';
header.style.backgroundPosition = 'center';
header.style.backgroundRepeat = 'no-repeat';

const textsContainer = document.createElement('div');
textsContainer.style.alignContent = 'center';
textsContainer.style.textAlign = 'center';
textsContainer.style.margin = 'auto';
//textsContainer.style.width = '605px';
//textsContainer.style.height = '92px';
header.insertAdjacentElement('afterbegin', textsContainer);

const title = document.querySelector('h1');
title.innerText = title.innerText.toUpperCase();
title.style.marginBottom = '3px';
title.style.color = 'white';
//title.style.textAlign = 'center';
title.style.marginTop = '0px';
title.style.letterSpacing = '5px';
title.style.fontSize = '40px';
textsContainer.appendChild(title);

const subtitle = document.querySelector('.subtitle');
subtitle.textContent = `Total number of countries: ${TOTAL_COUNTRIES}`;
subtitle.style.margin = '0';
subtitle.style.color = 'white';
//subtitle.style.textAlign = 'center';
subtitle.style.fontWeight = 'bold';
textsContainer.appendChild(subtitle);

const countriesStart = document.querySelector('.countries-start');
countriesStart.style.fontSize = '12px';
countriesStart.style.display = 'flex';
countriesStart.style.justifyContent = 'center';
countriesStart.style.columnGap = '3px';
textsContainer.appendChild(countriesStart);

const allStart = document.createElement('span');
allStart.style.color = 'white';
countriesStart.appendChild(allStart);

const valueStart = document.createElement('span');
valueStart.style.color = 'rgb(249, 43, 37)';
valueStart.style.fontWeight = 'bold'; 
countriesStart.appendChild(valueStart);

const areStart = document.createElement('span');
areStart.style.color = 'white';
countriesStart.appendChild(areStart);

const lengthStart = document.createElement('span');
lengthStart.style.color = 'rgb(24 233 17)';
lengthStart.style.fontWeight = 'bold';
countriesStart.appendChild(lengthStart);

const buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.style.width = 'auto';
buttonsContainer.style.height = 'auto';
buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'center';
buttonsContainer.style.alignItems = 'center';
buttonsContainer.style.columnGap = '3px';

const buttons = document.querySelectorAll('.start, .anyWord, .arrows');
buttons.forEach((button) =>{
  button.style.backgroundColor = '#895BE6';
  button.style.border = 'none';
  button.style.borderRadius = '3px';
  button.style.fontSize = '9px';
  button.style.height = '40px';
  button.style.marginBottom = '20px';
  button.style.color = 'white';
  button.innerText = button.innerText.toUpperCase();

  //changing the color of the button selected
  button.addEventListener('click', (e) => {
    buttons.forEach((btn) => {
      btn.style.backgroundColor = '#895BE6';
    })

    button.style.backgroundColor = '#581CB8';
  })
})

//showing all countries
const allCountriesContainer = document.querySelector('.wrapper-worlds');
allCountriesContainer.style.margin = '0 auto';
allCountriesContainer.style.width = '834px';
allCountriesContainer.style.marginTop = '31px';
allCountriesContainer.style.display = 'flex';
allCountriesContainer.style.flexWrap = 'wrap';
allCountriesContainer.style.gap = '10px 34px';

showCountries(countries);

const input = document.querySelector('#search-bar');
input.style.borderRadius = '15px';
input.style.border = 'solid 1px #A7CAF1';
input.style.height = '30px';
input.style.width = '350px';
input.style.marginRight = '2px';
input.style.textAlign = 'center';

buttons[0].style.width = '95px';

buttons[0].addEventListener('click', (e) => {
  activeButton = 'start';

  if (input.value !== ''){
    allStart.textContent = 'Countries start with';
    filterByStartWith(input.value.trim().toLowerCase());
    valueStart.textContent = input.value;
    areStart.textContent = 'are';
    lengthStart.textContent = filterLenght;
  }
})

buttons[1].style.width = '130px';

buttons[1].addEventListener('click', (e) => {
  activeButton = 'anyWord';

  if (input.value !== ''){
    allStart.textContent = 'Countries containing';
    filterByAnyWord(input.value.trim().toLowerCase());
    valueStart.textContent = input.value;
    areStart.textContent = 'are';
    lengthStart.textContent = filterLenght;
  }
})

const iconSort = document.createElement('i');
iconSort.classList.add('fa-solid', 'fa-arrow-down-a-z');
iconSort.style.fontSize = '12px';
buttons[2].style.width = '30px';
buttons[2].appendChild(iconSort);

buttons[2].addEventListener('click', (e) => {
  activeButton = 'sort';
  allStart.textContent = '';
  valueStart.textContent = '';
  areStart.textContent = '';
  lengthStart.textContent = '';

  if (iconSort.classList.contains('fa-arrow-down-a-z')){
    iconSort.classList.remove('fa-arrow-down-a-z');
    iconSort.classList.add('fa-arrow-up-a-z');
    countries.sort((a,b) => b.localeCompare(a));
  }
  else{
    iconSort.classList.remove('fa-arrow-up-a-z')
    iconSort.classList.add('fa-arrow-down-a-z');
    countries.sort((a,b) => a.localeCompare(b))
  }
  showCountries(countries);
})

//showing countries with any word or starting word
input.addEventListener('input', (e) => {
  if (e.target.value !== ''){
    if (activeButton === 'start'){
      allStart.textContent = 'Countries start with';
      const searchString = e.target.value.trim().toLowerCase();
      filterByStartWith(searchString);
    }
    else if (activeButton === 'anyWord'){
      allStart.textContent = 'Countries containing';
      const searchString = e.target.value.trim().toLowerCase();
      filterByAnyWord(searchString);
    }
    else{
      allStart.textContent = '';
      valueStart.textContent = '';
      areStart.textContent = '';
      lengthStart.textContent = '';
      return;
    }
  
    valueStart.textContent = e.target.value;
    areStart.textContent = 'are';
    lengthStart.textContent = filterLenght;
  }
  else{
    allStart.textContent = '';
    valueStart.textContent = '';
    areStart.textContent = '';
    lengthStart.textContent = '';
  }
})

const searchContainer = document.querySelector('.magnifying-glass');
const iconSearch = document.createElement('i');
iconSearch.classList.add('fa-solid', 'fa-magnifying-glass');
iconSearch.style.color = 'white';
searchContainer.appendChild(iconSearch);

const inputSearchContainer = document.querySelector('.input-search')
inputSearchContainer.style.display = 'flex';
inputSearchContainer.style.justifyContent = 'center';
inputSearchContainer.style.alignItems = 'center';
inputSearchContainer.style.columnGap = '2px';

//deleting placeholder text when is focus
input.addEventListener('click', (e) => {
  input.setAttribute('placeholder', '');
  input.style.paddingLeft = '5px';
  input.style.textAlign = 'start';
})