// 1. Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie
const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
.then((response) => response.json())
.then((data) => {
 
  const newArray = [];
  let newObject = {};
  
  for (country of data){
    const newArrayLanguage = [];
    
    for (language of country.languages){
      if (language.name){
        newArrayLanguage.push(language.name);
      }
    }

    newObject = {name : country.name, capital : country.capital, 
                languages : newArrayLanguage, population : country.population,
                area: country.area};
    newArray.push(newObject);
  }

  console.log(newArray);
})
.catch((error) => console.error(error));