// Demonstrating variable declaration and good naming practices
let userIncome = 1200; // Number type
let userExpense = 300.50; // Floating point number
let hasSavings = true; // Boolean type
 
// Demonstrating arithmetic operators and parsing
let sum = userIncome + userExpense; // Addition
let difference = userIncome - userExpense; // Subtraction
let division = userIncome / 2; // Division
let multiplication = userExpense * 2; // Multiplication
 
// Parsing
let stringNumber = "150";
let parsedNumber = parseInt(stringNumber); // Parsing string to integer
 
// Using console.log()
console.log(`Sum: ${sum}, Difference: ${difference}, Division: ${division}, Multiplication: ${multiplication}`);
console.log();
console.log(`Parsed Number: ${parsedNumber}`);


// Calculate percentages
let savingsPercentage = ((userIncome - userExpense) / userIncome) * 100;
let expensePercentage = (userExpense / userIncome) * 100;

// Using console.log() to display results
console.log(`Savings Percentage: ${savingsPercentage.toFixed(2)}%`);
console.log(`Expense Percentage: ${expensePercentage.toFixed(2)}%`);

/*
Experiment with different types of arithmetic operations to provide more detailed financial insights.
For example, calculate the percentage of income saved or the percentage of expenses relative to income.
This encourages you to apply arithmetic operators creatively, using only variables and basic data types.
*/