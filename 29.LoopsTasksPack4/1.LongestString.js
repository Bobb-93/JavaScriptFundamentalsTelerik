let input = [
    'banica',
    'pizza',
    'kiufte',
    'END',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let foodName;
let longestFoodName = "";
let longestFoodNameLength = 0;
let currentLength;

while ((foodName = gets()) !== "END") {
    currentLength = foodName.length;
    if (foodName.length >= longestFoodNameLength) {
        longestFoodName = foodName;
        longestFoodNameLength = currentLength;
    }
}

print(longestFoodName);