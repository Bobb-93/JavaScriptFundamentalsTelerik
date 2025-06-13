let input = [
    '3',
    '1',
    '1',
    '7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


function checkIfNumber(someString) {
    let isNumber = false;

    for (let i = 0; i < someString.length; i++) {
        const element = someString[i];

        if (element >= '0' && element <= '9') {
            isNumber = true;
        }

    }

    return isNumber;
}

let N = +gets();

let outputString = "";
let numbersSum = 0;
let inputString = "";

for (let i = 1; i <= N; i++) {
    inputString = gets();

    if (checkIfNumber(inputString)) {
        numbersSum += +inputString;
    } else {
        outputString += `${inputString}-`;
    }
}

outputString = outputString.slice(0, -1);

if (outputString.length == 0) {
    print("no words");
} else {
    print(outputString);

}

print(numbersSum);
