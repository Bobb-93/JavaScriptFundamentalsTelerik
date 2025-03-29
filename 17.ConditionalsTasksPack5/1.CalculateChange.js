let input = [
    '1.92',
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the price and amount paid from console, and convert them to Number data type
const price = Number(gets());
const amountPaid = Number(gets());
 
// Calculate the change to be returned in stotinki (100 stotinki per 1 lev)
let change = Math.round((amountPaid - price) * 100); // Round the value of change to avoid precision errors
 
// Calculate the number of each denomination required for giving the change
let oneLev = 0;
let fiftyStotinki = 0;
let twentyStotinki = 0;
let tenStotinki = 0;
let fiveStotinki = 0;
let twoStotinki = 0;
let oneStotinka = 0;
 
if (change >= 100) { // If there is at least 1 lev worth of change
    oneLev = Math.floor(change / 100); // Divide the change by 100 to get the number of leva
    change %= 100; // Take the modulus of change with 100 to get the remaining change in stotinki
}
if (change >= 50) { // If there is at least 50 stotinki worth of change
    fiftyStotinki = Math.floor(change / 50); // Divide the change by 50 to get the number of 50 stotinki coins
    change %= 50; // Take the modulus of change with 50 to get the remaining change in stotinki
}
if (change >= 20) { // If there is at least 20 stotinki worth of change
    twentyStotinki = Math.floor(change / 20); // Divide the change by 20 to get the number of 20 stotinki coins
    change %= 20; // Take the modulus of change with 20 to get the remaining change in stotinki
}
if (change >= 10) { // If there is at least 10 stotinki worth of change
    tenStotinki = Math.floor(change / 10); // Divide the change by 10 to get the number of 10 stotinki coins
    change %= 10; // Take the modulus of change with 10 to get the remaining change in stotinki
}
if (change >= 5) { // If there is at least 5 stotinki worth of change
    fiveStotinki = Math.floor(change / 5); // Divide the change by 5 to get the number of 5 stotinki coins
    change %= 5; // Take the modulus of change with 5 to get the remaining change in stotinki
}
if (change >= 2) { // If there is at least 2 stotinki worth of change
    twoStotinki = Math.floor(change / 2); // Divide the change by 2 to get the number of 2 stotinki coins
    change %= 2; // Take the modulus of change with 2 to get the remaining change in stotinki
}
if (change === 1) { // If there is exactly 1 stotinka worth of change
    oneStotinka = 1;
}
 
// Output the required denominations on a new line, ordered from highest to lowest
if (oneLev > 0) {
    console.log(oneLev + " x 1 lev");
}
if (fiftyStotinki > 0) {
    console.log(fiftyStotinki + " x 50 stotinki");
}
if (twentyStotinki > 0) {
    console.log(twentyStotinki + " x 20 stotinki");
}
if (tenStotinki > 0) {
    console.log(tenStotinki + " x 10 stotinki");
}
if (fiveStotinki > 0) {
    console.log(fiveStotinki + " x 5 stotinki");
}
if (twoStotinki > 0) {
    console.log(twoStotinki + " x 2 stotinki");
}
if (oneStotinka > 0) {
    console.log(oneStotinka + " x 1 stotinka");
}