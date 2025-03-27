let input = [
    '-2', 
    '0',
    '3',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let inputOne = +gets();
let inputTwo = +gets();
let inputThree = +gets();

let sum = inputOne + inputTwo + inputThree;

print(sum);
