let input = [
    '8 2 1 3 5 8 9 11 2 5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let ourInput = gets();  // Obtains the input

// Split the input string into an array of numbers
let numbers = ourInput.split(", ");
 
// Iterate over the numbers array
for (let i = 0; i < numbers.length; i++) {
    // Iterate over the remaining numbers in the array
    for (let j = i + 1; j < numbers.length; j++) {
        // Convert the current number and the next number to integers
        let current = parseInt(numbers[i]);
        let next = parseInt(numbers[j]);
 
        // Compare the current number with the next number
        if (next > current) {
            // Swap the positions of the current number and the next number
            let temp = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = temp;
        }
    }
}
 
// Join the sorted numbers array into a string with commas
let sortedNumbers = numbers.join(", ");
 
// Print the sorted numbers to the console
console.log(sortedNumbers);