# Countries Phone Masks
Phone masks, ISO codes and flags for all countries

## Inspiration
After the need to add international phone masks into an application, I stumbled upon many libraries but they seemed too outdated or just too complex to just give me the country code, country name, flag and phone mask.
This list contains a hybrid of gists, libraries and wikipedia articles.
Any issues, kindly, consider creating an issue or a pull request.

## Installation
```npm install countries-phone-masks```

## Import
```js
const countries = require('countries-phone-masks')
// or 
import countries from 'countries-phone-masks'
```

## Usage
```js
console.log(countries.find(({ name }) => name === 'Brazil'))
// {
//   name: 'Brazil',
//   code: '+55',
//   iso: 'BR',
//   flag: 'https://cdn.kcak11.com/CountryFlags/countries/br.svg',
//   mask: [ '(##)####-####', '(##)#####-####' ]
// }
```