let input = [
    '3',
    '2',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let numberOfHalfLiterBottles = +gets();
let numberOfLiterBottles = +gets();

let totalDeposit = (numberOfHalfLiterBottles * 0.1) + (numberOfLiterBottles * 0.25);

console.log(totalDeposit.toFixed(2));
