let dailyIncome = 1250;
let dailyExpense = 958;

let totalIncome = 0;
let days = 30;

for (let i = 0; i < days; i++) {
    totalIncome += dailyIncome;
    
}

let totalExpense = 0;

for (let i = 0; i < days; i++) {
    totalExpense += dailyExpense;
    
}

let balance = totalIncome - totalExpense;

console.log(`Total income: ${totalIncome}`);
console.log(`Total expense: ${totalExpense}`);
console.log(`Balance: ${balance}`);

/* 
Create a loop that identifies the largest transaction in the set of daily transactions and logs it separately
 as the "Transaction of the Day." By doing this you will be introduced to the concept of iterating through data
  to find maximum or minimum values, a common task in data analysis.

*/