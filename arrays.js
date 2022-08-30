'use strict';

// 1. printIndices
function printIndices(items) {
/*
  Print each item in the list, followed by its index.
*/
  for (const i in items) {
    console.log(`${i} ${items[i]}`)
  }

}

//printIndices(["cotton candy", "tennis"])


// 2. everyOtherItem
function everyOtherItem(items) {
/*
  Print every other item
*/
  const result = []
  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }
  console.log(result)
}

// everyOtherItem(['apple', 'banana', 'berry'])



// 3. smallestNItems
function smallestNItems(items, n) {
/*
Print a list of the `n` smallest integers in `items`.
[1, 30, 4, 21, 100000], n = 3 
*/
  
  let sorted_items = items.sort((a, b) => a - b);
  let sorted_n_items = sorted_items.slice(0, n);
  sorted_n_items.reverse();


  console.log(sorted_n_items)


}

smallestNItems([1, 30, 4, 21, 100000], 2)
