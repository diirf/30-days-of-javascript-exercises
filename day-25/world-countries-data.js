const TOP_COUNTRIES = 10;

const body = document.querySelector('body');
body.style.backgroundColor = '#EEF0F1';

const title = document.querySelector('h2');
title.style.color = '#FFA500';
title.style.fontSize = '38px';
title.style.marginBottom = '0';
title.style.textAlign = 'center';

const subtitle = document.querySelector('.subtitle');
subtitle.textContent = 'Currently, we have 250 countries';
subtitle.style.fontSize = '18px';
subtitle.style.color = '#565050';
subtitle.style.margin = '5px 0';
subtitle.style.textAlign = 'center';

const buttonContainer = document.querySelector('.graph-buttons');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';
buttonContainer.style.columnGap = '10px';
buttonContainer.style.width = '0 auto';
buttonContainer.style.height = '50px';
buttonContainer.style.border = 'none';
buttonContainer.style.borderColor = '#EEF0F1';
buttonContainer.style.backgroundColor = '#FFF';
buttonContainer.style.boxShadow = '10px 5px 5px #E5E5E5';

const graphTitle = document.querySelector('.graph-title');
graphTitle.style.color = '#565050';
graphTitle.style.fontSize = '15px';
graphTitle.style.fontWeight = 'normal';
graphTitle.style.textAlign = 'center';
graphTitle.style.margin = '0 0 20px 0';
graphTitle.style.borderColor = '#EEF0F1';
graphTitle.style.backgroundColor = '#FFF';
graphTitle.style.boxShadow = '10px 5px 5px #E5E5E5';

const graphs = document.querySelector('.graphs');
graphs.style.width = '650px';
graphs.style.margin = '0 auto';

const graphWrapper = document.querySelector('.graph-wrapper');
graphWrapper.style.display = 'grid';
graphWrapper.style.gridTemplate = `repeat(${TOP_COUNTRIES + 1}, 25px) 
                                    / 1fr 5fr 1fr`;
graphWrapper.style.gap = '5px';


const totalWorldCalc = countries_data.reduce((acc, curr) => acc + curr.population, 0);

countries_data.push({'name': 'World',
                     'population': totalWorldCalc,
                  });

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
  button.style.backgroundColor = '#FFA500';
  button.style.border = 'none';
  button.style.borderRadius = '2px';
  button.style.fontSize = '11px';
  button.style.width = '100px';
  button.style.height = '25px';
  button.style.padding = '5px';
  button.style.color = '#373232';
  button.innerText = button.innerText.toUpperCase();

  button.addEventListener('click', (e) => {
    graphWrapper.innerText = '';

    if (button.innerText === 'POPULATION'){
      graphTitle.textContent = `${TOP_COUNTRIES} Most populated countries in the world`;

      const copyCountriesData = [...countries_data].
                                sort((a,b) => b.population - a.population);

      for (let i = 0; i <= TOP_COUNTRIES; i++) {
        const countryName = copyCountriesData[i].name;
        const countryPopulation = copyCountriesData[i].population; 

        const nameWrapper = document.createElement('div');
        nameWrapper.textContent = countryName; 
        graphWrapper.appendChild(nameWrapper);
        
        const containerGraph = document.createElement('div');
        graphWrapper.appendChild(containerGraph);

        const ownGraph = document.createElement('div');
        const calcGraphCountry = (countryPopulation / 
                                  copyCountriesData[0].population);
        ownGraph.style.width = `${100*calcGraphCountry}%`;
        ownGraph.style.backgroundColor = '#FFA500';
        ownGraph.style.height = '25px';
        containerGraph.appendChild(ownGraph);

        const populationWrapper = document.createElement('div');
        populationWrapper.textContent = countryPopulation.
                                          toLocaleString('en-US');
        graphWrapper.appendChild(populationWrapper);
      }
    }
    else{
      graphTitle.textContent = `${TOP_COUNTRIES} Most Spoken languages in the world`;

      const totalLanguages = countries_data.reduce((acc, curr) => {
        if (curr.languages){
          curr.languages.forEach((language) => {
            acc[language] = (acc[language] || 0) + 1;
          })
        }
        return acc;
      }, {})

      const arrayTotalLanguages = Object.entries(totalLanguages);

      arrayTotalLanguages.sort((a, b) => b[1] - a[1]);

      for (let i = 0; i < TOP_COUNTRIES; i++) {
        const language = arrayTotalLanguages[i][0];
        const totalConuntries = arrayTotalLanguages[i][1]; 

        const languageWrapper = document.createElement('div');
        languageWrapper.textContent = language; 
        graphWrapper.appendChild(languageWrapper);
        
        const containerGraph = document.createElement('div');
        graphWrapper.appendChild(containerGraph);

        const ownGraph = document.createElement('div');
        const calcGraphLanguage = (totalConuntries / 
                                    arrayTotalLanguages[0][1]);
        ownGraph.style.width = `${95*calcGraphLanguage}%`;
        ownGraph.style.backgroundColor = '#FFA500';
        ownGraph.style.height = '25px';
        containerGraph.appendChild(ownGraph);

        const totalCountryWrapper = document.createElement('div');
        totalCountryWrapper.textContent = totalConuntries
        graphWrapper.appendChild(totalCountryWrapper);
      }
    }
  })
})



