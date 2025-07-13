// ✅ Task 1: Reverse a String
// Write a function that takes a string and returns it reversed.
// Example: "hello" → "olleh"

// my logic
const reverseString = (str) => {
    let newStr = ''; //forgot to init empty string

    for(let i = str.length; i>=0; i--){
        newStr += str.charAt(i)
    }

    return newStr
}

const newStr = reverseString("hello")
console.log(newStr)

//chatGPT:-
// const reverse = (str) => str.split("").reverse().join("");


//reverse Array
const reverseArray = (number) => {
    const newArr = []

    for(let i = number.length-1; i>=0 ; i--){
        newArr.push(number[i]);
    }

    return newArr
}


const newArr = reverseArray([1,4, 5, 6, 7,8])
// console.log(newArr)

const revrse = (arr) => arr.reverse()

const reverseArray1 = revrse([1,4, 5, 6, 7,8])
console.log(reverseArray1)

// ✅ Task 2: Count Vowels in a String
// Write a function that counts how many vowels are in a given string.
// Hint: Use .includes() and a loop or regex.


// ✅ Task 3: FizzBuzz Classic
// Print numbers from 1 to 100.
// For multiples of 3, print "Fizz"; for 5, print "Buzz"; for both, print "FizzBuzz".


// ✅ Task 4: Check if a Number is Prime
// Write a function that checks whether a number is a prime number or not.


// ✅ Task 5: Palindrome Checker
// Write a function that checks if a given string is a palindrome.
// A palindrome is a word that reads the same backward as forward.
// Example: "racecar", "madam"



// ✅ Task 6: Capitalize First Letter of Each Word
// Convert a string like "i am learning js" → "I Am Learning Js"


// ✅ Task 7: Find the Max and Min in an Array
// Write a function that takes an array of numbers and returns both max and min values.


// ✅ Task 8: Simple Calculator
// Build a calculator function that accepts two numbers and an operator (+, -, *, /)


// ✅ Task 9: Find Duplicates in an Array
// Write a function that returns duplicate values from an array.


// ✅ Task 10: Random Password Generator
// Generate a random password of 8 characters using letters, numbers, and symbols.


// ✅ Task 11: Sort Numbers Without Using sort()
// Sort an array of numbers manually without using .sort()
// Hint: Try bubble sort or selection sort.


// ✅ Task 12: Countdown Timer
// Create a countdown from 10 to 0 using setTimeout or setInterval.


// ✅ Task 13: Object Destructuring Practice
// Create an object with your details and use destructuring to print your name and age.


// ✅ Task 14: Array Map Challenge
// Take an array of numbers and return a new array with each number squared.


// ✅ Task 15: Build a To-Do List (Console Version)
// Create an array to store tasks.
// Allow addTask(), removeTask(), and listTasks() functions to interact with it.

