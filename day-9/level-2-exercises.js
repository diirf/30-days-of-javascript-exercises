// 1. Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback))
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
  ]

const allProducts = products.filter((product) => product.price.toString().trim() !== '').map((product) => Object.values(product)).reduce((acc, curr) => acc + curr[1], 0);

// const allProducts = products.filter((product) => product.price.toString().trim() !== '').reduce((acc, curr) => acc + curr.price, 0);

console.log(allProducts);

// 2. Encuentre la suma del precio de los productos usando sólo reduce(callback))
const allProductsWithReduce = products.reduce((acc, curr) => acc + (typeof curr.price === 'number' ? curr.price : 0), 0);

// 3. Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan'))
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];

function categorizeCountries(){
  return countries.filter((country) => country.endsWith('ia'));
}

categorizeCountries();

// 4. Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país
const letterCountry = (countries) => {
  const firstLetters = countries.map((country) => country.charAt(0));
  const letterCount = firstLetters.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const arrayLetters = [];

  for (const letter in letterCount) {
    const objectsLetter = {};
    objectsLetter[letter] = letterCount[letter];
    arrayLetters.push(objectsLetter);
  }

  return arrayLetters;
}

letterCountry(countries);

// const letterCountry2 = (countries) => {
//   const letters = {};
//   countries.forEach((country) => {
//     const letter = country.charAt(0).toUpperCase();
//     if (!letters[letter]){
//       letters[letter] = 1;
//     }
//     else{
//       letters[letter]++;
//     }
//   });
  
//   return letters;
// }  
  
// letterCountry2(countries);

// 5. Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js
function getFirstTenCountries(countries){
  let tenCountries = [];

  countries.map((country, index) => {
    if (index < 10){
      tenCountries.push(country);
    }
    return null;
  })
    return tenCountries;
}

getFirstTenCountries(countries);

// function getFirstTenCountries2(countries){
//   return countries.filter((index) => index < 10);
// }

// getFirstTenCountries2(countries);

// function getFirstTenCountries3(countries){
//   let tenCountries = [];

//   countries.forEach((country, index) => {
//     if (index < 10){
//       tenCountries.push(country);
//     }
//   });
//   return tenCountries;
// }

// getFirstTenCountries3(countries);

// 6. Declara una función getLastTenCountries que devuelve los últimos diez países del array de países
function getLastTenCountries(countries){
  return countries.filter((country, index) => index >= countries.length - 10);
}

getLastTenCountries(countries);

// 7. Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)
const maxFirstLetter = (countries) => {
  const firstLetter = countries.map((country) => country.charAt(0));
  const countFirstLetter = firstLetter.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  let maxCount = 0;
  let maxLetter = '';

  for (let key in countFirstLetter){
    if (countFirstLetter[key] > maxCount){
      maxCount = countFirstLetter[key];
      maxLetter = key;
    }
  }

  return maxLetter;
}