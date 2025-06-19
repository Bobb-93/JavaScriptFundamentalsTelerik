let input = [
    '-1,0,1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(',').map(Number);
let arrayLength = array.length;

let sumHelper = 0;

for (let i = 0; i < arrayLength; i++) {
    sumHelper += array[i];
}

let average = sumHelper / arrayLength;

print(`avg: ${average.toFixed(2)}`);

let belowArray = [];
let aboveArray = [];

for (let i = 0; i < arrayLength; i++) {
    const element = array[i];

    if (element < average) {
        belowArray.push(element);
    } else if (element > average) {
        aboveArray.push(element);
    }
}

print(`below: ${belowArray.join()}`);
print(`above: ${aboveArray.join()}`);


