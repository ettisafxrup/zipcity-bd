const data = require("./data");

/**
 * Helper function to filter entries based on a field (e.g., city, sub, postalCode)
 * @param {string} field - The field to filter by (e.g., city, sub, postalCode)
 * @param {string} value - The value to search for
 * @returns {object|array} - Returns a single match as an object if exactly one match is found, or an array of matches (possibly empty) if multiple or no matches found
 */
function filterEntriesBy(field, value) {
  const lowerValue = String(value).toLowerCase();
  const results = [];

  for (const district of Object.values(data)) {
    for (const entry of district) {
      if (entry[field].toLowerCase().includes(lowerValue)) {
        results.push(entry);
      }
    }
  }

  return results.length === 1 ? results[0] : results;
}

/**
 * Function to search by district (division) with partial match
 * @param {string} district - The district (division) to search for
 * @returns {object} - Returns an object with matching districts, or an empty object if no matches found
 */
function searchByDistrict(district) {
  if (typeof district !== "string") {
    return "Error: searchByDistrict - Please input a valid district name";
  }

  const lowerDistrict = district.toLowerCase();

  return Object.fromEntries(
    Object.entries(data).filter(([key]) =>
      key.toLowerCase().includes(lowerDistrict)
    )
  );
}

/**
 * Function to search by city with partial match
 * @param {string} city - The city to search for
 * @returns {object|array|string} - Returns a single match as an object if exactly one match is found, or an array of matches (possibly empty) if multiple or no matches found or an error message if no city is provided
 */
function searchByCity(city) {
  if (typeof city !== "string")
    return "Error: searchByCity - Please input a valid city name";

  return filterEntriesBy("city", city);
}

/**
 * Function to search by sub-area with partial match
 * @param {string} sub - The sub-area to search for
 * @returns {object|array|string} - Returns a single match as an object if exactly one match is found, or an array of matches (possibly empty) if multiple or no matches found or an error message if no sub-area is provided
 */
function searchBySub(sub) {
  if (typeof sub !== "string") {
    return "Error: searchBySub - Please input a valid sub-area name";
  }

  return filterEntriesBy("sub", sub);
}

/**
 * Function to search by postal code with partial match
 * @param {string} zipcode - The postal code to search for
 * @returns {object|array|string} - Returns a single match as an object if exactly one match is found, or an array of matches (possibly empty) if multiple or no matches found or an error message if no postal code is provided
 */
function searchByCode(zipcode) {
  if (!zipcode) return "Error: searchByCode - Please provide a postal code";

  return filterEntriesBy("postalCode", zipcode);
}

module.exports = {
  searchByDistrict,
  searchByCity,
  searchBySub,
  searchByCode,
};

/* 
  Author: Ettisaf Rup,
  Github: https://github.com/ettisafxrup
  Facebook: https://facebook.com/ettisafxrup
  LinkedIn: https://www.linkedin.com/in/ettisafxrup
*/
