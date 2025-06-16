let input = [
    '4.584',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// let n = +gets();

// let reversedNumber = n.toString().split("").reverse().join("");

let n = gets();

let reversedNumber = n.split("").reverse().join("");

print(reversedNumber);
