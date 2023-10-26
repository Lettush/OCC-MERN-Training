// Objective: Practice using ES6 features to enhance your JavaScript code.

// Instructions:
// 1. Create an HTML file with a heading that says "ES6 Features".
// 2. Create a JavaScript file and link it to the HTML file.
// 3. In the JavaScript file, you will find comments describing different tasks that need to be performed using ES6 features. Your task is to write the code to complete these tasks.
// 4. The tasks to be completed are as follows:
//    a. Use arrow functions to calculate the square of a given number and log the result to the console.
//    b. Use template literals to create a welcome message that includes the name and age of a person.
//    c. Use destructuring to extract the first and last name from a person object and log them to the console.
//    d. Use the spread operator to merge two arrays into a single array.
//    e. Use default parameters to create a function that calculates the area of a rectangle. If no arguments are provided, assume a default length and width of 1.
//    f. Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

// Note: Read the comments carefully to understand the requirements for each task. Use the appropriate ES6 features to accomplish the given task.

// Good luck!

// Your code implementation goes here:


// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const square = (num) => {

    let squaredNumber = num ** 2;
    console.log(squaredNumber);
}

square(parseInt(prompt("Give me a number: ")));


// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
let userName = prompt("What is your name? ");
let age = parseInt(prompt("Tell me your age: "));

console.log(`Hi ${userName}. You are ${age} years old.`);


// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
let person = {
    firstName: "Migs",
    lastName: "Leonida",
    age:26,
};

const {firstName} = person;
console.log(firstName);


// Task 4: Use the spread operator to merge two arrays into a single array.
const rangeOne = [1, 2, 3];
const rangeTwo = [4, 5, 6];

//... : spread operator
const newArray = [...rangeOne, ...rangeTwo];

console.log(newArray);


// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
function triangleArea (width=2, height=4) {
    return (width * height) / 2;
}

console.log(triangleArea());
