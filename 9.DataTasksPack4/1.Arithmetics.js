let input = [
    // '2',
    // '2',
    '3',
    '1',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let a = +gets();
let b = +gets();

print(a+b);
print(a-b);
print(a*b);
print(a%b);
print(Math.pow(a,b));