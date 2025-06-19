let input = [
    '2,1,3,4',
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(",").map(Number);
let arrayLength = array.length;

let N = +gets();

for (let i = 0; i < N; i++) {
    let firstElement = array.shift();

    array.push(firstElement);
    
}

print(array.join());