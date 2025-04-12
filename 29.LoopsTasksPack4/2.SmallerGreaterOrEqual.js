let input = [
    // '3',
    // '2',
    // '5',
    // '1',
    '4',
    '-1',
    '4',
    '4',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let previousNumber = +gets();
let resultOrder = "";
let currentNumber;

resultOrder += previousNumber;

for (let i = 0; i < N - 1; i++) {
    currentNumber = +gets();

    if (previousNumber < currentNumber) {
        resultOrder += '<';
    } else if (previousNumber > currentNumber) {
        resultOrder += '>';
    } else {
        resultOrder += '=';
    }

    resultOrder += currentNumber;
    previousNumber = currentNumber;
}

print(resultOrder);