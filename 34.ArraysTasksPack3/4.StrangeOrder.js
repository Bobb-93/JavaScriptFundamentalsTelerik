let input = [
    '3,-12,0,0,13,5,1,0,-2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(',').map(Number);

let negativeArray = [];
let positiveArray = [];
let zeroArray = [];

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element < 0) {
        negativeArray.push(element);
    } else if (element == 0) {
        zeroArray.push(element);
    } else {
        positiveArray.push(element);
    }

}

let resultArray = negativeArray.concat(zeroArray, positiveArray);

print(resultArray.join());

