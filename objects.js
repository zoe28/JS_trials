'use strict';

// 1. countWords
function countWords(phrase) {
  /*"Return a dictionary of each word and the no. of times they appear.*/
  const word_counts = {};

  for(const word of phrase.split(" ")){
    if (word in word_counts){
      word_counts[word] += 1
    } else {
      word_counts[word] = 1
    }

  }
  
  return word_counts
}

console.log(countWords("hello hello my name is"))


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  /*  Return the list of melons that cost `price`. */
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  let listOfMelons = melonPrices[price];
  return listOfMelons ? listOfMelons.sort() : undefined;
}

console.log(getMelonsAtPrice(3))  // None
console.log(getMelonsAtPrice(3.25)) // 