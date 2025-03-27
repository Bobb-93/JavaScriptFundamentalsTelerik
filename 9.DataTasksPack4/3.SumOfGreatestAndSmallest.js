let input = [
    '1',
    '2',
    '3',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let a = +gets();
let b = +gets();
let c = +gets();

let min = Math.min(a, b, c);
let max = Math.max(a, b, c);

let sum = min + max;

print(sum);
