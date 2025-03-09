# zipcode-bd

"A Bangladeshi Package" <br>
Get your Divisions, Subdivions and Villages with Postalcode in just seconds.

## Description

This npm package provides postal codes, subdivision names, and village names for different divisions in Bangladesh. You can use this package to easily retrieve location data such as subdivision names and their corresponding postal codes.

## Installation

```bash
npm install zipcode-bd
```

require 'zipcode-bd' into your code

```javascript
const { data } = require("zipcode-bd")

// Use zip.<anyDistrictName> to get all of it's sub Districts and Village names with Postal Codes
// Example:

console.log(data.Dhaka)
console.log(data.Rajshahi)
// Try yourself logging into the terminal!
```

## Practical Usage Examples:

<strong>Iterating over the elements.</strong>

You can loop and iterate over them by simply,

```javascript
const { data } = require("zipcode-bd")

let dhakaArr = zip.Dhaka
console.log("Dhaka:")
for (let i = 0; i < dhakaArr.length; i++) {
  console.log(
    `Sub-District: ${dhakaArr[i].subDistrict}\nVillage: ${dhakaArr[i].village}\nPostal Code: ${dhakaArr[i].postalCode}\n`
  )
}

/*
    Output:
    Sub-Division: Tejgaon Industrial Area
    Village: Dhaka Politechnic
    Postal Code: 1208

*/
```

<strong>Featured Functions:</strong>
<br>
You can use the built-in functions to search with District, Village and Postal Code from the dataObject.

```javascript
const {
  data,
  searchByDistrict,
  searchByVillage,
  searchByCode,
} = require("./index")

console.log(searchByDistrict("Rajshahi")) // Searchs all sub-Districts with Village name and Postal Codes
console.log(searchByVillage("Ishwardi")) // Finds with village name with Postal Code
console.log(searchByCode(3000)) // Searchs with Postal Code with Village and Postal Code.
```

Happy coding, AssalamuAlaikum!
