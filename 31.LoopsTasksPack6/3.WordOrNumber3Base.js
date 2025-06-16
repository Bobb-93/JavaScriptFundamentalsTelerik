let input = [
    '9',
    'try',
    'google',
    'it',
    '2',
    'plus',
    '2',
    '=',
    '52',
    '-10',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function checkIfNumber(someString) {
    // Safer check: treat string as a number only if it fully parses
    return !isNaN(someString);
}

let N = +gets();

let numbersSum = 0;
let wordGroup = [];

let previousType = null;

for (let i = 0; i < N; i++) {
    let inputString = gets();

    if (checkIfNumber(inputString)) {
        if (previousType === "word" && wordGroup.length > 0) {
            print(wordGroup.join("-"));
            wordGroup = [];
        }
        numbersSum += +inputString;
        previousType = "number";
    } else {
        if (previousType === "number") {
            print(numbersSum);
            numbersSum = 0;
        }
        wordGroup.push(inputString);
        previousType = "word";
    }
}

if (previousType === "word" && wordGroup.length > 0) {
    print(wordGroup.join("-"));
}
if (previousType === "number") {
    print(numbersSum);
}
