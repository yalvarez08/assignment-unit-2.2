// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We made a variable called name and declared it as the string 'Dane'.
// Then we created conditional statement to determine if name is true (exact match)
// to 'Mary'. If so, the console log output will be 'Hi, Mary!' Otherwise, if the
// condition is actually false (which it is because we've already established our 
// variable name is set to 'Dane'), the console log output will give us 'How do you
// do?'  After running this, the console log value is 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We made a variable called secret, it has no declaration. We made another variable
// called code and set it to '123'. We then created a conditional statement to check
// if code exactly matches the value '123', then this will set the variable secret
// to 'super' and reset the variable code by multiplying it's value by 2 (123*2).
// Secondly, it will check if the code value is greater than 250, and if so then the
// variable secret will be set to 'duper'. Code exactly matches 123, so console.log's
// value will return as secret = 'super' and code = 123 * 2 ==> 246.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We made a variable called isStudent and set it to boolean value of true; a variable
// called age and set it to the number 34; a variable called zip and set it to the 
// number 55407. Then created a condition to determine if isStudent is exactly true AND 
// if the zip value is greater than 80000; keep in mind, in order for this condition
// to be true, BOTH of these criteria must be met. If correct/true, the console.log  
// will display 'You're a student on the West Coast!'. Following that is an else if statement
// which runs if the first condition is false; this one states in the event that isStudent is 
// of equal value to false OR the age value is less than 
// 30, then the console.log will display 'What are your hobbies?' Next is another else if
// statement that states in the event that isStudent is of equal value to true, the console.log  
// will output 'Welcome to Prime!' Last is an else statement which applies when all of the above
// conditions aren't met, this console.log value will be 'How about the weather?'
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - instructions indicate colorOne is 'blue' and colorTwo is 'red'. These 
// are mixed up. 
// Should be >> colorOne = 'blue' and colorTwo = 'red'. The variable colorTwo is 
// missing in condition statement. Should be >> colorOne , colorTwo = 'purple'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;


if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'


// FIX - Both temp and time are supposed to be variables. Time is incorrectly 
// called as a constant; this should be changed to >> let time = 4;
/*
let temp = 40;
const time = 4;

// FIX - Instructions want us to check if temp is higher than 39 AND time is >= 4.
// Logical operator || should not be used here. Instead, it needs to be changed to
// the and (&&) operator. It should look like >> if (temp > 39 && time >= 4). Both 
// are true, so console.log value will show 'throw away the food!'

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.


// FIX - minAge should not be written as a const. Instructions indicate it is a variable;
// should be changed to >> let minAge = 21;
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

