let input = [
    '7 2 -2 1 -5 4 5 -3 1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(' ').map(Number);

let arrayLength = array.length;

let negativeArray = [];
let positiveArray = [];

for (let i = 0; i < arrayLength; i++) {
    const element = array[i];

    if (element < 0) {
        negativeArray.push(element);
    } else {
        positiveArray.push(element);
    }
}

let resultArray = negativeArray.concat(positiveArray);

print(resultArray.join(" "));
