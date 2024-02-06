// 1. Imprime todos los nombres de los gatos en la variable catNames
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const catNames = async() => {
  try{
    const response = await fetch(catsAPI);
    const names = await response.json();
    
    for (const cats of names){
      console.log(cats.name);
    }
  }
  catch (err){
    console.log(err);
  }
}

catNames();