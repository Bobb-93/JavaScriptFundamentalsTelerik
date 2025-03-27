let input = [
    // '3',
    '5',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let sum = n*(n+1)/2;

print(sum);

