
console.log("LOOP PRACTICE");

// Q1: Print numbers from 1 to 10
console.log("Q1:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Q2: Sum of first N natural numbers
let n = 5;
let sum = 0;
let i = 1;
while (i <= n) {
    sum += i;
    i++;
}
console.log("Q2: Sum = " + sum);

// Q3: Multiplication table
let tableNumber = 5;
console.log("Q3: Multiplication table of " + tableNumber);
for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// Q4: Factorial calculation
let factorialNumber = 5;
let factorial = 1;
let j = factorialNumber;
while (j > 1) {
    factorial *= j;
    j--;
}
console.log("Q4: Factorial = " + factorial);

// Q5: Reverse counting from 10 to 1
console.log("Q5:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Q6: Even numbers up to N
let limit = 20;
let even = 2;
console.log("Q6: Even numbers");
do {
    if (even <= limit) {
        console.log(even);
    }
    even += 2;
} while (even <= limit);

// Q7: Sum of digits
let digitNumber = 1234;
let digitSum = 0;
while (digitNumber > 0) {
    digitSum += digitNumber % 10;
    digitNumber = Math.floor(digitNumber / 10);
}
console.log("Q7: Sum of digits = " + digitSum);

// Q8: First 10 terms of Fibonacci series
let first = 0;
let second = 1;
console.log("Q8: Fibonacci series");
for (let i = 1; i <= 10; i++) {
    console.log(first);
    let next = first + second;
    first = second;
    second = next;
}

// Q9: Guessing game
let correctNumber = 7;
let guess = 0;
do {
    guess++;
    console.log("Q9: Guess = " + guess);
} while (guess !== correctNumber);
console.log("Q9: Correct guess!");

// Q10: Check prime number
let primeNumber = 7;
let isPrime = primeNumber > 1;
for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("Q10: Prime number");
} else {
    console.log("Q10: Not a prime number");
}
