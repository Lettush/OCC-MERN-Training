// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

function isEven(num) {
    return num % 2 == 0 ? true : false;
}

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.

for (i = 0; i <= 10; i++) {
    let isItEven = isEven(i);
    console.log(i + ": " + isItEven);
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.

function multiply(num1, num2) {
    return num1 * num2;
}

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.

while (true) {

    //checking validity of user input
    let num1 = prompt("Enter the first number to be multiplied: ");
    if (num1 === null) {
        alert("Aw! You canceled the operation.")
        break;
    } else if (isNaN(num1)) {
        alert("Oops! Only numbers are allowed.")
        break;
    } else if (num1.length == 0) {
        alert("Oops! A value is needed for this to work.")
        break;
    }

    num1 = parseFloat(num1);

    if (num1 < 0) {
        alert("Oops! Only positive numbers are allowed.")
        break;
    }

    //if num1 is valid, this validity check for num2 will be executed
    let num2 = prompt("Enter the second number to be multiplied: ");
    if (num2 === null) {
        alert("Aw! You canceled the operation.")
        break;
    } else if (isNaN(num2)) {
        alert("Oops! Only numbers are allowed.")
        break;
    } else if (num2.length == 0) {
        alert("Oops! A value is needed for this to work.")
        break;
    }

    num2 = parseFloat(num2);

    if (num2 < 0) {
        alert("Oops! Only positive numbers are allowed.")
        break;
    }

    //if both values are valid, this will be executed
    let product = multiply(num1, num2);
    console.log(product);

}



// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.

//split converts string to an array
//reverse modifies an array to get reversed
//join joins all array elements and convert it string
function reverseString(word = "string") {
    return word.split('').reverse().join('');
}

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.

console.log(reverseString("hello"));

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.

const countVowels = (word = "string") => {
    let vowels = word.match(/[aeiuo]/gi).length; //using match includes capital letters
    return vowels;

}
// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log("Number of vowels in the word 'Javascript': " + countVowels("Javascript"));

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.

const findMax = (range = []) => {
    return range.sort((a, b) => a - b).pop();
}

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
let array = [4, 9, 2, 7, 5];
console.log("The maximum number of the range " + array + ": " + findMax(array));

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.

const calculateFactorial = (num) => {

    let factorial = num;

    for (i = 1; i < num; i++) {
        factorial = factorial * i;
    }

    return factorial;

}

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.

console.log("Factorial of " + 5 + ": " + calculateFactorial(5));

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.

const isPalindrome = (word = "string") => {

    let toArray = word.toUpperCase().split(''); //becomes an array
    let numOfLetters = toArray.length; //counts the number of elements in the array
    let middleLetter = numOfLetters / 2; //finds the middle letter index

    if (numOfLetters % 2 == 0) {

        let firstHalf = toArray.slice(0, middleLetter).join(''); //slice does not include the element specified the 2nd argument
        let secondHalf = toArray.slice(middleLetter).reverse().join('');

        return firstHalf == secondHalf ? true : false;
    }

    if (numOfLetters % 2 !== 0) {

        middleLetter = Math.floor(middleLetter); 

        let firstHalf = toArray.slice(0, middleLetter).join(''); //slice does not include the element specified the 2nd argument
        let secondHalf = toArray.slice(middleLetter+1).reverse().join('');

        return firstHalf == secondHalf ? true : false;
    }
}


// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.

let palindromeWord = "Level";
console.log(palindromeWord + " is a palindrome: " + isPalindrome(palindromeWord));

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

const sumArray = (range = []) => {

    let sum = 0;

    for (i = 0; i < range.length; i++) {
        sum = sum + range[i];
    }

    return sum;

}

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.

let arraySum = [1, 2, 3, 4, 5];
console.log("Sum of the array: " + sumArray(arraySum));

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.

const capitalizeFirstLetter = (word = "string") => {

    return word.charAt(0).toUpperCase() + word.slice(1);

}


// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.

console.log("Capitalization: " + capitalizeFirstLetter("javascript"));

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.

const filterEvenNumbers = (range = []) => {

    let evenNumbers = [];

    for (i = 0; i < range.length; i++) {
        let even = range[i] % 2;

        if (even == 0) {
            evenNumbers.push(range[i]);
        }

    }

    return evenNumbers;

}

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.

let arrayEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers of the array: " + filterEvenNumbers(arrayEven));