// 1. Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const middleWeight = async function(){
  try{
    const response = await fetch(catsAPI);
    const cats = await response.json();
    
    const weightArray = [];

    for (const cat of cats){
      const weights = cat.weight.metric.split(' - ');

      const averageWeight = (parseInt(weights[0]) + parseInt(weights[1])) / 2;

      const weightObject = {'name': cat.name, 
                          'Average weight': averageWeight};

      weightArray.push(weightObject);
    }

    console.log(weightArray);
    
  }
  catch(error){
    console.log(err);
  }
}

middleWeight();

// 2. Lee la api de países y descubre los 10 países más grandes
const countriesAPI = "https://restcountries.com/v2/all";

const bigCountries = async() =>{
  try{
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    
    countries.sort((a,b) => (b.area || 0) - (a.area || 0));

    const bigTenCountries = [];

    for (let i = 0; i < 10; i++){
      bigTenCountries.push(countries[i].name);
    }

    console.log(`These are the biggest countries: ${bigTenCountries.join(', ')}`);
  }
  catch(err){
    console.error(err);
  }
}

bigCountries();

// 3. Lea la api de los países y cuente el número total de lenguas del mundo utilizadas como oficiales
const countriesAPII = "https://restcountries.com/v2/all";

const mostLanguages = async() =>{
  try{
    const response = await fetch(countriesAPII);
    const countries = await response.json();

    let totalLanguages = new Set();

    for (const country of countries){
      country.languages.forEach(language => {
        totalLanguages.add(language.name);
      });
    }
    console.log(totalLanguages.size);
  } 
  catch(err){
    console.error(err);
  }
}

mostLanguages();