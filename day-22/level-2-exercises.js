// 1. Utilice el array de países para mostrar todos los países. Vea el diseño
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

//body styles
document.body.style.textAlign = 'center';

//tittle styles
const tittle = document.querySelector('h1');
const subtittle = document.querySelector('h2');
const tittleDomDay = document.querySelector('h3');
tittle.style.marginBottom = '0px';
tittle.style.letterSpacing = '12px'
subtittle.style.marginTop = '0px';
subtittle.style.marginBottom = '0px';
subtittle.style.fontSize = '18px';
subtittle.style.fontWeight = 'bold';
tittleDomDay.style.marginTop = '1.5px';
tittleDomDay.style.marginBottom = '60px';
tittleDomDay.style.fontSize = '15px';
tittleDomDay.style.fontWeight = 'lighter';

//container styles
const container = document.querySelector('.countries-container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.textAlign = 'center';
container.style.maxWidth = '642px';
container.style.margin = '0 auto';

//box countries
for (let i = 0; i < countries.length; i++){
  const spanCountry = document.createElement('span');
  const divCountry = document.createElement('div');

  const name = countries[i];
  spanCountry.textContent = name;
  spanCountry.style.fontSize = '11px';
  spanCountry.style.fontWeight = 'bold';
  spanCountry.style.textTransform = 'uppercase';

  divCountry.style.display = 'flex';
  divCountry.style.justifyContent = 'center';
  divCountry.style.alignItems = 'center';
  divCountry.style.width = '97px';
  divCountry.style.height = '104px';
  divCountry.style.margin = '3px';
  divCountry.style.borderStyle = 'solid';
  divCountry.style.borderColor = '#fafafa';
  divCountry.style.borderWidth = '2.5px';

  divCountry.appendChild(spanCountry);
  container.appendChild(divCountry);
}