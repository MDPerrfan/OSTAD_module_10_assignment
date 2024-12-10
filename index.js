// 1. Function to calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}

// 2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Function to find the smallest number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4. Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5. Function to sort an array in descending order
function sortArrayDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (!str) return "";
    return str[0].toLowerCase() + str.slice(1);
}

// 7. Function to find the average of an array of numbers
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

// 8. Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Calling the functions
console.log("1. Difference:", calculateDifference(10, 5));
console.log("2. Is Odd:", isOdd(7));
console.log("3. Minimum number:", findMin([10, 5, 3, 8]));
console.log("4. Even numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("5. Sorted array (descending):", sortArrayDescending([10, 3, 5, 11]));
console.log("6. Lowercase first letter:", lowercaseFirstLetter("Hello"));
console.log("7. Average:", findAverage([1, 2, 3, 4, 5]));
console.log("8. Is Leap Year (2024):", isLeapYear(2024));
console.log("8. Is Leap Year (2023):", isLeapYear(2023));