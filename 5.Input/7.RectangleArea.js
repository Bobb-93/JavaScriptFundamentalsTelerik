// Use the gets() function to read the input from the console. 
// The gets() function reads the user's input as a string. Store the resulting string values in variables inputLine1 and inputLine2.
let input = [
    '3', 
    '4',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputLine1 = gets();
let inputLine2 = gets();

// Use the Number() function to convert the strings inputLine1 and inputLine2 into numbers.
// Store the resulting number values in variables width and height.
let width = Number(inputLine1);
let height = Number(inputLine2);

// Calculate the product of the width and height variables, which represents the area of the rectangle.
let area = width * height; 

// Print the result to the console using the console.log() function.
print(area);