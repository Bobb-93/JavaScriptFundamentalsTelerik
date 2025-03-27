let input = [
    // '100',
    '2000',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let n = +gets();

let firstYear = n * 1.05;
let secondYear = firstYear * 1.05;
let thirdYear = secondYear * 1.05;

print(firstYear.toFixed(2));
print(secondYear.toFixed(2));
print(thirdYear.toFixed(2));
