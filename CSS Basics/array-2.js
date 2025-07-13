// 🚀 STAGE 3: UNDERSTANDING MUTABILITY AND COPYING

// Q11. Create a shallow copy of an array using slice() and spread operator [...arr].
// 👉 Purpose: Learn how to safely copy arrays and avoid unwanted mutations.
const array = [10, 3, 10, 20, 40, 50, 54, 32]
const portation = array.slice();
const deepCopy = [...array]




// Q12. Modify the original array and see if the copy also changes.
// 👉 Purpose: Deepen understanding of reference vs value behavior.
array.unshift(201)
array.push(232)

// console.log("Slice ", portation)
// console.log("Spread ", deepCopy)

// Q13. Use splice() to insert '🔥' at index 2 and remove 1 item from index 3.
// 👉 Purpose: Learn how to manipulate array content (insert, delete, replace).
const numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 0, "🔥")
numbers.splice(4, 1)
// console.log(numbers)


// 🚀 STAGE 4: SORTING, SEARCHING, AND TRANSFORMING

// Q14. Sort an array of strings alphabetically and an array of numbers in ascending/descending.
// 👉 Purpose: Understand default behavior of sort() and how to customize it using a compare function.
const heros = ["Iron Man", "Hulk","Thor", 'Black widow', "captain America", "Archer"]
heros.sort();
const nums = [5, 3, 1, 6, 75, 45, 23, 32, 67, 76]
const sorted = [...nums].sort((a, b) => b - a)
// console.log(sorted)
// console.log(heros)


// Q15. Reverse an array manually (without using reverse()).
// 👉 Purpose: Reinforce logic thinking using loops.
const reversedArray = []
for(let i = nums.length-1; i>=0; i--){
    reversedArray.push(nums[i])
}

// console.log(reversedArray)

// Q16. Remove duplicates from an array using Set.
// 👉 Purpose: Learn about Sets and unique-value scenarios.

// Q17. Count how many times each element appears in an array (frequency counter).
// 👉 Purpose: Explore object/Map usage for frequency problems.


// 🚀 STAGE 5: DEEP USAGE AND TRICKS

// Q18. Merge multiple arrays using concat() and spread operator.
// 👉 Purpose: Understand different merging strategies and their pros/cons.

// Q19. Flatten a nested array up to 2 levels: [1, [2, [3, 4]], 5] => [1, 2, 3, 4, 5]
// 👉 Purpose: Explore flat(), recursion and real-world transformations.

// Q20. Create a function to chunk an array into smaller arrays of size 2.
// 👉 Purpose: Useful for pagination, UI grids, and layout patterns.

// Q21. Use reduce() to group an array of users by country.
// 👉 Purpose: Learn grouping patterns used in dashboards and analytics.


// 🚀 STAGE 6: CREATIVE AND REAL-WORLD SCENARIOS

// Q22. Reverse the sentence: "Learn JavaScript Arrays Today" => "Today Arrays JavaScript Learn"
// 👉 Purpose: Apply split(), reverse(), join() — commonly used in formatting tasks.

// Q23. Convert array of key-value pairs into an object using reduce().
// 👉 Purpose: Connect array + object logic — often used in APIs and data parsing.

// Q24. Create a custom implementation of map() — your ownMap().
// 👉 Purpose: Understand how higher-order functions work internally.

// Q25. Implement debounce using an array to store user typing history (bonus challenge).
// 👉 Purpose: Learn how arrays can be used in throttling/debouncing scenarios.


// 🚀 STAGE 7: VISUAL & UI LEVEL THINKING (Great for building apps)

// Q26. Given an array of colors, create a UI list (ul > li) for each color.
// 👉 Purpose: Practice DOM + array usage together for dynamic frontend rendering.

// Q27. Given an array of todo items (objects), render completed and pending separately.
// 👉 Purpose: Learn filtering + real project-based use of arrays.


// 🚀 STAGE 8: DSA-ORIENTED LOGIC BUILDER QUESTIONS

// Q28. Find the second largest number in an array without sorting it.
// 👉 Purpose: Sharpens your logic to solve interview-style questions.

// Q29. Rotate array by k positions to the right. [1,2,3,4,5], k=2 => [4,5,1,2,3]
// 👉 Purpose: Improves your mastery over indexing, slicing, and rotation tricks.

// Q30. Find all pairs in the array whose sum is equal to a given target.
// 👉 Purpose: Pattern used in 2-sum, interviews, and real app logic.

