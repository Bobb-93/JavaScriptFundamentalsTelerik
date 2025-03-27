let input = [
    'Peter', // first line of input
    '25',    // second line of input
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let name = gets(); // Peter
let age = +gets(); // 25

console.log(name, age);
