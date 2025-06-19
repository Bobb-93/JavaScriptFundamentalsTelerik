let input = [
    'telerik',
    'teleric',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstString = gets();
let secondString = gets();

let firstStringToCharArray = Array.from(firstString);
let secondStringToCharArray = Array.from(secondString);

let minLength = Math.min(firstStringToCharArray.length, secondStringToCharArray.length);
let areCharArraysEqual = "equal";

for (let i = 0; i < minLength; i++) {
    if (firstStringToCharArray[i] < secondStringToCharArray[i]) {
        areCharArraysEqual = "first";
        break;
    }
    if (firstStringToCharArray[i] > secondStringToCharArray[i]) {
        areCharArraysEqual = "second";
        break;
    }
}

if (areCharArraysEqual === "equal") {
    if (firstStringToCharArray.length < secondStringToCharArray.length) {
        areCharArraysEqual = "first";
    } else if (firstStringToCharArray.length > secondStringToCharArray.length) {
        areCharArraysEqual = "second";
    }
}

print(areCharArraysEqual);

