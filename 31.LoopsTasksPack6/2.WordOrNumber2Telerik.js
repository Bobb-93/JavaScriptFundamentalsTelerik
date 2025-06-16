let input = [
    '3',
    '1',
    '1',
    '7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


const n = gets();
let words = "";
let numbers = 0;
 
for (let i = 0; i < n; i++) {
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
 
    // If the input is a number, add it to the sum of all numbers
    if (isNumber) {
        const current = parseFloat(input);
        numbers += current;
    } else { // If the input is not a number, assume it is a word and concatenate it with a dash with the previous words
        if (words !== '') {
            words += '-' + input;
        } else {
            words += input;
        }
    }
}
 
// print all words concatenated with - between them or "no words" if there were no words in the input.
console.log(words !== '' ? words : 'no words');
// print the sum of all the numbers or "0" if there were no numbers.
console.log(numbers); 