let input = [
    '2,3,1',
    '5,7,3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let listOne = gets().split(',').map(Number);
let listTwo = gets().split(',').map(Number);
// console.log(array);

let N = listOne.length;
let combinedArray = [];
let k = 0;

for (let i = 0; i < N; i++) {
    const element = listOne[i];
    combinedArray.push(element);

    for (let j = 0; j < N; j++) {
        const innerElement = listTwo[j];
        if(j===i){
            combinedArray.push(innerElement);
        }
    }
}

let output = combinedArray.join(',');

console.log(output);
