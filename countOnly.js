const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let namesToCount = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      namesToCount[item] = 0;
    } else {
      namesToCount[item] = undefined;
    }
  }
  for (let items in allItems) {
    if (!isNaN(namesToCount[allItems[items]])) {
      namesToCount[allItems[items]]++;
    }
  }
  for (let items in namesToCount) {
    if (namesToCount[items] === 0) {
      namesToCount[items] = undefined;
    }
  }
  return namesToCount;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames,
  { "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna":
    false });

console.log(countOnly(firstNames, result1));

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);