let input = [
    '2', 
    '2',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let inputOne = +gets();
let inputTwo = +gets();
 
// Process the data
let output = inputOne + inputTwo;
 
// Produce an output the system can then check
print(output);