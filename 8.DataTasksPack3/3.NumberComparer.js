let input = [
    '5',
    '6',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let numberOne = +gets();
let numberTwo = +gets();

print(Math.max(numberOne, numberTwo));
