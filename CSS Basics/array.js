// 🚀 STAGE 1: CORE FUNDAMENTALS (Explore Array Basics, Access, Modify)

// Q1. Create an array of 5 of your favorite YouTubers and log the third one.
// 👉 Purpose: Practice creating arrays and accessing elements using indexes.

const arr = ["Hithesh", "Sandeep", "Zakir", "Piyush", "Ranveer"]
console.log(arr[2])

// Q2. Add a new name at the end using push(), and one at the beginning using unshift().
// 👉 Purpose: Understand how push/unshift modify the array and affect indexes.

arr.push("Devansh")
arr.unshift("Elon")

// Q3. Remove the first and last element using shift() and pop().
// 👉 Purpose: Learn how to remove items from both ends of an array.
arr.shift()
arr.pop()
// Q4. Find out the type of array using typeof and Array.isArray().
// 👉 Purpose: Understand the type system and how JS identifies arrays.

console.log(typeof arr)
console.log(Array.isArray(arr))


// 🚀 STAGE 2: ARRAY METHODS EXPLORATION (map, filter, reduce, find, etc.)

// Q5. Given an array of numbers, return a new array with each number squared using map().
// 👉 Purpose: Understand how map() transforms each element in a new array.

const numbers = [2,4,6,7,9];
const sqrnum = numbers.map((e)=> e*e)
console.log(sqrnum)

// Q6. Use filter() to get only positive numbers from [-2, 3, -1, 4, 0, 5].
// 👉 Purpose: Learn how to conditionally extract values from an array.

const nums = [-2, 3, -1, 4, 0, 5]
const newArr = nums.filter((e)=>  e > 0)
console.log(newArr)

// Q7. Calculate the total score from an array of numbers using reduce().
// 👉 Purpose: Learn how reduce() helps in aggregation operations.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0
);

console.log(sumWithInitial);

// Q8. Use find() to get the first number greater than 10 from the array.
// 👉 Purpose: Learn how to search for specific criteria efficiently.
const array2 = [1, 2, 30, 40, 12];

console.log(array2.find((e) => e > 10))

// Q9. Use some() to check if there's any negative number in the array.
// 👉 Purpose: Explore condition checking using built-in helpers.

console.log(nums.some((e) => e < 0))

// Q10. Use every() to check if all numbers are divisible by 2.
// 👉 Purpose: Understand how to validate all elements with a single condition.
const divisible = [2, 4, 6, 8]
console.log(divisible.every((e) => e / 2))

