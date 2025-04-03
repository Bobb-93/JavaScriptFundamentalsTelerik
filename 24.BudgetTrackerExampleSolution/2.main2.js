// Data Types and Variables
let userIncome = 1200; // Number type
let userExpense = 300.50; // Floating point number
let hasSavings = true; // Boolean type
 
// Variables for additional arithmetic operations
let additionalIncome = 600;
let additionalExpense = 150;
 
// Using arithmetic operators
let totalIncome = userIncome + additionalIncome; // Addition of incomes
let totalExpense = userExpense + additionalExpense; // Addition of expenses
let balance = totalIncome - totalExpense; // Calculation of balance

// Conditional Statements
// Check if balance is sufficient for a savings goal
let savingsGoal = 500;
if (balance >= savingsGoal) {
    console.log("Congratulations! You've met your savings goal.");
} else {
    console.log("You need to save more to meet your savings goal.");
}
 
// Determine if the user can afford a new phone
let costOfNewPhone = 600;
if (balance >= costOfNewPhone) {
    console.log("You can buy the phone!");
} else {
    console.log("You need to save more to buy the phone.");
}
 
// User rating check with switch statement
let userRating = 3; // Example rating
switch (userRating) {
    case 5:
        console.log("Excellent");
        break;
    case 4:
        console.log("Good");
        break;
    case 3:
        console.log("Average");
        break;
    case 2:
        console.log("Below Average");
        break;
    case 1:
        console.log("Poor");
        break;
    default:
        console.log("Invalid rating");
}

// Loops
// Simulate adding fixed daily income and expenses over a set number of days
let dailyIncome = 200;
let dailyExpense = 50;
let simulatedDays = 5;
let simulatedTotalIncome = 0;
let simulatedTotalExpense = 0;
 
for (let day = 1; day <= simulatedDays; day++) {
    simulatedTotalIncome += dailyIncome;
    simulatedTotalExpense += dailyExpense;
}
 
let simulatedBalance = simulatedTotalIncome - simulatedTotalExpense;
console.log(`Simulated Total Income over ${simulatedDays} days: $${simulatedTotalIncome}`);
console.log(`Simulated Total Expenses over ${simulatedDays} days: $${simulatedTotalExpense}`);
console.log(`Simulated Balance: ${simulatedBalance}`);

// Arrays
// Using arrays to store and manage multiple incomes and expenses
let incomes = [1200, 600, 300]; // Updated incomes with array
let expenses = [800, 200, 150]; // Updated expenses with array
 
totalIncome = 0; // Reset for recalculating with arrays
totalExpense = 0;
 
// Recalculate total income and expenses using arrays
for (let i = 0; i < incomes.length; i++) {
    totalIncome += incomes[i];
}
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}
 
// Recalculate balance
balance = totalIncome - totalExpense;
 
// Final Output
console.log(`Total Income: \$\${totalIncome}`);
console.log(`Total Expenses: \$\${totalExpense}`);
console.log(`Balance: \$\${balance}`);
 
// Check against savings goal again after recalculating with arrays
if (balance >= savingsGoal) {
    console.log("Congratulations! You've met your savings goal with the recalculated balance.");
} else {
    console.log("You need to save more to meet your savings goal with the recalculated balance.");
}