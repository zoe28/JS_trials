'use strict';

// 1. isHometown

// Define your function here
function isHometown(town) {
/*
Given a `town`, return `True` if `town` is 'San Francisco'.
*/
  
  if (town === 'San Francisco') {
    console.log(true)
  }
}



function getFullName(first_name, last_name){
/*
 """Given `first_name` and `last_name`, return a full name.
*/
    console.log(`${first_name} ${last_name}`)

}




function calculateTotal(base_price, state, tax){
/*
Return the total price of an item, figuring in state taxes and fees.
*/
  let subtotal = base_price * (1 + tax);
  console.log('subtotal:', subtotal)
  let fee = 0;

  if (state === 'CA') {
    fee = 0.03 * subtotal;
  } else if (state === 'PA') {
    fee = 2;
  } else if (state === 'MA') {
      if (base_price <= 100) {
        fee = 1;
      } else {
        fee = 3;
      }
  }
  console.log('subtotal:', subtotal)
  return subtotal + fee;
}
console.log(calculateTotal(23, "CA", 0.05))
