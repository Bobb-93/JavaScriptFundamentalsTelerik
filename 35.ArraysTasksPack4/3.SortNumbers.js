let input = [
    '2, 3, 1, 5, 6',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(', ').map(Number);
let arrayLength = array.length;

let sortedArray = array.sort((a,b) => b-a);

print(sortedArray.join(", "));