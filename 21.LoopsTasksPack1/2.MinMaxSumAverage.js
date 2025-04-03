let input = [
    // '3',
    // '2',
    // '5',
    // '1',
    '3',
    '2',
    '-1',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let totalSum = 0;
let min = Infinity;
let max = -Infinity;

for (let i = 0; i < N; i++) {
    const number = parseFloat(gets());
    
    totalSum += number;
    if(number < min){
        min = number;
    }

    if (number > max) {
        max = number;
    }
}

let average = totalSum / N;

console.log(`min=${min.toFixed(2)}`);
console.log(`max=${max.toFixed(2)}`);
console.log(`sum=${totalSum.toFixed(2)}`);
console.log(`avg=${average.toFixed(2)}`);
