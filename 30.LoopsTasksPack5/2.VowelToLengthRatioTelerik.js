let input = [
    '4',
    'pizza',
    'macaroni',
    'kiufte',
    'banica',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Initialize variables to hold the best food option
let bestFood = "";
let bestRatio = Infinity;
let bestCount = 0;
 
// Read the number of foods from input
const n = parseInt(gets());
 
// Loop through each food option
for (let i = 0; i < n; i++) {
    // Read in the current food option
    const food = gets();
 
    // Calculate the ratio of vowels to letters for this food option
    let count = 0;
    const vowels = 'aouei';
    for (let j = 0; j < food.length; j++) {
        if (vowels.includes(food[j])) {
            count++;
        }
    }
    const letters = food.length;
    const ratio = count / letters;
 
    // If this food option has a better vowel-to-letter ratio than previous options, update the variables to store it as the best option
    if (ratio < bestRatio ||
        (ratio === bestRatio && count > bestCount) ||
        (ratio === bestRatio && count === bestCount && food.length > bestFood.length)
    ) {
        // Update the variables to store this food option as the best option
        bestFood = food;
        bestRatio = ratio;
        bestCount = count;
    }
 
}
 
// Output the best food option and its vowel-to-letter ratio
console.log(bestFood + " " + bestCount + "/" + bestFood.length);