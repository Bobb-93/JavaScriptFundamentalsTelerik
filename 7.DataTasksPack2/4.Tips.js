let input = [
    // '44', 
    '20',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let price = +gets();

let totalSum = price * 1.1;

print(Math.floor(totalSum));