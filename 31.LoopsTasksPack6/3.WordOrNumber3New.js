let input = [
    '6',
    '1',
    'go',
    '1',
    '1',
    'there',
    'IT',
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
let isPreviousString = false;
let numberCount = 0;
let stringCount = 0;

for (let i = 1; i <= N; i++) {
    inputString = gets();

    if (checkIfNumber(inputString)) {
        numberCount++;
        numbersSum += +inputString;
        isPreviousString = false;
        outputString = "";
    } else {
        stringCount++;
        outputString += `${inputString}-`;
        numbersSum = 0;
        isPreviousString = true;
    }

    print(`inputString : ${inputString}`);

    if(isPreviousString){
        outputString = outputString.slice(0, -1);
        print(outputString);
        outputString += "-"
    } else if(numberCount == 1 || numberCount >= 3){
        print(numbersSum);
    }
}


