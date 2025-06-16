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

// Get the number of inputs to expect
const n = gets();
 
// Initialize variables for storing words and numbers, and keep track 
// of the type of the previous input (to determine when to concatenate or add)
let words = "";
let numbers = 0;
let prevTypeIsNumber = false;
 
// Loop through each input
for (let i = 0; i < n; i++) {
    // Read the current input
    const input = gets();
 
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
 
    // If the input is a number, add numbers only if they are adjacent
    // If the input is a word, concatenate it with the previous words with a dash only if they are adjacent
    if (isNumber) {
        if (prevTypeIsNumber) {
            // If the previous input was also a number, add the current number to the running total
            const current = parseFloat(input);
            numbers += current;
        } else {
            // If the previous input was a word or the first input, print the concatenated words so far (if any),
            // reset the words variable and start a new number sum with the current input
            if (words !== '') {
                console.log(words);
                words = '';
            }
            const current = parseFloat(input);
            numbers = current;
        }
        // Record that the current input is a number
        prevTypeIsNumber = true;
    } else {
        if (prevTypeIsNumber) {
            // If the previous input was a number, print the running total of numbers so far,
            // reset the numbers variable to zero, and concatenate the current word with the previous ones (if any)
            console.log(numbers);
            numbers = 0;
        }
        if (words !== '') {
            words += '-' + input;
        } else {
            words += input;
        }
        // Record that the current input is a word
        prevTypeIsNumber = false;
    }
}
 
// If there is a number after a word we print the concatenated words so far
// If there is a word after a number we print the sum so far
if (prevTypeIsNumber) {
    console.log(numbers);
} else if (words !== '') {
    console.log(words);
}