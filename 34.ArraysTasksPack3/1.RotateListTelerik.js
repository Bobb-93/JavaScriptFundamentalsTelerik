let input = [
    '2,1,3,4',
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the input list of numbers as a string and split it into an array of strings by the comma separator.
let arr = gets().split(',');
 
// Read the number of times the array should be rotated and use the modulo operator to handle cases where this number is greater than the array length.
let num = gets() % arr.length;
 
// Declare an empty array to store the rotated array.
let rotatedArr = [];
 
// The array is sliced from 'num' to the end, and this slice is concatenated with the slice from the start of the array to 'num'.
// This effectively rotates the array. The result is then joined back into a string with commas between elements.
rotatedArr = arr.slice(num).concat(arr.slice(0, num)).join(',');
 
// Print the rotated array as a string with elements separated by commas.
console.log(rotatedArr);