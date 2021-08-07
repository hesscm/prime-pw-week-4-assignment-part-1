console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('1. Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  //return a phrase with the passed in iable
  return `Hello there, ${name}!`;
}
// Remember to call the function to test
console.log('2. Test - should say "Hello there, Chris!"', helloName('Chris'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('3. Test - should say "9"', addNumbers(5,4));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}
console.log('3. Test - should say "24"', multiplyThree(2,3,4));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  //check if value is greater than 0 and return accordingly
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( '5. isPositive - should say true', isPositive(3) );
console.log( '5. isPositive - should say false', isPositive(0) );
console.log( '5. isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  //check to see if there are any elements in the array
  if (array.length === 0){
    /*Not sure what the question is asking here. Should we return the string
    'undefined' or the output is undefined? I will put the code for the latter
    below. */
    return 'undefined';
  }
  else {
    //return the last array element
    return array[array.length - 1];
  }
}

/* This would be the function if you just want the output to be undefined
   if the array is empty. No if statement necessary.
function getLast( array ) {
    return array[array.length - 1];
}*/

//create array variables. not necessary but I wanted to show different ways of testing
let arrayTest = [1, 2, 3, 4];
let arrayTestEmpty = [];
console.log('6. getLast with elements in array - should say "4"', getLast(arrayTest));
console.log('6. getLast with empty array - should say "undefined"', getLast(arrayTestEmpty));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  //check each element in the array
  for (let i = 0; i < array.length; i++) {
    //if there is a match, immediately return true
    if (array[i] === value) {
      return true;
    }
  }
  /* if we've reached this point, every element has been checked and no match
  is found, so we return false */
  return false;
}

let findArray = [5,6,7,8];
console.log('7. find Test - should return true', find(6, findArray));
console.log('7. find Test - should return false', find(9, findArray));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  //compare the first array element to the letter given
  if (string[0] === letter) {
    return true;
  }
  else {
    return false;
  }
}
console.log( '8. isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( '8. isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    //keep increasing sum total with array elements
    sum = array[i] + sum;
  }
  return sum;
}
console.log('9. sumAll - should say 130', sumAll([100, 20, 1, 4, 5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

//
function positiveNumbers(array) {
  //create a new array
  let newArray = [];
  //loop through each array element
  for (let i = 0; i < array.length; i++) {
    //add only positive numbers to the new array
    if (array[i] > 0) {
      newArray.push(array[i]);
    }
  }
  //return the new Array
  return newArray;
}

console.log('10. positiveNumbers - should say [100, 4, 5]', positiveNumbers([100, -20, 0, 4, -10, 5]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//  Create a function that takes an array of numbers and return
//  both the minimum and maximum numbers, in that order.
//  Source: https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
  //transform and sort the array in ascending order
	arr.sort(function(a, b){return a - b});
  //create a new array to only contain the first and last elements
	let newArray = [arr[0], arr[arr.length-1]];
  //return the new array
	return newArray;
}

console.log('11. minMax - should say [1, 5]', minMax([4, 1, 2, 5, 3]));
