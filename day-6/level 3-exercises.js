// 1. Copia el array countries (Evita mutaciones)
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany', 'Hungary','Ireland', 'Iceland', 'Japan','Kenya'];

const copyOfCountries = countries.slice();
console.log(copyOfCountries);

// 2. Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
const sortedCountries = countries.slice().sort();
console.log(sortedCountries);

// 3. Ordena el array webTechs y el array mernStack
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const copyOfWebTechs = webTechs.slice();
const copyOfMernStack = mernStack.slice();

copyOfWebTechs.sort();
console.log(copyOfWebTechs);

copyOfMernStack.sort();
console.log(copyOfMernStack);

// 4. Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
const totalCountries = [
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
  ]
const countriesWithLand = [];
regex = /land/;

for (let country of totalCountries){
  if (country.search(regex) !== -1){
    countriesWithLand.push(country);
  }
}

console.log(countriesWithLand);

// 5. Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
const max = totalCountries[0];

for (let country of totalCountries){
  if (country.length > max.length){
    max = country;
  }
}

console.log(`This is the web tech with most letters: ${max}`);

// 6. Extrae todos los países que contienen la palabra 'ia' del array countries e imprimela como un array
const countriesWithIa = [];
regex = /ia/;

for (let country of totalCountries){
  if (country.search(regex) !== -1){
    countriesWithIa.push(country);
  }
}

console.log(countriesWithIa);

// 7. Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
const countriesWithFourLetters = [];

for (let i = 0; i < totalCountries.length; i++){
  if (totalCountries[i].length === 4){
    countriesWithFourLetters.push(totalCountries[i]);
  }
}

console.log(countriesWithFourLetters);

// 8. Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
const countriesWithTwoLetters = [];

for (let i = 0; i < totalCountries.length; i++){
  if (totalCountries[i].length >= 2){
    countriesWithTwoLetters.push(totalCountries[i]);
  }
}

console.log(countriesWithTwoLetters);

// 9. Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
const totalCountriesCopy = [];

for (let i = totalCountries.length - 1; i >= 0; i--){
  totalCountriesCopy.push(totalCountries[i].toUpperCase());
}

console.log(totalCountriesCopy);