
const prompt = require("prompt-sync")();

console.log("CONDITIONAL STATEMENTS");

// Q1: Check if a number is positive, negative, or zero
let num = 5;
if (num > 0) {
    console.log("Q1: Positive number");
} else if (num < 0) {
    console.log("Q1: Negative number");
} else {
    console.log("Q1: Zero");
}

// Q2: Check even or odd
let number = 8;
if (number % 2 === 0) {
    console.log("Q2: Even number");
} else {
    console.log("Q2: Odd number");
}

// Q3: Find the largest of two numbers
let a = 15;
let b = 10;
if (a > b) {
    console.log("Q3: Largest number is " + a);
} else if (b > a) {
    console.log("Q3: Largest number is " + b);
} else {
    console.log("Q3: Both numbers are equal");
}

// Q4: Grade evaluation
let percentage = 85;
if (percentage >= 80) {
    console.log("Q4: Grade A");
} else if (percentage >= 70) {
    console.log("Q4: Grade B");
} else if (percentage >= 60) {
    console.log("Q4: Grade C");
} else if (percentage >= 50) {
    console.log("Q4: Grade D");
} else {
    console.log("Q4: Grade F");
}

// Q5: Check leap year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Q5: Leap year");
} else {
    console.log("Q5: Not a leap year");
}

// Q6: Print day using switch-case
let day = 3;
switch (day) {
    case 1: console.log("Q6: Monday"); break;
    case 2: console.log("Q6: Tuesday"); break;
    case 3: console.log("Q6: Wednesday"); break;
    case 4: console.log("Q6: Thursday"); break;
    case 5: console.log("Q6: Friday"); break;
    case 6: console.log("Q6: Saturday"); break;
    case 7: console.log("Q6: Sunday"); break;
    default: console.log("Q6: Invalid day");
}

// Q7: Simple calculator using switch-case
let n1 = 20;
let n2 = 5;
let operator = "+";
switch (operator) {
    case "+": console.log("Q7: " + (n1 + n2)); break;
    case "-": console.log("Q7: " + (n1 - n2)); break;
    case "*": console.log("Q7: " + (n1 * n2)); break;
    case "/":
        if (n2 !== 0) {
            console.log("Q7: " + (n1 / n2));
        } else {
            console.log("Q7: Cannot divide by zero");
        }
        break;
    default: console.log("Q7: Invalid operator");
}

// Q8: Check vowel or consonant
let character = "e".toLowerCase();
switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Q8: Vowel");
        break;
    default:
        if (character >= "a" && character <= "z") {
            console.log("Q8: Consonant");
        } else {
            console.log("Q8: Invalid character");
        }
}

// Q9: Traffic light system
let color = "red".toLowerCase();
switch (color) {
    case "red": console.log("Q9: Stop"); break;
    case "yellow": console.log("Q9: Wait"); break;
    case "green": console.log("Q9: Go"); break;
    default: console.log("Q9: Invalid color");
}

// Q10: Menu-driven program
let choice = 2;
let balance = 1000;
switch (choice) {
    case 1:
        console.log("Q10: Balance is " + balance);
        break;
    case 2:
        balance += 500;
        console.log("Q10: Deposit successful. Balance: " + balance);
        break;
    case 3:
        balance -= 200;
        console.log("Q10: Withdrawal successful. Balance: " + balance);
        break;
    case 4:
        console.log("Q10: Exit");
        break;
    default:
        console.log("Q10: Invalid choice");
}
