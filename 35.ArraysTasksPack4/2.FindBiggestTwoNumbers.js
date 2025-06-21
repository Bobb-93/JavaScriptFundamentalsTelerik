let input = [
    '8 2 1 3 5 8 9 11 2 5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(' ').map(Number);
let arrayLength = array.length;

let largestElement = -Infinity;
let secondLargestElement = - Infinity;

for (let i = 0; i < arrayLength; i++) {
    const element = array[i];

    if (element >= largestElement) {
        secondLargestElement = largestElement;
        largestElement = element;
        // } else if(element > secondLargestElement && element !== largestElement){
    } else if (element > secondLargestElement && element < largestElement) {
        secondLargestElement = element;
    }

}

print(`${largestElement} ${secondLargestElement}`);

//Chat GPT:
// if (secondLargestElement === -Infinity) {
//     print(`${largestElement} No second largest`);
// } else {
//     print(`${largestElement} ${secondLargestElement}`);
// }