let input = [
    'John', 
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputOne = gets();

print(`Hello, ${inputOne}!`);
