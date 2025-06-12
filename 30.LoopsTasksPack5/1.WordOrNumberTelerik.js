let input = [
    'good',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

input = gets();
 
// Set a variable to track whether the input is a number or not
let isNumber = true;
 
// Loop through each character in the input string
for (const char of input) {
    // If the first character is a minus sign, skip it and continue checking the rest of the characters
    if (input.indexOf(char) === 0 && char === "-") {
        continue;
    }
    // If the character is a decimal point, skip it and continue checking the rest of the characters
    if (char === ".") {
        continue;
    }
    // If the character is not a digit, set isNumber to false and break out of the loop
    if (char < "0" || char > "9") {
        isNumber = false;
        break;
    }
}
 
// If the input is a number, parse it and add 1, then print the result to the console
if (isNumber) {
    const number = parseFloat(input);
    console.log(number + 1);
} else { // If the input is not a number, assume it is a word and reverse it
    // Set up an empty string to store the reversed word
    let reversedWord = "";
 
    // Loop through each character in the input string and add it to the beginning of the reversedWord string
    for (const char of input) {
        reversedWord = char + reversedWord;
    }
 
    // Print the reversed word to the console
    console.log(reversedWord);
}