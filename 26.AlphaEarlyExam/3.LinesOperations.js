let input = [
    '4 3',
    '1',
    '2',
    '3',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let nAndM = gets();
let myArray = nAndM.split(" ");

let N = myArray[0];
let M = myArray[1];

let totalSum = 0;
// console.log(N, M);

for (let i = 0; i < N; i++) {
    let ithLineNumber = +gets();
    let tempArray = [];

    tempArray.push(ithLineNumber);
    for (let j = 1; j < M; j++) {
        ithLineNumber++;
        tempArray.push(ithLineNumber)
    }

    // console.log(`3.tmp array: ${tempArray}`);

    if (i % 3 === 0) {
        let min = Infinity;
        for (let j = 0; j < tempArray.length; j++) {
            const element = tempArray[j];
            if (element < min) {
                min = element;
                // console.log(`min = ${min}`);
            }
        }
        totalSum += min;
        // console.log(totalSum);

    } else if (i % 3 === 1) {
        let max = -Infinity;
        for (let j = 0; j < tempArray.length; j++) {
            const element = tempArray[j];
            if (element > max) {
                max = element;
            }
        }
        totalSum += max;
        // console.log(totalSum);


    } else if (i % 3 === 2) {
        let avgHelper = 0;
        for (let j = 0; j < tempArray.length; j++) {
            const element = tempArray[j];
            avgHelper += element;
        }
        let average = Math.floor(avgHelper / M);
        totalSum += average;
        console.log(totalSum);

    }
    // console.log(`1.tmp array: ${tempArray}`);

    tempArray = [];
    // console.log(`2.tmp array: ${tempArray}`);

}

console.log(totalSum);