# ⛓ zipcity-bd

### A Bangladeshi ZipCode Package

A Bangladesh-based zipcode package to get your Divisions, Districts, City, Sub-City with PostalCode in just seconds.

## Description

This npm package provides postal codes, subdivision names, and village names for different divisions in Bangladesh. You can use this package to easily retrieve location data such as subdivision names and their corresponding postal codes.

## Installation

```bash
npm install zipcity-bd
```

require 'zipcity-bd' into your code

```javascript
const zip = require("zipcity-bd");

console.log(zip.data.Dhaka);
console.log(zip.data.Rajshahi);
```

Or, for <b>❛better readability❜</b> of your code:

```javascript
const { data } = require("zipcity-bd");

// Use zip.<anyDistrictName> to get all of it's sub Districts and Village names with Postal Codes
// Example:

console.log(data.Dhaka);
console.log(data.Rajshahi);
// Try yourself logging into the terminal!
```

## Practical Usage Examples:

<strong>Iterating over the elements.</strong>

You can loop and iterate over them by simply,

```javascript
const { data } = require("zipcity-bd");

let dhakaArr = data.Dhaka;
console.log("Dhaka:");
for (let i = 0; i < dhakaArr.length; i++) {
  console.log(
    `Sub-District: ${dhakaArr[i].subDistrict}\nVillage: ${dhakaArr[i].village}\nPostal Code: ${dhakaArr[i].postalCode}\n`
  );
}

/*
    Output Example:
    
    //...
    
    Sub-Division: Tejgaon Industrial Area
    Village: Dhaka Politechnic
    Postal Code: 1208
    
    // ...

*/
```

## Featured Functions:

<br>
You can use the built-in functions to search with District, Village and Postal Code from the dataObject.
 <br>
 <br>
 
 ♨<strong>searchByDistrict</strong><br>
 Allows to search by District Names.

```javascript
const { searchByDistrict } = require("zipcity-bd");

let dhakaDistrict = searchByDistrict("Dhaka");
let rajshahiDistrict = searchByDistrict("Rajshahi");

// logging returned value
console.log(dhakaDistrict);
console.log(rajshahiDistrict);

// Even works with partial word match

searchByDistrict("Dha"); // returns same value as "Dhaka"
searchByDistrict("shahi"); // returns same value as "Rajshahi"
```

♨<strong>searchByCity</strong><br>
Allows to search by City Names.

```javascript
const { searchByCity } = require("zipcity-bd");

let mirpurCity = searchByCity("Mirpur");
let ishwardiCity = searchByCity("Ishwardi");

// logging returned value
console.log(mirpurCity);
console.log(ishwardiCity);

// Works with partial word match
searchByCity("Mir"); // returns same value as "Mirpur"
searchByCity("Ishwar"); // returns same value as "Ishwardi"
```

♨<strong>searchBySub</strong><br>
Allows to search by Sub-City/Thana/Union Names.

```javascript
const { searchBySub } = require("zipcity-bd");

let dhapariSubCity = searchBySub("Dhapari");
let pakshiSubCity = searchBySub("Pakshi");

// logging returned value
console.log(dhapariSubCity);
console.log(pakshiSubCity);

// Works with partial word match
searchBySub("Dha"); // returns same value as "Dhapari"
searchBySub("Pak"); // returns same value as "Pakshi"
```

♨<strong>searchByCode</strong>
<br>
Using postalCode to search the District, subDistrict and City

```javascript
const { searchByCode } = require("zipcity-bd");

console.log(searchByCode(6640)); // Bhangura
console.log(searchByCode(1212)); // Gulshan's postalCode

// Returns empty array if no data found.
```

## 🧊 Summary Code

```javascript
const {
  data,
  searchByDistrict,
  searchByCity,
  searchBySub,
  searchByCode,
} = require("zipcity-bd");

console.log(searchByDistrict("Rajshahi")); // Searchs all sub-Districts with Village name and Postal Codes
console.log(searchByCity("Ishwardi")); // Finds with City name with Postal Code
console.log(searchBySub("Sathia")); // Finds with Sub-City name with Postal Code
console.log(searchByCode(3000)); // Searchs with Postal Code with Village and Postal Code.
```

Don't forget to star my repo if it helped! <3
Happy coding, AssalamuAlaikum!

Author: Ettisaf Rup

<p align="left">
<a href="https://github.com/ettisafxrup" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="ettisafrup" height="30" width="40" /></a>
<a href="https://facebook.com/ettisafxrup" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="xtend ettisaf" height="30" width="40" /></a>
</p>
