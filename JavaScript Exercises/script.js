/*  JavaScript Exercises
Part 1: Understanding Type Coercion
Task: Find the answers for the following operations. Fill in the blanks with the expected output   */
console.log("5" + 7); // Answer: ___57____
console.log(Boolean(0)); // Answer: __false_____
console.log("10" - "2"); // Answer: ___8____
console.log("5" == 5); // Answer: ____true___
console.log("5" === 5); // Answer: ___false____
console.log(Boolean("")); // Answer: ___false____
console.log("5" + true); // Answer: ____5true___
console.log("5" * 2); // Answer: ___10____
console.log(0 == false); // Answer: ____true___
console.log(Boolean(NaN)); // Answer: ___false____

/* Part 2: Conditional Checks
Task: Write code for the following scenarios. You can choose to complete any two of the three tasks.   
1.	Check if a number is positive, negative, or zero
2.	Check if a person is eligible to vote (age 18 or older).
3.	Check if a temperature is above, below, or equal to freezing point (0°C) */
//1 positive, negative, or zero
let number = 5; // Example number
if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}
//2 eligible to vote or not
let age = 23;
if (age >= 18) {
  console.log("The person is eligible to vote");
} else {
  console.log("The person is not eligible to vote");
}

/*Part 3: Loop Exercises
Task 1: Factorial of a Number
Note: The factorial of a non-negative integer n is the product of all positive integers less than or equal to n (e.g., 5! = 5 × 4 × 3 × 2 × 1 = 120).
Task 2: Fibonacci Sequence
Note: The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two (e.g., 0, 1, 1, 2, 3, 5, 8, ...).
Task 3: Find Prime Numbers
Note: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
//Task 1: Factorial of a Number
let Numberr = 6;
let fact = 1;
for (let i = 1; i <= Numberr; i++) {
  fact *= i;
}
console.log(`The factorial of ${Numberr} is ${fact}`);
// Task 2: Fibonacci Sequence
let fibonacciNum = 10; // how many numbers of the Fibonacci sequence to generate
let fibonacciSequence = [0, 1];
for (let i = 2; i < fibonacciNum; i++) {
  fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
}
console.log(`Fibonacci sequence up to ${fibonacciNum} :`, fibonacciSequence);
// Task 3: Find Prime Numbers
let primeNumbers = [];
let UpTo = 34; // prime numbers up to this limit

for (let num = 2; num <= UpTo; num++) {
  let numOfdivisor = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      numOfdivisor++;
    }
  }
  if (numOfdivisor === 2) {
    primeNumbers.push(num);
  }
}

console.log(`Prime numbers up to ${UpTo}`, primeNumbers);
/*Part 4: Function Tasks
Task 1: Calculate Average of Two Numbers

Write a function named average that takes two numbers and returns their average. Include exception handling to ensure the inputs are valid numbers.
Task 2: Calculate Factorial
Write an arrow function named factorial that calculates the factorial of a given number. Include exception handling to ensure the input is a non-negative integer.
Task 3: Find Prime Numbers
Write a function expression named isPrime that checks if a number is prime. Include exception handling to ensure the input is a positive integer.
*/
// Task 1--  Average of Two Numbers
function average(num1, num2) {
  try {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Both numbers must have number type");
    }
    return (num1 + num2) / 2;
  } catch (e) {
    console.error(e.message);
  }
}
let num1 = 8;
let num2 = 6;
let avg = average(num1, num2);
console.log(`Average of ${num1} and ${num2} is: ${avg}`);
let num3 = "10";
let num4 = 5;
let avg2 = average(num3, num4);
console.log(`Average of ${num3} and ${num4} is: ${avg2}`);
// Task 2 -- Factorial
const factorial = (n) => {
  try {
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
      throw new Error("the number must be a non-negative integer");
    }
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  } catch (e) {
    console.error(e.message);
  }
};
let n1 = 6;
let Result = factorial(n1);
console.log(`the factorial of ${n1} is: ${Result}`);
// Task 3: Find Prime Numbers
const isPrime = function (num) {
  try {
    if (typeof num !== "number" || num <= 1 || !Number.isInteger(num)) {
      throw new Error("the number must be a positive integer greater than 1");
    }
    let numOfdivisor = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        numOfdivisor++;
      }
    }
    if (numOfdivisor === 2) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error(e.message);
  }
};
let numToCheck = 9;
console.log(`${numToCheck} is prime: ${isPrime(numToCheck)}`);
/*
Part 5: Array Operations
Task: Create an array of numbers and perform the following operations:
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Use forEach() to print each number.
console.log("Using forEach to print each number:");
arr.forEach((num) => {
  console.log(num);
});
// 2. Use map() to create a new array with each number squared.
let arrSquared = arr.map((num) => num * num);
console.log("Squared Array:", arrSquared);
// 3. Use filter() to create a new array containing only odd numbers.
let oddNumbers = arr.filter((num) => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);
// 4. Use reduce() to find the sum of the numbers.
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log("Sum = ", sum);
// 5. Use find() to get the first number greater than 10.
let first = arr.find((num) => num > 10);
if (first === undefined) {
  console.log("there is no number greater than 10 ");
} else {
  console.log("First number greater than 10:", first);
}

// 6. Use findIndex() to get the index of the first even number.
let Index = arr.findIndex((num) => num % 2 === 0);
console.log("Index of the first even number:", Index);
// 7. Use includes() to check if a specific number is present.
let specificNum = 5;
let isPresent = arr.includes(specificNum);
console.log(`Is ${specificNum} present in the array?`, isPresent);
// 8. Use slice() to get a subarray of the first three elements.
let subArray = arr.slice(0, 3);
console.log("Subarray of the first three elements:", subArray);
// 9. Use splice() to remove the last number and add a new number.
let removed = arr.splice(arr.length - 1, 1, 11); // Remove last number and add 11
console.log("Array after removing the last number and adding 11:", arr);
// 10. Use sort() to sort the numbers in ascending order.
let sortedArray = arr.sort((a, b) => a - b);
console.log("Sorted Array:", sortedArray);
// 11. Use join() to create a string of all numbers separated by commas.
let joinedNumbers = arr.join(", ");
console.log("Joined Numbers:", joinedNumbers);
