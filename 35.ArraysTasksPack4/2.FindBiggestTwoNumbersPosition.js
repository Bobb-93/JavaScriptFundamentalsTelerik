let input = [
    '8 2 1 3 5 8 9 11 2 5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let ourInput = gets();  // Obtains the input
 
let numbersAsStrings = ourInput.split(' ');  // Splits the input string at each space and stores the substrings in the numbersAsStrings array.
 
let numbers = [];  // Initializes an empty array to store the parsed numbers.
 
for (let i = 0; i < numbersAsStrings.length; i++) {
    numbers[i] = parseFloat(numbersAsStrings[i]);  // Parses each string element to a floating-point number and assigns it to the corresponding index in the numbers array.
}
 
let maxNumber = -Infinity;  // Initializes the maximum number variable with negative infinity.
let maxNumberPosition = -1;  // Initializes the maximum number position variable with -1.
 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];  // Updates the maximum number if a larger number is found.
        maxNumberPosition = i;  // Updates the position of the maximum number.
    }
}
 
let secondMaxNumber = -Infinity;  // Initializes the second maximum number variable with negative infinity.
 
for (let i = 0; i < numbers.length; i++) {
    if (i === maxNumberPosition) {
        continue;  // Skips the current iteration if the index matches the position of the maximum number.
    }
 
    if (numbers[i] > secondMaxNumber) {
        secondMaxNumber = numbers[i];  // Updates the second maximum number if a larger number (excluding the maximum number) is found.
    }
}
 
console.log(maxNumber + ' ' + secondMaxNumber);  // Prints the maximum number and second maximum number separated by a space.