# Countries Phone Masks

Phone masks, ISO codes and flags for all countries

## Inspiration

After the need to add international phone masks into an application, I stumbled upon many libraries but they seemed too outdated or just too complex to just give me the country code, country name, flag and phone mask.

This list contains a hybrid of gists, libraries and wikipedia articles.
Any issues, kindly, consider creating an issue or a pull request.

## Installation

To install the package, run the `install` command with your package manager of choice:

```shell
npm install countries-phone-masks
```

## Import

The package exports an array of objects. You can import the package using CommonJS syntax:

```javascript
const countries = require("countries-phone-masks");
```

Or using ES6 modules:

```javascript
import countries from "countries-phone-masks";
```

The package also exports a type definition for TypeScript:

```typescript
import type { Country } from "countries-phone-masks";
```

## Usage

```javascript
const countries = require("countries-phone-masks");

const country = countries.find(({ name }) => name === "Brazil");

console.log(country);
```

Running the code above will output the following object:

```json
{
  "name": "Brazil",
  "code": "+55",
  "iso": "BR",
  "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg",
  "mask": "(##)####-####",
  "masks": [ "(##)####-####", "(##)#####-####" ]
}
```

