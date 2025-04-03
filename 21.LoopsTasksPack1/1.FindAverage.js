let input = [
    // '4',
    // '1',
    // '1',
    // '1',
    // '1',
    '3',
    '2.5',
    '1.25',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let avgHelper = 0;

for (let i = 0; i < N; i++) {
    const number = +gets();
    
    avgHelper += number;
}

let average = avgHelper / N;

console.log(average.toFixed(2));

// let numArray = [];

// for (let i = 0; i < N; i++) {
//     const element = +gets();
//     numArray.push(element);
// }

// let avgHelper = 0;

// for (let j = 0; j < N; j++) {
//     const element = numArray[j];

//     avgHelper += element;
// }

// let average = avgHelper / N;

// console.log(average.toFixed(2));