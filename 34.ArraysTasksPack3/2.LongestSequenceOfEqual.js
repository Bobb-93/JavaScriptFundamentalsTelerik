let input = [
    '10',
    '2',
    '1',
    '1',
    '2',
    '3',
    '3',
    '2',
    '2',
    '2',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let array = [];

for (let i = 0; i < N; i++) {
    array.push(+gets());
}

let maximalSequenceLength = 1;
let currentMaximalSequenceLength = 1;
let prev = array[0];

for (let i = 1; i < N; i++) {
    let element = array[i];
    if (element === prev) {
        currentMaximalSequenceLength++;
        if (maximalSequenceLength < currentMaximalSequenceLength) {
            maximalSequenceLength = currentMaximalSequenceLength;
            // print(`currentMaximalSequenceLength: ${currentMaximalSequenceLength}`);
            // print(`maximalSequenceLength: ${maximalSequenceLength}`);
        }
    } else {
        currentMaximalSequenceLength = 1;//!!!
        prev = element;
    }
    // print(`element: ${element}`);
    // print(`prev: ${prev}`);

}

print(maximalSequenceLength);