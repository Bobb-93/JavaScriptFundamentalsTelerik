// Initialize arrays to store multiple incomes and expenses
let incomes = [1200, 600, 300]; // Example incomes
let expenses = [800, 200, 150]; // Example expenses
 
// Declare variables for income and expenses
let totalIncome = 0;
let totalExpense = 0;
 
// Loop over the incomes array to calculate total income
for (let i = 0; i < incomes.length; i++) {
    totalIncome += incomes[i];
}
 
// Loop over the expenses array to calculate total expenses
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}
 
// Declare a balance variable
let balance = totalIncome - totalExpense;
 
// Loggs some information to the user
console.log(`Total Income: $${totalIncome}`);
console.log(`Total Expenses: $${totalExpense}`);
console.log(`Balance: $${balance}`);
 
/*
Add a feature that allows the user to "delete" the last transaction entered into either
 the income or expense arrays, mimicking the action of undoing a transaction. This would 
 involve manipulating array lengths and indexes, giving you hands-on experience with more complex array operations.
*/